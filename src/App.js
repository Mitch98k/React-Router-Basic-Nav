import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
  
  <Route exact path = "/">
    <home />
  </Route>

  <Route path = "/about">
    <about />
  </Route>

  <Route path = "/contact">
    <contact />
  </Route>
</div>
);

export default App;
