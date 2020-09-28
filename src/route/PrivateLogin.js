import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Auths = ({ component: Component, ...props }) => {

    const states = useSelector((state) => state.items);
    const { token, session } = states;

    return (
        <Route
            {...props}
            render={props => token && token.length > 6 && typeof (token) !== 'undefined' || session && typeof (session) !== 'undefined' ? (
                <Redirect to="/" />
            ) : (
                    <Component {...props} />
                )}
        />
    );
};

export default Auths;