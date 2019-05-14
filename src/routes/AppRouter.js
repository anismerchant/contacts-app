import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch> 
                <Route exact path= '/' component={LoginPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter; 