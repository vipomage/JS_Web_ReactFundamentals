import React, { Component } from 'react';
import '../App.css';
import ButtonWithClick from "./ButtonWithClick";
import Registerform from "./Registerform";

class Main extends Component {
	render() {
		return (
          <div className="Main">
            <ButtonWithClick/>
            <Registerform/>
          </div>)
	}
}

export default Main;
