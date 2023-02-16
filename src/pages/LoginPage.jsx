import React from 'react';
import {Link} from "react-router-dom";
import Login from "../components/Login";

const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <div>
                <Login />
              or  <Link to="/register">Register</Link>
            </div>

        </div>
    );
};

export default LoginPage;