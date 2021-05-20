import { useState } from 'react';

const AddPair = () => {
  const [baseCurs, setBaseCurs] = useState({
    BTC: ['USDT', 'RUB', 'BUSD', 'EUR', 'UAH'],
    ETH: ['BTC', 'USDT', 'RUB', 'BUSD', 'EUR'],
    BNB: ['BTC', 'ETH', 'USDT', 'RUB', 'BUSD', 'EUR', 'UAH'],
  });
  const [quoteCurs, setQuoteCurs] = useState([]);
  const [quoteCurValue, setQuoteCurValue] = useState('');

  return (
    <div className='add-pair'>
      <form name='add-pair' method='POST'>
        <div className='add-pair-lists'>
          <div className='list base-currency'>
            <label htmlFor='base-currency'>base</label>
            <input
              name='base-currency'
              id='base-currency'
              list='base-currency-list'
              onChange={(e) => {
                setQuoteCurs(baseCurs[e.target.value]);
                setQuoteCurValue('');
              }}
              required
            />
            <datalist id='base-currency-list'>
              {Object.keys(baseCurs) && Object.keys(baseCurs).map((ele) => {
                return <option value={ele} />;
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
              value={quoteCurValue}
              onChange={(e) => setQuoteCurValue(e.target.value)}
              required
            />
            <datalist id='quote-currency-list'>
              {quoteCurs && quoteCurs.map((ele) => <option value={ele} />)}
            </datalist>
          </div>
        </div>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default AddPair;
