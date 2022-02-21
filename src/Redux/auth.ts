import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/GET_CAPTCHA_URL_SUCCESS";

type InitialStateType = {
  userId: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean | false,
  photo: string | null,
  captchUrl: string | null,
};

const initialState: InitialStateType = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  photo: null,
  captchUrl: null,
};

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return ({
        ...state,
        ...action.data,
      });
    default:
      return state;
  }
};

type SetAuthUserDataType ={
  type: typeof SET_USER_DATA,
  data: object
};

export const setAuthUserData = (userId: number | null , login : string | null, email: string | null, isAuth: boolean): SetAuthUserDataType => {
  return { type: SET_USER_DATA, data: { userId, login, email, isAuth } }
};

type GetAuthUserDataType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS,
  data: object 
};

export const getCaptchaUrlSuccess = (captchaUrl: string ): GetAuthUserDataType => {
  return { type: GET_CAPTCHA_URL_SUCCESS, data: { captchaUrl } }
};


export const getAuthUserData = () => async (dispatch: any) => {
  const data = await authAPI.getDataMe();
  if (data.resultCode === 0) {
    let { id, login, email } = data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

export const login = (email: string, password: string, rememberMe: boolean , captcha: any) => async (dispatch : any ) => {
  const data = await authAPI.login(email, password, rememberMe, captcha );
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

export const captchaUrl = () => async (dispatch : any) => {
  const data = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));

};


export const logouts = () => async (dispatch : any) => {
  const data = await authAPI.logouts();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
};


export default authReducer;