import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk  from "redux-thunk";
import authReducer from "./auth";
import dialogsReducer from "./dialogsReducer";
import newsReducer from "./newsReducer";
import profileReducer from "./profileReducer";
import sitebarReducer from "./sitebarReducer";
import usersReducer from "./usersReducer";
import { reducer as formReducer  } from "redux-form";
import appReducer from "./appReducer";


let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sitebar: sitebarReducer,
  newsPage: newsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;