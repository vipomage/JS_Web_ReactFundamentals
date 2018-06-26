import React, { Component } from 'react';

export default class Timer extends Component {
	constructor() {
		super();
		let today = new Date();
		this.state = {
			hours:
				today.getHours().toString().length === 2
					? today.getHours()
					: '0' + today.getHours(),
			minutes:
				today.getMinutes().toString().length === 2
					? today.getMinutes()
					: '0' + today.getMinutes(),
			seconds:
				today.getSeconds().toString().length === 2
					? today.getSeconds()
					: '0' + today.getSeconds()
		};
	}
	componentDidMount() {
		setInterval(() => {
			let today = new Date();
			let obj = {
				hours:
					today.getHours().toString().length === 2
						? today.getHours()
						: '0' + today.getHours(),
				minutes:
					today.getMinutes().toString().length === 2
						? today.getMinutes()
						: '0' + today.getMinutes(),
				seconds:
					today.getSeconds().toString().length === 2
						? today.getSeconds()
						: '0' + today.getSeconds()
			};
			this.setState(obj);
		}, 1000);
	}
	render() {
		return (
			<div className="timer">
				<h1>
					{this.state.hours}:
					{this.state.minutes}:
					<span className={'blinker'}>{this.state.seconds}</span>
				</h1>
			</div>
		);
	}
}
//Yes i could use so called smart virtual DOM wich updates only the changes but thats more fun way of doing it
//P.S. React "onLoad" is for images not for page load :D see line 22
