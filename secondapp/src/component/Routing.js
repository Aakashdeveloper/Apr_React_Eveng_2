import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom';

import Home from './Home';
import Posts from './Post';
import Profile from './Profile';
import PostDetails from './PostDetails';
import LifeCycle from './LifeCycle';

const Routing = () => {
    return(
        <BrowserRouter>
        <header>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand">NareshIT</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/post">Post</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/lifecycle">LifeCycle</Link></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
        <Route exact path="/" component={Home}/>
        <Route exact path="/post" component={Posts}/>
        <Route exact path="/post/:topic" component={PostDetails}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/lifecycle" component={LifeCycle}/>
        
    </BrowserRouter>
    )
}

export default Routing;
   