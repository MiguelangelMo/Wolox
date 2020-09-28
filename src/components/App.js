import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import LandingPage from './LandingPage';
import ContentLogin from './Login/Content';
import Items from './List/Items';
import PrivateList from '../route/PrivateList';
import PrivateLogin from '../route/PrivateLogin';
import store from '../store';
import '../css/main.css';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <PrivateList exact path="/" component={Items} />
                    <Route exact path="/landing-page" component={LandingPage} />
                    <PrivateLogin exact path="/login" component={ContentLogin} />
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;
