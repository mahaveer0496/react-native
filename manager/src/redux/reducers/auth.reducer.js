const initialState = {
  email: '',
  password: '',
  loading: false,
  user: null,
  error: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'EMAIL_CHANGED':
      return { ...state, email: action.email };
    case 'PASSWORD_CHANGED':
      return { ...state, password: action.password };
    case 'LOGIN_START':
      return { ...state, loading: true };
    case 'LOGIN_FAIL':
      return { ...state, loading: false, error: 'Authentication Failed' };
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, user: action.user, error: '' };
    default:
      return state;
  }
};
