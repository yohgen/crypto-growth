import { createContext, useRef, useState, useEffect } from 'react';
import pairDictImport from './pairDict';
import pairGraphImport from './pairGraph';
import sortActPairsImport from './sortActPairs';

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  // ES6 map of all pairs and their repsective base/quote currencies.
  // It's a lazy solution for the problem of separating individual pairs.
  const pairDict = useRef(pairDictImport);
  // ES6 map containing all possible base currencies as keys
  // and arrays filled with respective possible quote currencies as values.
  // It's named 'graph' for brevity, since it's kinda like adjacency list.
  const pairGraph = useRef(pairGraphImport);

  // ES6 map of all active pairs with percent changes as values.
  const [actPairs, setActPairs] = useState(new Map(
    [ ['DOGEUSDT', 0] ]
  ));
  // Function that sorts active pair map in descending order.
  const sortActPairs = useRef(sortActPairsImport);

  // This ref is needed to integrate user addition/removal of pairs *with* the cycle of data updates coming from WebSocket.
  // Time window of 1 sec is short, which compells us to combine addition/removal and data updates in one go,
  // so as to limit the changes to the state of <actPairs> to the interval of coming data updates (i.e. ~1 sec).
  const pairChange = useRef(
    new Map([
      ['add', ''],
      ['remove', ''],
    ])
  );

  // For displaying modal window while the first connection to WS is made
  const [isOpen, setIsOpen] = useState(false);

  // It's not needed for rerenders, so it's ref.
  const ws = useRef(new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr'));

  useEffect(() => {
    ws.current.onopen = () => console.log('[WS] Open');
    // Need to implement reconnection logic
    ws.current.onclose = () => console.log('[WS] Close');
  }, []);

  useEffect(() => {
    ws.current.onmessage = (msg) => {
      console.log('[WS] Message');

      // If there are no active pairs AND the user didn't add a new one, then we can skip the data update entirely.
      if (actPairs.size === 0 && pairChange.current.get('add') === '') return;

      // Make a copy of active pairs to avoid unnecessary changes to the state,
      // then, if there is a pair to add, add it to the copy, and/or delete the unneeded pair.
      let tempActPairs = new Map(actPairs);
      if (pairChange.current.get('add')) {
        tempActPairs.set(pairChange.current.get('add'), 0);
      }
      if (pairChange.current.get('remove')) {
        tempActPairs.delete(pairChange.current.get('remove'));
      }

      // Cycle through each *s*ymbol (a.k.a currency pair/ticker) and its 24h *p*ercent change.
      // If the copy does NOT have the pair currently being processed, skip iteration.
      const data = JSON.parse(msg.data);
      for (const { s, P } of data) {
        if (!tempActPairs.has(s)) continue;
        tempActPairs.set(s, parseFloat(P));
      }

      // After the full update has been performed on the copy,
      // sort it in the descending order and write it the state.
      tempActPairs = sortActPairs.current(tempActPairs);
      setActPairs(tempActPairs);

      // Reset the ref that holds pairs to be added/removed
      pairChange.current.set('add', '');
      pairChange.current.set('remove', '');
      if (!isOpen) setIsOpen(!isOpen);
    }
  });

  const store = {
    pairDict: pairDict,
    pairGraph: pairGraph,
    sortActPairs: sortActPairs,
    ws: ws,
    actPairs: [actPairs, setActPairs],
    pairChange: pairChange,
    isOpen: [isOpen, setIsOpen],
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
