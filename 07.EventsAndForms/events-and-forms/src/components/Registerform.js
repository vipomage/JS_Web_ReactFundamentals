import React, { Component } from 'react';

export default class Registerform extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			user: {
				username: '',
				password: ''
			}
		};
	}

	changeHandler = event => {
		this.setState({ value: event.target.value });
	};
	submitHandler = event => {
		event.preventDefault();
		console.log(this.state.value);
		console.log(event);
	};

	render() {
		return (
			<form onSubmit={this.submitHandler}>
				<input
					onChange={this.changeHandler}
					type="text"
					name="username"
					value={this.state.user.username}
				/>
				<br />
				<input
					onChange={this.changeHandler}
					type="password"
					name="password"
					value={this.state.user.password}
				/>
				<br />
				<input type="submit" />
			</form>
		);
	}
}
