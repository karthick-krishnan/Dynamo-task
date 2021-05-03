
import { firebaseApp }  from '../utils/firebase';
import { messages } from '../constants/messages'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNING_UP_START = 'SIGNING_UP_START';
export const SIGNING_UP_SUCCESS = 'SIGNING_UP_SUCCESS';
export const SIGNING_UP_FAILURE = 'SIGNING_UP_FAILURE';


export function loginStart() {
  return {
    type: LOGIN_START,
  };
}

export function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    payload: error
  };
}

export function signingUpStart() {
  return {
    type: SIGNING_UP_START
  };
}

export function signingUpSuccess(status) {
  return {
    type: SIGNING_UP_SUCCESS,
    payload : status
  };
}

export function signingUpFailure(status) {
  return {
    type: SIGNING_UP_FAILURE,
    payload : status
  };
}

export const login = (user) => {
  return (dispatch) => {
    dispatch(loginStart());
    firebaseApp.auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      dispatch(loginSuccess({code: 200, token: data.user.getIdToken()}));
    })
    .catch((error) => {
      console.log('error', error);
      dispatch(loginFailure({code: 401, msg: messages.authentication.LOGIN_FAILURE}))
    })
  }
}

  export const signUp = (params) => {
    const {email, password } = params;
    return (dispatch) => {
      dispatch(signingUpStart());
      firebaseApp.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => dispatch(signingUpSuccess({code: 200, msg: messages.authentication.SIGNUP_SUCCESS})))
      .catch((error) => {
        dispatch(signingUpFailure({code: 401, msg: messages.authentication.SIGNUP_FAILURE}))
      })
    }
  }

  
  
  

