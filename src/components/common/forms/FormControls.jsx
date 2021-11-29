import React from 'react';

const FormControl = ({input, meta, Element, ...props}) => {
    let hasError = meta.error && meta.touched;
    return <div>
        <div>
            <Element {...input} {...props}/>
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}

export const Input = (props) => {
    return <FormControl {...props} Element={'input'}/>
};

export const TextArea = (props) => {
    return <FormControl {...props} Element={'textarea'}/>
};
