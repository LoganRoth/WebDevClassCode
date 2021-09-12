import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import 'tachyons'
import App from './containers/App'
import './index.css'
import { searchRobots, getRobotsReducer } from './reducers'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({ searchRobots, getRobotsReducer })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
