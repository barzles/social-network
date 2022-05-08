import React from 'react';
import {Field} from "react-final-form";

const FormControl = ({input, meta: {error, touched}, Element, ...props}) => {
    let hasError = error && touched;
    return <div>
        <div>
            <Element {...input} {...props}/>
        </div>
        {hasError && <span>{error}</span>}
    </div>
}

export const Input = (props) => {
    return <FormControl {...props} Element={'input'}/>
};

export const TextArea = (props) => {
    return <FormControl {...props} Element={'textarea'}/>
};

export const creatField = (name, validate, component, placeholder, props = {}, text = "") => {
    return <div>
        <Field name={name}
               validate={validate}
               component={component}
               placeholder={placeholder}
               {...props}
        />
        {text}
    </div>
}