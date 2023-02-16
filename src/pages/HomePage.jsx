import React from 'react';
import {Redirect} from "react-router-dom";
import {UseAuth} from "../hooks/UseAuth";
import {useDispatch} from "react-redux";
import {removeUser} from "../store/slice/userSlice";

const HomePage = () => {

    const {isAuth, email} = UseAuth();
    const dispatch = useDispatch();

    return isAuth ? (
            <div>
                <h1>Welcome User</h1>

                <button onClick={() => dispatch(removeUser())}>{email}</button>
            </div>
        )

        : (
            <Redirect to="/login"/>

        );
};

export default HomePage;