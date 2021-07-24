import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar'
import logo from './logo.svg';
import './App.css';
import Mood from './components/Mood'

function App() {
  return (
    <div className="App">
          <Router>
            <React.Fragment>
            <NavBar />
            <Route exact path="/mood" component={Mood} />
            </React.Fragment>
          </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
