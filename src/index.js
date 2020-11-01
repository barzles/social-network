import './style/index.css';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from "./redux/state"

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={store.addPost.bind(store)}
                 updateNewChangeText={store.updateNewChangeText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);