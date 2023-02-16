import React from 'react';
import {Redirect} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <Redirect to="login"/>
        </div>
    );
};

export default HomePage;