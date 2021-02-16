// import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Landing from './Landing';
import CreateRecipe from './CreateRecipe';
import RunTests from  './RunTests';
import Nav from './navigation/Nav';

class App extends React.Component{
  render(){
    return(
      <Router>
        <Nav />
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/create" component={CreateRecipe}></Route>
        <Route exact path="/test" component={RunTests}></Route>
      </Router>
    )
  }
}


export default App;
