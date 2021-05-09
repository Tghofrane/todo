import React, { Fragment } from 'react';
import Router from "next/router";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { EMAIL, PASSWORD } from "../../consts/helpers";
import SignInForm from '../SignInForm';

class AuthModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleUserInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    };
    login = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        if (email == EMAIL && password == PASSWORD) {
            sessionStorage.setItem("logged", true);
            Router.push("/mytasks");
        }
        else {
            alert("Veuillez vérifier vos données!");
        }
    }
    render = () => {
        const { email, password } = this.state;
        return (
            <Fragment>
                <span className="pointer" data-bs-toggle="modal" data-bs-target="#authModal">
                    {this.props.title}
                </span>
                <div className="modal fade" id="authModal" tabIndex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <FontAwesomeIcon icon={faTimes} size="lg"/>
                        </button>
                            <div className="d-flex flex-column justify-content-center p-4">
                                <h5 className="modal-title" id="authModalLabel">{this.props.title}</h5>
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

}

export default AuthModal;