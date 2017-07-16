import { createStore, combineReducers } from 'redux';

import libraryReducer from './library.reducer';
const reducer = combineReducers({
  libraries: libraryReducer
})

export default createStore(reducer); 