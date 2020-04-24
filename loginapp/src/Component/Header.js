import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Header =() => {
 
        return(
            <Fragment>
                <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand">NareshIt</a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li><Link to="/user">User</Link></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><Link to="/"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                        <li><Link to="/login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
                    </ul>
                    </div>
                </div>
                </nav>
            </Fragment>
        )
}

export default Header;