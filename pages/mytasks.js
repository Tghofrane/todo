
import React, { Fragment } from 'react';
import Router from "next/router";

import TaskList from '../components/TaskList';
import AuthModal from '../components/layouts/AuthModal';

export default function Tasks (){

        return (
            <Fragment>

                {
                    (process.browser) ?
                        <div>
                            {
                                (window.sessionStorage.getItem("logged") == "true") ?
                                    (
                                        <div id="tasks" className="container">
                                            <h1>Libérez votre espace mental avec TODO</h1>
                                            <TaskList />
                                        </div>
                                    ) : (
                                        <div className="mt-5 d-flex flex-column align-items-center">
                                            <span className="err-msg">Oops! Veuillez vous connecter!</span>
                                            <button className="login-btn">
                                                <AuthModal title="Connexion" />
                                            </button>
                                        </div>
                                    )
                            }
                        </div>
                        : null
                }

            </Fragment>
        )
}
