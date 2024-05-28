import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import CartPage from './features/cart/CartPage';

function App() {
  return (
    <Provider store={store}>
      <CartPage />
    </Provider>
  );
}

export default App;
