// import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Landing from './Landing';
import CreateLesson from './CreateLesson';

class App extends React.Component{
  render(){
    return(
      <Router>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/create" component={CreateLesson}></Route>
      </Router>
    )
  }
}


export default App;
