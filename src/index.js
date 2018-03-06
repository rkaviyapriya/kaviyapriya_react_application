import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import productsReducer from "./reducers/products";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import registerServiceWorker from './registerServiceWorker';
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { getProductsWatcher } from "./sagas/index"
let sagaMiddleware = createSagaMiddleware();
const store = createStore(
  productsReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, createLogger()))
);
sagaMiddleware.run(getProductsWatcher);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
