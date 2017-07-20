import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

import authReducer from './auth.reducer';

const reducer = combineReducers({
  auth: authReducer,
});

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
