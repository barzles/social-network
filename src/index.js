import './style/index.css';
import {rerenderEntireTree} from "./render";
import state from "./redux/state";


rerenderEntireTree(state);
