import React, { Component } from 'react';

export default class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		};
	}
	tick = () => {
		this.setState({ date: new Date() });
	};
	componentDidMount() {
		this.timer = setInterval(() => {
			this.tick();
		}, 1000);
	}
	componentWillUnmount() {
		clearInterval(this.timer);
	}
	render() {
		return <span>Time is: {this.state.date.toLocaleTimeString()}</span>;
	}
}
