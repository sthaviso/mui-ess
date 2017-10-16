import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { reducers } from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import { sagas } from './sagas/index';

injectTapEventPlugin();

const sagaMiddleware = createSagaMiddleware();
let middleware = applyMiddleware(sagaMiddleware);
if (process.env.NODE_ENV !== 'production') {
  middleware = compose(middleware, window.devToolsExtension && window.devToolsExtension());
}
const store = createStore(reducers, middleware);
sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
