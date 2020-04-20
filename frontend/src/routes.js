import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import ClientRegister from './pages/ClientRegister';
import FreelancerRegister from './pages/FreelancerRegister';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/register" exact component={Register} />
                <Route path="/register_client" component={ClientRegister} />
                <Route path="/register_freelancer" component={FreelancerRegister} />
            </Switch>
        </BrowserRouter>
    );
}