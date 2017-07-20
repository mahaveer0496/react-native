import firebase from 'firebase';

export const emailChanged = email => ({
  type: 'EMAIL_CHANGED',
  email,
});

export const passwordChanged = password => ({
  type: 'PASSWORD_CHANGED',
  password,
});

const loginStart = () => ({
  type: 'LOGIN_START',
});

const loginFail = () => ({
  type: 'LOGIN_FAIL',
});

const loginSuccess = user => ({
  type: 'LOGIN_SUCCESS',
  user,
});

export const loginUser = ({ email, password }) => dispatch => {
  dispatch(loginStart());
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(loginSuccess(user));
    })
    .catch(() => {
      dispatch(loginFail());
    });
};
