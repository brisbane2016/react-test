import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const AppRouter = () => (

    <BrowserRouter>
        <div>

            <Header />

            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />

                <Route path="/create" render={(props) => <AddExpensePage {...props} />} />
                //https://stackoverflow.com/questions/37959896/warning-failed-proptype-invalid-prop-component-supplied-to-route

                <Route path="/edit/:id" render={(props) => <EditExpensePage {...props} />} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;

