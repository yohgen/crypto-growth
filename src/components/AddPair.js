import { useContext, useState } from 'react';
import { StoreContext } from '../utils/store';

const AddPair = () => {
  const pairGraph = useContext(StoreContext).pairGraph;
  const [actPairs] = useContext(StoreContext).actPairs;
  const pairChange = useContext(StoreContext).pairChange;

  const [baseVal, setBaseVal] = useState('');
  const [quoteVal, setQuoteVal] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const pair = baseVal + quoteVal;
    if (!actPairs.has(pair)) {
      pairChange.current.set('add', pair);
    }

    setBaseVal('');
    setQuoteVal('');
  };

  return (
    <div className='add-pair'>
      <form name='add-pair' method='POST' onSubmit={handleFormSubmit}>
        <div className='add-pair-lists'>
          <div className='list base-currency'>
            <label htmlFor='base-currency'>base</label>
            <input
              name='base-currency'
              id='base-currency'
              list='base-currency-list'
              onChange={(e) => {
                setBaseVal(e.target.value);
                setQuoteVal('');
              }}
              value={baseVal}
              required
            />
            <datalist id='base-currency-list'>
              {pairGraph.current.size &&
                [...pairGraph.current.keys()].map((ele) => {
                  return <option key={'base_' + ele} value={ele} />;
                })}
            </datalist>
          </div>
          <span>/</span>
          <div className='list quote-currency'>
            <label htmlFor='quote-currency'>quote</label>
            <input
              name='quote-currency'
              id='quote-currency'
              list='quote-currency-list'
              value={quoteVal}
              onChange={(e) => setQuoteVal(e.target.value)}
              required
            />
            <datalist id='quote-currency-list'>
              {pairGraph.current.has(baseVal) &&
                pairGraph.current.get(baseVal).map((ele) => {
                  return <option key={'quote_' + ele} value={ele} />;
                })}
            </datalist>
          </div>
        </div>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default AddPair;
