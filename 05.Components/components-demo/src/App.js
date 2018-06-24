import React, { Component } from 'react';
import './App.css';
import Welcome from './copmonents/Welcome';
import Cat from './copmonents/Cat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome title="Lell" subTitle="sub" />
        <Welcome title="Zdrasti" />
        <Cat />
      </div>
    );
  }
}

export default App;
