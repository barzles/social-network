import {combineReducers, createStore} from "redux";

// reducers
import profileReducer from "./reducer/profile";
import dialogsReducer from "./reducer/dialogs";
import sidebarReducer from "./reducer/sidebar";
import usersReducers from "./reducer/users";
import authReducer from "./reducer/auth";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducers,
  sidebar: sidebarReducer,
  auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
