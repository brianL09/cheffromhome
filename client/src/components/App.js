// import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Landing from './Landing';
import CreateRecipe from './CreateRecipe';
import Nav from './navigation/Nav';
import * as actions from '../actions';

class App extends React.Component{
  render(){
    return(
      <Router>
        <Nav />
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/create" component={CreateRecipe}></Route>
        <Route exact path="/test" component={Landing}></Route>
      </Router>
    )
  }
}


export default connect(null, actions)(App);
