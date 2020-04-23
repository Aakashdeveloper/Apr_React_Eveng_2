import React from 'react';
import { BrowserRouter, Router} from 'react-router-dom';

import Regsiter from './Register';
import Header from './Header';
import Login from './Login';
import Profile from './Profile';
import User from './User';
import { Fragment } from 'react';


const Routing = () => {
    return(
        <Fragment>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={Regsiter}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/profile" component={Profile}></Route>
                <Route exact path="/user" component={User}></Route>
            </BrowserRouter>
        </Fragment>
    )
}

export default Routing;