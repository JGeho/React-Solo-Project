import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Aboutme from './components/Aboutme';

function App(props) {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/aboutme">
            <Aboutme/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;