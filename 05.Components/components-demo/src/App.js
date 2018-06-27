import React, { Component } from 'react';
import './App.css';
import Welcome from './copmonents/Welcome';
import Logo from './copmonents/Logo'
import Button from "./copmonents/Button";
import Timer from './copmonents/Timer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome title="Lell" subTitle="sub" />
        <Welcome title="Zdrasti" />
        <Logo />
        <br/>
        <Button text="Some Tex"/>
        <Timer/>
      </div>
    );
  }
}

export default App;
