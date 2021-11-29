import React from "react";
import {Form, Field} from 'react-final-form'
import {required} from "../../helpers/validators";
import {Input} from "../common/forms/FormControls";
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
                    <form action="">
                        <div>
                            <Field name="email" validate={required} component={Input} type="text" placeholder="Login"/>
                        </div>
                        <div>
                            <Field name="password" validate={required} component={Input} type="password" placeholder="password"/>
                        </div>
                        <div>
                            <Field
                                name="rememberMe"
                                component="input"
                                type="checkbox"
                            />
                            remember me
                        </div>
                        <div>
                            <button type="button"
                                    onClick={props.handleSubmit}
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
