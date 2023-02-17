import React from 'react';
import {Link} from "react-router-dom";
import SignUp from "../components/SignUp";
import styles from "../style/style.module.scss"

const RegisterPage = () => {
    return (
        <div>
            <h1>Register</h1>

            <div className={styles.loginForm}>
               <h2>Already have a account?</h2>  <Link to="/login">Sign In</Link>
                <SignUp />
            </div>
        </div>
    );
};

export default RegisterPage;