import AddPair from './AddPair';
import RemovePair from './RemovePair';

const Top = () => {
  return (
    <div className='top'>
      <div className='top-div'>
        <h2>Add Pair: </h2>
        <AddPair />
      </div>
      <div className='top-div'>
        <h2>Remove Pair: </h2>
        <RemovePair />
      </div>
    </div>
  );
};

export default Top;
