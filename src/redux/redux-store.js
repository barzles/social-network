import {combineReducers, createStore} from "redux";

// reducers
import profileReducer from "./reducer/profile";
import dialogsReducer from "./reducer/dialogs";
import sidebarReducer from "./reducer/sidebar";
import usersReducers from "./reducer/users";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducers,
  sidebar: sidebarReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
