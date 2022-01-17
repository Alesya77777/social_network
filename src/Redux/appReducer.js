import { getAuthUserData } from "./auth";


const INITIALISED_SUCCESS = "SET_USER_DATA"


const initialState = {
  initialized: false,

};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALISED_SUCCESS:
      return ({
        ...state,
        initialized: true,
      });
    default:
      return state;
  };
};



export const initializedSuccess = () => {
  return { type: INITIALISED_SUCCESS }
};


export const initializeApp = () => {
  return (dispatch) => {

    let dispatchResult = dispatch(getAuthUserData());
    Promise.all([dispatchResult]).then(() => dispatch(initializedSuccess()));
  }
};



export default appReducer;