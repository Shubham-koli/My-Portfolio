import React from 'react';
import { Switch, Route} from 'react-router-dom';

import LandingPage from './landingpage';
import aboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';


const Main = () => (
    <Switch>
        <Route exact path= "/" component = { LandingPage } />
        <Route path= "/aboutme" component = { aboutMe } />
        <Route path= "/projects" component = { Projects } />
        <Route path= "/resume" component = { Resume } />
        <Route path= "/Contact" component = { Contact } />
    </Switch>
)

export default Main;
