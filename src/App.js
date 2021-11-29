import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/reducer/auth";

import './style/App.css';

// Components
import SideBar from "./components/sidebar/SideBar";
import MainContent from "./components/main/MainContent";
import HeaderContainer from "./components/header/HeaderContainer";

const App = (props) => {
    useEffect(() => {
        props.getAuthUserData();
    }, []);
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <SideBar/>
            <MainContent/>
        </div>
    );
}

export default connect(null, {getAuthUserData})(App);
