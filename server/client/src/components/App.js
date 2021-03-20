// import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
// import {Route} from 'react-router-dom';
// import {hashHistory as Router} from 'react-router';
import { connect } from 'react-redux';
import Landing from './Landing';
import CreateRecipe from './recipes/CreateRecipe';
import RecipeSearch from './recipes/RecipeSearch';
import User from './user/User';
import Nav from './navigation/Nav';
import Recipe from './recipes/Recipe.js';

import * as actions from '../actions';

class App extends React.Component{
  render(){
    return(
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/create/new" component={CreateRecipe}></Route>
          <Route exact path="/user/settings" component={User}></Route>
          <Route exact path="/recipe" component={RecipeSearch}></Route>
          <Route exact path="/recipe/edit/:id" component={CreateRecipe}></Route>
          <Route exact path="/recipe/:id" component={Recipe}></Route>
          <Route exact path="/test" component={Landing}></Route>
        </Switch>
      </Router>
    )
  }
}


export default connect(null, actions)(App);
