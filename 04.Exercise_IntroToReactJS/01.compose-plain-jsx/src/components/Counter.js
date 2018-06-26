import React, { Component } from 'react';

export default class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };
	}
	incrementCounter = () => {
		this.setState({ count: this.state.count + 1 });
	};
	render() {
		return (
			<button className="button" onClick={this.incrementCounter}>
				Click count: {this.state.count}
			</button>
		);
	}
}
