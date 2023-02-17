import React from 'react';
import {Link} from "react-router-dom";
import Login from "../components/Login";
import styles from "../style/style.module.scss"

const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <div className={styles.loginForm}>
                <Login />
             <h2>or:</h2>   <Link to="/register">Register</Link>
            </div>

        </div>
    );
};

export default LoginPage;