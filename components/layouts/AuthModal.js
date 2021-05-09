import React, { Fragment } from 'react';
import Router from "next/router";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import SignInForm from '../SignInForm';

function AuthModal (props){
        return (
            <Fragment>
                <span className="pointer" data-bs-toggle="modal" data-bs-target="#authModal">
                    {props.title}
                </span>
                <div className="modal fade" id="authModal" tabIndex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <FontAwesomeIcon icon={faTimes} size="lg"/>
                        </button>
                            <div className="d-flex flex-column justify-content-center p-4">
                                <h5 className="modal-title" id="authModalLabel">{props.title}</h5>
                            </div>
                            <div className="modal-body">
                                <SignInForm/>
                            </div>
                        </div>
                    </div>

                </div>
            </Fragment>
        )

}

export default AuthModal;