import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            This is the first boiler plate page in the home dashboard.
          </h2>
          <div>
            <p>
              The first module will be a to-do list to remember how to use react and hook it up to firebase.
            </p>
            <p>
              I can use this home page to track plans and progress as I go. May move this to a static page within the app however.
            </p>
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
