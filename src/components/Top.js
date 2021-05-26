import { useMediaQuery } from 'react-responsive';
import AddPair from './AddPair';
import RemovePair from './RemovePair';

const Top = () => {
  const isNarrow = useMediaQuery({ query: 'screen and (min-width: 700px)' });

  return (
    <div className='top'>
      <div className='top-div'>
        {isNarrow && <h2>Add Pair&thinsp;</h2>}
        <AddPair />
      </div>
      <div className='top-div'>
        {isNarrow && <h2>Remove Pair&thinsp;</h2>}
        <RemovePair />
      </div>
    </div>
  );
};

export default Top;
