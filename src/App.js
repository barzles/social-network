import React from 'react';
import './style/App.css';
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import MainContent from "./components/main/MainContent";

function App(props) {
    return (
            <div className="app-wrapper">
                <Header/>
                <SideBar/>
                <MainContent state={props.state}
                             dispatch={props.dispatch}
                             store={props.store}

                />
            </div>
    );
}

export default App;
