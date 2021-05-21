import { useState, createContext } from 'react';

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [pairGraph, setPairGraph] = useState(new Map());

  const store = {
    curPairs: [pairGraph, setPairGraph],
  };

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;