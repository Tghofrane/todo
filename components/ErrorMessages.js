import React from 'react';

function ErrorMessages(props){
   
    return (
       <div className="error-message">
           {props.children}
       </div>
    )
}

export default ErrorMessages;