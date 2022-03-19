import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk  from "redux-thunk";
import authReducer from "./auth";
import dialogsReducer from "./dialogsReducer";
import newsReducer from "./newsReducer";
import profileReducer from "./profileReducer";
import sitebarReducer from "./sitebarReducer";
import usersReducer from "./usersReducer";
import { reducer as formReducer  } from "redux-form";
import appReducer from "./appReducer";


let rootReducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sitebar: sitebarReducer,
  newsPage: newsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});


type RootReducerType= typeof rootReducers;
export type AppStateType = ReturnType<RootReducerType>;

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers( applyMiddleware(thunk) ));


//let store = createStore(reducers, applyMiddleware(thunk));
//@ts-ignore
window.store = store;

export default store;