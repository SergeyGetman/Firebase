import React from 'react';
import {Link} from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const RegisterPage = () => {
    return (
        <div>
            <h1>Register</h1>
            <SignUp />
            <p>
                Already have a account ?  <Link to="/login">Sign In</Link>
            </p>
        </div>
    );
};

export default RegisterPage;