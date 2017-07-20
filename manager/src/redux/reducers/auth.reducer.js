const initialState = {
  email: '',
  password: '',
  loading: false,
  user: null,
};
export default (authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EMAIL_CHANGED':
      return { ...state, email: action.email };
    case 'PASSWORD_CHANGED':
      return { ...state, password: action.password };
    case 'LOGIN_START':
      return { ...state, loading: true };
    case 'LOGIN_FAIL':
      return { ...state, loading: false };
    case 'LOGIN_SUCCESS':
      return { ...state, user: action.user };
    default:
      return state;
  }
});
