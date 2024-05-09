import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './tsx/App';
//Global styles
import './scss/index.scss';
//Redux
import { store } from './tsx/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={ store }>
      <App /> 
    </Provider>
  </React.StrictMode>,
)
