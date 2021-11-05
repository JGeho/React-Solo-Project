import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Results from '.components/Results';
import Saved from '.components/Saved';

function App(props) {
  return (
    <div className="App">
      <Router>
        <SideNav/>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
        </Switch>
        <Route path="/results">
            <Results/>
        </Route>
        <Route path="/saved">
            <Saved/>
        </Route>        
      </Router>
    </div>
  );
}

export default App;