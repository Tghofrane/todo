import React from 'react';
import {Field, ErrorMessage} from 'formik'
import ErrorMessages from './ErrorMessages';

function TextArea(props){
    const {label, name, ...rest}= props
   
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field as='textarea' id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={ErrorMessages}/>
        </div>
    )
}

export default TextArea;