import {combineReducers, createStore} from "redux";

// reducers
import profileReducer from "./reducer/profile";
import dialogsReducer from "./reducer/dialogs";
import sidebarReducer from "./reducer/sidebar";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;