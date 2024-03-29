import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
//<Route path="/" component={LoginPage} exact={true} />
// <Route path="/" component={ExpenseDashboardPage} exact={true} />
/*
 
                <Route path="/" render={(props) => <LoginPage {...props}  exact={true} />} />
                <Route path="/create" render={(props) => <AddExpensePage {...props} />} />
                <Route path="/dashboard" component={ExpenseDashboardPage} />

                <Route path="/edit/:id" render={(props) => <EditExpensePage {...props} />} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />


*/
export const history = createBrowserHistory();

const AppRouter = () => (

    <Router history={history}>
        <div>


            <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
            <PrivateRoute path="/create" component={AddExpensePage} />
            <PrivateRoute path="/edit/:id" component={EditExpensePage} />
  
            <Route component={NotFoundPage} />
                
            </Switch>
        </div>
    </Router>
);
export default AppRouter;

