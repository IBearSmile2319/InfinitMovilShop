import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Provider} from 'react-redux'
import store from './store'

window.store=store

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    limit={3}
    />
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
