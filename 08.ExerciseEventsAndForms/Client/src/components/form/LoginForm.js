import React, { Component } from 'react';

import Input from './formFields/Input';

export default class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			message: '',
			err: false
		};
	}
	submitLogin = e => {
		e.preventDefault();
		let payload = {
			email: this.state.email,
			password: this.state.password
		};
		if (payload.email && payload.password) {
			this.login(payload);
			this.setState({ err: false });
		} else {
			this.setState({ message: 'Please fill all the fileds', err: true });
		}
	};
	login = payload => {
		fetch('http://localhost:5000/auth/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'content-type': 'application/json'
			},
			body: JSON.stringify(payload)
		})
			.then(res => {
				return res.json();
			})
			.then(result => {
				if (result.success) {
					this.setState({ message: result.message ,err:false}, () => {
						this.props.logged(result);
						localStorage.setItem('token', result.token);
						localStorage.setItem('user', result.user.name);
					});
				}else{
					this.setState({message:result.message,err:true})
				}
			});
	};
	render() {
		let infoClass = this.state.err
			? 'alert alert-danger'
			: 'alert alert-success';
		return (
			<form className="login-form" onSubmit={this.submitLogin}>
				<fieldset className="App">
					<div style={{ display: 'inline-grid' }}>
						<h2>Login</h2>
						<div className={infoClass}>{this.state.message}</div>
						<Input
							type="text"
							data="login-email"
							name="Email"
							func={e => {
								this.setState({ email: e.target.value });
							}}
						/>

						<Input
							type="password"
							data="login-password"
							name="Password"
							func={e => {
								this.setState({ password: e.target.value });
							}}
						/>
						<input className="btn btn-primary mt-3" type="submit" value="Login to my Account" />
					</div>
				</fieldset>
			</form>
		);
	}
}
