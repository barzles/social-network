import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {initializeApp} from "./redux/reducer/app";
import './style/App.css';

// Components
import SideBar from "./components/sidebar/SideBar";
import MainContent from "./components/main/MainContent";
import HeaderContainer from "./components/header/HeaderContainer";
import Preloader from "./components/common/preloader/Preloader";


class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <SideBar/>
                <MainContent/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
