import React from 'react';
import './style/App.css';
import SideBar from "./components/sidebar/SideBar";
import MainContent from "./components/main/MainContent";
import HeaderContainer from "./components/header/HeaderContainer";

function App() {
    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <SideBar/>
                <MainContent/>
            </div>
    );
}

export default App;
