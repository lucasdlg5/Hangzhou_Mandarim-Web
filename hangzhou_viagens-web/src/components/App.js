import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Home from './Home';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //      Site Hangzhou Mandarim em desenvolvimento.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://github.com/lucasdlg5/Hangzhou_Mandarim-Web"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Hangzhou Mandarim Github
      //     </a>
      //   </header>
      // </div>

      <div>
        <Home />
      </div>
    );
  }
}

export default App;
