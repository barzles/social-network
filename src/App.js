import React from 'react';
import './App.css';
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";

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
