import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"


const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  photo: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return ({
        ...state,
        ...action.data,
      });
    default:
      return state;
  };
};



export const setAuthUserData = (userId, login, email, isAuth) => {
  return { type: SET_USER_DATA, data: { userId, login, email,  isAuth } }
};


export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.getDataMe()
      .then(data => {
        if (data.resultCode === 0) {
          let { id, login, email } = data.data;
          dispatch(setAuthUserData(id, login, email, true));

        }
      });
  }
};

export const login = (email, password, rememberMe) => (dispatch) => {



  authAPI.login(email, password, rememberMe)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(getAuthUserData())
      }
      else {
        let message = data.messages.length>0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
      }
    })
};


export const logouts = () => (dispatch) => {
  authAPI.logouts()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
}


export default authReducer;