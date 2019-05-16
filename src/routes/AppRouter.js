import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import ContactDashboard from '../components/ContactDashboard';
import AddContact from '../components/AddContact';
import EditContact from '../components/EditContact';
import Feedback from '../components/Feedback';
import PageNotFound from '../components/PageNotFound';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={LoginPage} />
                <Route path='/dashboard' component={ContactDashboard} />
                <Route path='/add' component={AddContact} />
                <Route path='/edit/:id' component={EditContact} />
                <Route path='/feedback' component={Feedback} />
                <Route component={PageNotFound}  />
            </Switch>
        </div>
    </Router>
);

export default AppRouter; 