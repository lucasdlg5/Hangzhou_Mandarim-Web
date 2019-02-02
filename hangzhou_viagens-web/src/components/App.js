import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Site Hangzhou Mandarim em desenvolvimento - Link do Github abaixo.
          </p>
          <a
            className="App-link"
            href="https://github.com/lucasdlg5/Hangzhou_Mandarim-Web"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hangzhou Mandarim Github
          </a>
        </header>
      </div>
    );
  }
}

export default App;
