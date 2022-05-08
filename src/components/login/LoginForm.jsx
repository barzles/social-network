import React from "react";
import {Form} from 'react-final-form'
import {required} from "../../helpers/validators";
import {creatField, Input} from "../common/forms/FormControls";
import {login} from "../../redux/reducer/auth";
import {connect} from "react-redux";

const LoginForm = ({login}) => {
    let onSubmit = (data) => {
        login({...data})
    };

    return (
        <Form
            onSubmit={onSubmit}
            render={props => {
                return (
                    <form action="" onSubmit={props.handleSubmit}>
                        {creatField('email', required, Input, 'Login', {type: 'text'})}
                        {creatField('password', required, Input, 'password', {type: 'password'})}
                        {creatField('rememberMe', null, Input, 'null', {type: 'checkbox'}, 'remember me')}
                        <div>
                            <button type="submit"
                                    disabled={props.pristine}>
                                Login
                            </button>
                        </div>
                    </form>
                )
            }}/>
    )
}
export default connect(null, {login})(LoginForm);
