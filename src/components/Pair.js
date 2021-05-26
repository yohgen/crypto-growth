import { useState, useEffect } from 'react';

const Pair = ({ ticker, percent }) => {
  const [antePctVal, setAntePctVal] = useState(0);
  const [colorClass, setColorClass] = useState('');

  useEffect(() => {
    let diff = antePctVal - percent;
    if (diff < 0) setColorClass(' green');
    if (diff > 0) setColorClass(' red');
    if (antePctVal === percent) setColorClass('');
    setAntePctVal(percent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [percent]);

  return (
    <div className='pair-box'>
      <div className='corners left'>
        <span className='left-top-corner'>&zwnj;</span>
        <span className='left-bot-corner'>&zwnj;</span>
      </div>
      <div className='pair-content'>
        <p className='ticker'>{ticker}</p>
        <p className={'percent' + colorClass}>{percent + '%'}</p>
      </div>
      <div className='corners right'>
        <span className='right-top-corner'>&zwnj;</span>
        <span className='right-bot-corner'>&zwnj;</span>
      </div>
    </div>
  );
};

export default Pair;
