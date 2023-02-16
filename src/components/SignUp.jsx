import React from 'react';
import {useDispatch} from "react-redux";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../store/slice/userSlice";
import Form from "./Form";

const SignUp = () => {

    const handleRegister = (email, password) => {
        const auth = getAuth();
        console.log(auth)
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log("this is user", user)
            })
            .catch(console.error)
    }

    return (
      <Form title="register" handleClick={handleRegister}/>
    );
};

export default SignUp;