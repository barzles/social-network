import React from "react";
import {Provider} from "react-redux";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import App from "./App";
import store from "./redux/redux-store"
import './style/index.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>, document.getElementById('root'));


