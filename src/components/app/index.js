import React, { Component } from 'react';
import logo from './../../assets/logo.svg';
import './style.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user_name: "Hanh.tv"
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome {this.state.user_name} to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
