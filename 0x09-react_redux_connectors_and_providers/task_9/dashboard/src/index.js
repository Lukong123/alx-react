import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App/App';
import { uiReducer } from './reducers/uiReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extenstion';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(uiReducer,  composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')

);
