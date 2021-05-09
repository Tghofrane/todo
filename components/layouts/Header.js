import React from "react";
import Router from "next/router";
import Link from 'next/link'

import AuthModal from './AuthModal';

function Header () {
   
   const logout = e => {
        e.preventDefault();
        sessionStorage.clear();
        Router.push("/");
    };

        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link href="/" replace>
                        <img src="/logo.png" className="pointer" alt="logo" width="80"/>
                    </Link>
                    {
                        (process.browser) ?
                            <div>
                                {
                                    (window.sessionStorage.getItem("logged") == "true") ?
                                        (
                                            <ul className="d-flex align-items-end navbar-nav">
                                                <li className="nav-item pointer" onClick={()=>{Router.push("/mytasks");}}>Tâches</li>
                                                <li className="nav-item pointer" onClick={(e)=>{logout(e)}}> Déconnexion</li>
                                            </ul>
                                        ) : (
                                            <ul className="d-flex align-items-end navbar-nav">
                                                <li className="nav-item">
                                                    <AuthModal title="Connexion" />
                                                </li>
                                            </ul>
                                        )
                                }
                            </div>
                            : null
                    }

                </div>
            </nav>
        )
    }

export default Header;