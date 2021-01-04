import React from 'react';
import './style/App.css';
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import MainContent from "./components/main/MainContent";

function App() {
    return (
            <div className="app-wrapper">
                <Header/>
                <SideBar/>
                <MainContent/>
            </div>
    );
}

export default App;
