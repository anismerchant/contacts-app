import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LoginPage from '../components/LoginPage';
import ContactDashboard from '../components/ContactDashboard';
import AddContact from '../components/AddContact';
import EditContact from '../components/EditContact';
import Feedback from '../components/Feedback';
import PageNotFound from '../components/PageNotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute exact path='/' component={LoginPage} />
                <PrivateRoute path='/dashboard' component={ContactDashboard} />
                <PrivateRoute path='/add' component={AddContact} />
                <PrivateRoute path='/edit/:id' component={EditContact} />
                <PrivateRoute path='/feedback' component={Feedback} />
                <Route component={PageNotFound}  />
            </Switch>
        </div>
    </Router>
);

export default AppRouter; 