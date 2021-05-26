import { useState, useContext } from 'react';
import { StoreContext } from '../utils/store';

const RemovePair = () => {
  const pairDict = useContext(StoreContext).pairDict;
  const [actPairs] = useContext(StoreContext).actPairs;
  const pairChange = useContext(StoreContext).pairChange;

  const [removeVal, setRemoveVal] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let pair = removeVal.replace(/\//g, '');
    if (actPairs.has(pair)) {
      pairChange.current.set('remove', pair);
    }

    setRemoveVal('');
  };

  return (
    <div className='remove-pair'>
      <form name='remove-pair' method='POST' onSubmit={handleFormSubmit}>
        <div className='list remove-pair-list'>
          <label htmlFor='currency-pair'>pair</label>
          <input
            id='currency-pair'
            name='currency-pair'
            list='pair-list'
            value={removeVal}
            onChange={(e) => setRemoveVal(e.target.value)}
            required
          />
          <datalist id='pair-list'>
            {actPairs.size &&
              [...actPairs.keys()].map((ele) => {
                const [base, quote] = pairDict.current.get(ele);
                return <option key={base + quote} value={base + '/' + quote} />;
              })}
          </datalist>
        </div>
        <button type='submit'>Remove</button>
      </form>
    </div>
  );
};

export default RemovePair;
