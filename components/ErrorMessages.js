import React from 'react';
import {Field, ErrorMessage} from 'formik'

function ErrorMessages(props){
   
    return (
       <div className="error-message">
           {props.children}
       </div>
    )
}

export default ErrorMessages;