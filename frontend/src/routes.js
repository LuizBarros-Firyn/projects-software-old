import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import ClientRegister from './pages/ClientRegister';
import FreelancerRegister from './pages/FreelancerRegister';
import Login from './pages/Login';
import Main from './pages/Main';
import NewProject from './pages/NewProject';
import Team from './pages/Team';
import NewOffer from './pages/NewOffer';
import ProjectsOffers from './pages/ProjectsOffers';
import OffersReview from './pages/OffersReview';
import OngoingProjects from './pages/OngoingProjects';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/register" exact component={Register} />
                <Route path="/register_client" component={ClientRegister} />
                <Route path="/register_freelancer" component={FreelancerRegister} />
                <Route path="/login" component={Login} />
                <Route path="/main" component={Main} />
                <Route path="/new_project" component={NewProject} />
                <Route path="/team" component={Team} />
                <Route path="/new_offer" component={NewOffer} />
                <Route path="/offers" component={ProjectsOffers} />
                <Route path="/offers_review" component={OffersReview} />
                <Route path="/ongoing_projects" component={OngoingProjects} />
            </Switch>
        </BrowserRouter>
    );
}