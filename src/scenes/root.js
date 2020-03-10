import React, { Component } from 'react';
import { Router } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';

/*import ScreensUserForm from './User/Form';
import ScreensUserList from './User/List';*/
import Home from './home';

const ScreensRoot = () => (
    <Router>
        <Switch>
            <Route path="/home" component={Home} />
            {/*<Route path="/user/create" component={ScreensUserForm} />
            <Route path="/user/:id" component={ScreensUserForm} />*/}
        </Switch>
    </Router>
);

export default ScreensRoot;