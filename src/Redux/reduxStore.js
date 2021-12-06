import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import newsReducer from "./newsReducer";
import profileReducer from "./profileReducer";
import sitebarReducer from "./sitebarReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sitebar: sitebarReducer,
  newsPage: newsReducer,
});

let store = createStore(reducers);

export default store;