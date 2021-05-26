import { useContext } from 'react';
import { StoreContext } from '../utils/store';
import Pair from './Pair';

const Bot = () => {
  const pairDict = useContext(StoreContext).pairDict;
  const [actPairs] = useContext(StoreContext).actPairs;

  return (
    <div className='bot'>
      {[...actPairs.entries()].map(([ticker, percent]) => {
        let [base, quote] = pairDict.current.get(ticker);
        return <Pair ticker={base + '/' + quote} percent={percent} key={ticker} />;
      })}
    </div>
  );
};

export default Bot;
