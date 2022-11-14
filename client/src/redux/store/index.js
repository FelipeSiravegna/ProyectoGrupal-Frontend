import { applyMiddleware, createStore } from "redux";

import reducer from '../reducer/index'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);


// const store = createStore(reducer, applyMiddleware(thunk));

export default store