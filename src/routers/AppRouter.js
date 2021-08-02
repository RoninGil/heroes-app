import React, { useContext } from 'react';
import {LoginPage} from '../components/login/LoginPage';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const {user} = useContext(AuthContext)
    return (
    <Router>
        <div>
        <Switch>
            <PublicRoute exact 
            path="/login" 
            component = {LoginPage}
            isAuth={user.logged}/>

            <PrivateRoute 
            isAuth={user.logged}
            path="/" 
            component = {DashboardRoutes}
            />
        </Switch>
        </div>
    </Router>
    )
}
