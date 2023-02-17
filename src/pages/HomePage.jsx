import React from 'react';
import {Redirect} from "react-router-dom";
import {UseAuth} from "../hooks/UseAuth";
import {useDispatch} from "react-redux";
import {removeUser} from "../store/slice/userSlice";
import styles from "../style/style.module.scss"

const HomePage = () => {

    const {isAuth, email} = UseAuth();
    const dispatch = useDispatch();

    return isAuth ? (
            <div>
                <div className={styles.congratsForm}>
                    <h1>Registration Successfully</h1>

                </div>


                <button onClick={() => dispatch(removeUser())}>You can LOG OUT: {email}</button>
            </div>
        )

        : (
            <div>
                <Redirect to="/login"/>
            </div>

        );
};

export default HomePage;