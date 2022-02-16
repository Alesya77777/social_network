import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/GET_CAPTCHA_URL_SUCCESS";


const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  photo: null,
  captchUrl: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return ({
        ...state,
        ...action.data,
      });
    default:
      return state;
  };
};



export const setAuthUserData = (userId, login, email, isAuth) => {
  return { type: SET_USER_DATA, data: { userId, login, email, isAuth } }
};

export const getCaptchaUrlSuccess = (captchaUrl) => {
  return { type: GET_CAPTCHA_URL_SUCCESS, data: { captchaUrl } }
};


export const getAuthUserData = () => async (dispatch) => {
  const data = await authAPI.getDataMe();
  if (data.resultCode === 0) {
    let { id, login, email } = data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
debugger;
  const data = await authAPI.login(email, password, rememberMe, captcha);
  if (data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    if (data.resultCode === 10) {
      dispatch(captchaUrl())
    }
    let message = data.messages.length > 0 ? data.messages[0] : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const captchaUrl = () => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();
  debugger;
  const captchaUrl = data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));

};


export const logouts = () => async (dispatch) => {
  const data = await authAPI.logouts();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
};


export default authReducer;