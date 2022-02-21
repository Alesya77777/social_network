import { getAuthUserData } from "./auth";


const INITIALISED_SUCCESS = "SET_USER_DATA"

type InitialStateType = {
  initialized: boolean,
};

const initialState = {
  initialized: false,
};
const appReducer = (state = initialState, action: any) : InitialStateType=> {
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

type initializedSuccessType = {
  type: typeof INITIALISED_SUCCESS
};

export const initializedSuccess = () : initializedSuccessType => {
  return { type: INITIALISED_SUCCESS }
};


export const initializeApp = () => {
  return (dispatch : any) => {

    let dispatchResult = dispatch(getAuthUserData());
    Promise.all([dispatchResult]).then(() => dispatch(initializedSuccess()));
  }
};



export default appReducer;