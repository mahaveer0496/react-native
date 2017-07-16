const selectionReducer = (state = '', action)=>{
   switch (action.type) {
      case 'SELECT_LIBRARY':
         return action.id;
      default: return state;
   }
}

export default selectionReducer