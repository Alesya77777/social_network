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
        isAuth: true,
        photo: action.photo,
      });
    default:
      return state;
  };
};



export const setAuthUserData = (userId, login, email, photo) => {
  return { type: SET_USER_DATA, data: { userId, login, email, photo } }
};


export const auth = () => {
  return (dispatch) => {
    authAPI.getDataMe()
    .then(data => {
      if (data.resultCode === 0) {
        const { id, login, email } = data.data;
        dispatch(setAuthUserData(id, login, email));
 
      }
    });
  }
};


export default authReducer;