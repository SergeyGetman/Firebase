import React from 'react';
import {Link} from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import styles from "../style/style.module.scss"

const RegisterPage = () => {
    return (
        <div>
            <h1>Register</h1>
            <SignUp />
            <div className={styles.loginForm}>
               <h2>Already have a account?</h2>  <Link to="/login">Sign In</Link>
            </div>
        </div>
    );
};

export default RegisterPage;