import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Home from './Home';

class App extends Component {

  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Home />
    }
  }

  render() {
    return (

      <div className="App">
       {this.renderRedirect()}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Site Hangzhou Mandarim em desenvolvimento.
          </p>
          <a
            className="App-link"
            href="https://github.com/lucasdlg5/Hangzhou_Mandarim-Web"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hangzhou Mandarim Github
          </a>
          <a className="App-link" rel="noopener noreferrer" onClick={this.setRedirect}>  Clique aqui para acessar o Beta em Desenvolvimento </a>

         
      
          {/* <button onClick={this.setRedirect}>Redirect</button> */}
        </header>
      </div>
    );
  }
}

export default App;
