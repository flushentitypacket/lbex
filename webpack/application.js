import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import InventionsScreen from './screens/InventionsScreen';
import store from './store';

class App extends React.Component {
  render = () => (
    <InventionsScreen />
  );
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
