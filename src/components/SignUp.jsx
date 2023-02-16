import React from 'react';
import {useDispatch} from "react-redux";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../store/slice/userSlice";
import Form from "./Form";
import {useHistory} from "react-router-dom";

const SignUp = () => {

    const dispatch = useDispatch();

    const {push} = useHistory()

   async function handleRegister (email, password) {
        const auth = getAuth();
       await createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log("this is user", user)
                dispatch(setUser({
                    email: user?.email,
                    id: user?.uid,
                    token: user?.accessToken,
                }));
                push('/')

            })
            .catch(console.error)
    }

    return (
      <Form title="register" handleClick={handleRegister}/>
    );
};

export default SignUp;