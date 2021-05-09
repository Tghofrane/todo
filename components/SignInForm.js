import React from 'react';
import Router from "next/router";
import {Formik, Form} from 'formik'
import * as Yup from 'yup'

import FormControl from './FormControl';
import { EMAIL, PASSWORD } from '../consts/helpers';


function SignInForm(){
    const initialValues={
        email: '',
        password:''
    }
    const validationSchema= Yup.object({
        email: Yup.string().email('Merci de vérifier votre email').required('Merci de remplir ce champ'),
        password: Yup.string().required('Merci de remplir ce champ')
    });

    const onSubmit = (values) =>{
        if(values.email === EMAIL && values.password === PASSWORD) {
            sessionStorage.setItem("logged", true);
            Router.push("/mytasks");
        }
        else {
            alert("Veuillez vérifier vos données!");
        }
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik =>{
                    return(
                        <Form>
                            <FormControl control='input' type='email' label='Email' name='email'/>
                            <FormControl control='input' type='password' label='Password' name='password'/>
                            <button className="authBtn" type="submit" disabled={!formik.isValid}>Se connecter</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default SignInForm;