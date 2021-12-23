import { combineReducers, createStore } from "redux";
import authReducer from "./auth";
import dialogsReducer from "./dialogsReducer";
import newsReducer from "./newsReducer";
import profileReducer from "./profileReducer";
import sitebarReducer from "./sitebarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sitebar: sitebarReducer,
  newsPage: newsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;