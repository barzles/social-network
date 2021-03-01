import React from "react";
import { Form, Field } from 'react-final-form'

const LoginForm = () => {
  let onSubmit = (e) => {
    console.log(e)
  }

  let validate = () => {

  }
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={props => {
        return (
          <form action="">
            <div>
              <Field name="login" component="input" type="text" placeholder="Login" />
            </div>
            <div>
              <Field name="password" component="input" type="password" placeholder="password" />
            </div>
            <div>
              <Field
                name="remember"
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
export default LoginForm;
