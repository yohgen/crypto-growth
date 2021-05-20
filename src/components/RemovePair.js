import { useState } from 'react';

const RemovePair = () => {
  const [pairs, setPairs] = useState(['BTC/USDT', 'ETH/BTC', 'BNB/UAH']);

  return (
    <div className='remove-pair'>
      <form name='remove-pair' method='POST'>
        <div className='list remove-pair-list'>
          <label htmlFor='currency-pair'>pair</label>
          <input id='currency-pair' name='currency-pair' list='pair-list' required />
          <datalist id='pair-list'>
            {pairs && pairs.map((ele) => {
              return <option value={ele} />;
            })}
          </datalist>
        </div>
        <button type='submit'>Remove</button>
      </form>
    </div>
  );
};

export default RemovePair;
