import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

import authReducer from './auth.reducer';
import employeeFormReducer from './employeeForm.reducer';

const reducer = combineReducers({
  auth: authReducer,
  employeeForm: employeeFormReducer,
});

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
