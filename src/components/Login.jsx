import React from 'react';
import {useDispatch} from "react-redux";
import {setUser} from "../store/slice/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";

const Login = () => {

    const dispatch = useDispatch();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log("this is userCred", userCredential)
            })
            .catch((err) => {
                console.error("Error", err.message)
            })
    }


    return (
      <Form title="sign in" handleClick={handleLogin}></Form>
    );
};

export default Login;