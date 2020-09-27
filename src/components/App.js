import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import LandingPage from './LandingPage';
import store from '../store';
import '../css/main.css';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" component={LandingPage} />
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;
