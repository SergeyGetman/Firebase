import React from 'react';
import {Redirect, useHistory} from "react-router-dom";
import {UseAuth} from "../hooks/UseAuth";
import {useDispatch} from "react-redux";
import {removeUser} from "../store/slice/userSlice";
import styles from "../style/style.module.scss"

const HomePage = () => {

    const {isAuth, email} = UseAuth();
    const dispatch = useDispatch();
    const {push} = useHistory()

    return isAuth ? (
            <div>
                <div className={styles.congratsForm}>
                    <h1>Registration Successfully</h1>
                </div>

                <button onClick={() => dispatch(removeUser())}>You can LOG OUT: {email}</button>
                <div className={styles.congratsformButton}>
                    <button onClick={() => push('/login')}>BACK</button>
                </div>

            </div>
        )

        : (
            <div>
                <Redirect to="/login"/>
            </div>

        );
};

export default HomePage;