import './style/index.css';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from "./redux/redux-store"
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./Provider";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <BrowserRouter>
        <Provider store={store}>
          <App/>
        </Provider>
      </BrowserRouter>, document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
