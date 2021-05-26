import Loader from './Loader';

const Modal = () => {
  return (
    <div className='modal-bg'>
      <div className='modal'>
        <Loader />
      </div>
    </div>
  );
};

export default Modal;
