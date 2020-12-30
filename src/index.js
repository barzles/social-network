import './style/index.css';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from "./redux/redux-store"
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <BrowserRouter>
        <App state={state}
             dispatch={store.dispatch.bind(store)}
             store={store}
             />
      </BrowserRouter>, document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
