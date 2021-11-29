import React from "react";
import LoginForm from "./LoginForm";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, null)(Login);
