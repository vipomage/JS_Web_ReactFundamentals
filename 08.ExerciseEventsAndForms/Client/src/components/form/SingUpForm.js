import React, { Component } from 'react';

import validationFunc from './../../utils/formValidator';
import Input from './formFields/Input';

class SingUpForm extends Component {
	constructor() {
		super();

		this.state = {
			email: '',
			confirmEmail: '',
			userName: '',
			password: '',
			confirmPassword: ''
		};
	}

	submitRegister(e) {
		e.preventDefault();
		let payload = {
			email: this.state.email,
			password: this.state.password,
			name: this.state.userName
		};
		this.signup(payload);
	}

	signup(payload) {
		fetch('http://localhost:5000/auth/signup', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		})
			.then(res => {
				return res.json();
			})
			.then(d => {
				this.setState({ message: d.message, err: true });
				if (d.success) {
					this.setState({ err: false });
				}
			});
	}

	render() {
		let validObj = validationFunc(
			this.state.email,
			this.state.confirmEmail,
			this.state.userName,
			this.state.password,
			this.state.confirmPassword
		);

		let infoClass = this.state.err
			? 'alert alert-danger'
			: 'alert alert-success';

		return (
			<form className="signup-form" onSubmit={this.submitRegister.bind(this)}>
				<fieldset className="App">
					<div style={{ display: 'inline-grid' }}>
						<h2>Sign Up</h2>
						<Input
							type="text"
							data="email"
							name="Email"
							func={e => {
								this.setState({ email: e.target.value });
							}}
							valid={validObj.validMail}
						/>

						<Input
							type="text"
							data="confirmEmail"
							name="Confirm Email"
							func={e => {
								this.setState({ confirmEmail: e.target.value });
							}}
							valid={validObj.validMail}
						/>

						<Input
							type="text"
							data="userName"
							name="User Name"
							func={e => {
								this.setState({ userName: e.target.value });
							}}
							valid={validObj.validName}
						/>

						<Input
							type="password"
							data="password"
							name="Password"
							func={e => {
								this.setState({ password: e.target.value });
							}}
							valid={validObj.validPassword}
						/>
						<span style={validObj.validPassword? {display:'none'}:{display:'block',color:'red'}}>Password must be at least 8 chars long</span>
						<Input
							type="password"
							data="confirmPassword"
							name="Confirm Password"
							func={e => {
								this.setState({ confirmPassword: e.target.value });
							}}
							valid={validObj.validPassword}
						/>
						<div>
							<input
								onChange={() => {
									this.setState({
										agreeWithTerms: !this.state.agreeWithTerms
									});
								}}
								id="checkBox"
								type="checkbox"
							/>
							<label htmlFor="checkBox">I agree with the terms</label>
						</div>
						<div className={infoClass}>{this.state.message}</div>
						<input
							className={'btn btn-primary'}
							style={{
								display:
									(validObj.validMail &&
										validObj.validName &&
										validObj.validPassword &&
										this.state.agreeWithTerms) === true
										? ''
										: 'none'
							}}
							type="submit"
							value="Create My Account"
						/>
					</div>
				</fieldset>
			</form>
		);
	}
}

export default SingUpForm;
