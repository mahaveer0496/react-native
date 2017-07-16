import { createStore, combineReducers } from 'redux';

import libraryReducer from './library.reducer';
import selectionReducer from './selection.reducer';
const reducer = combineReducers({
  libraries: libraryReducer,
  selectedId: selectionReducer
})

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 