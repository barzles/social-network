import React from 'react';
import './style/App.css';
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import MainContent from "./components/main/MainContent";
import {BrowserRouter} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <SideBar/>
                <MainContent state={props.state}
                             addPost={props.addPost}
                             updateNewChangeText={props.updateNewChangeText}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
