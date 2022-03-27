import React from 'react';
import ReactDOM from 'react-dom';
import App from './RootApp/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import './style/style.scss';

const store = setupStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
