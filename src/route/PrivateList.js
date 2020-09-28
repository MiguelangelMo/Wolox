import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Auths = ({ component: Component, ...props }) => {

    const states = useSelector((state) => state.items);
    const { token, session } = states;

    return (
        <Route
            {...props}
            render={props => !token || typeof (token) === 'undefined' ? (
                <Redirect to="/landing-page" />
            ) : (
                    <Component {...props} />
                )}
        />
    );
};

export default Auths;
