import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import {Project1, Project2, Project3, Project4} from './pages/Projects';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <AnimatePresence>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/project-1" component={Project1} />
      <Route exact path="/project-2" component={Project2} />
      <Route exact path="/project-3" component={Project3} />
      
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
    </AnimatePresence>
  )
}

export default App

