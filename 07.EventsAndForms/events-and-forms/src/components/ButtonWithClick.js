import React, { Component } from 'react';

export default class ButtonWithClick extends Component {
	constructor(props) {
		super(props);
	}
	
	
	handleClick = event => {
		console.log(this);
		console.log(event.target);
		alert('Works!');
	};
	
	
	render() {
		return <button onClick={this.handleClick}>Click me!</button>;
	}
}
