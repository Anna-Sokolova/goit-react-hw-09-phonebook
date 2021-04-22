import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';
import App from './App';
//styles
import "modern-normalize/modern-normalize.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={store.persistor}>
    <BrowserRouter>
      <Provider store={store.store}>
        <App />
      </Provider>
    </BrowserRouter>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById('root'),
);
