import { useContext } from 'react';
import { StoreContext } from './utils/store';
import Top from './components/Top';
import Header from './components/Header';
import Bot from './components/Bot';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const [isOpen] = useContext(StoreContext).isOpen;

  return (
    <div className='App'>
      {isOpen || <Modal />}
      <div className='main'>
        <Header />
        <Top />
        <Bot />
      </div>
      <Footer />
    </div>
  );
}

export default App;
