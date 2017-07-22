const initialState = {
  name: '',
  phone: '',
  shift: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'EMPLOYEE_UPDATE':
      return { ...state, [action.prop]: action.value };

    default:
      return state;
  }
};
