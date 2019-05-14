import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from '../components/LoginPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch> 
                <Route exact path= '/' component={LoginPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter; 