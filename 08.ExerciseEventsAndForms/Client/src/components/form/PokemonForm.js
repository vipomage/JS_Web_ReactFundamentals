import React, { Component } from 'react';
import Input from './../../components/form/formFields/Input';
const uuidv1 = require('uuid/v1');
export default class PokemonForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			src: '',
			info: '',
			err: false
		};
	}

	submitPokemon = e => {
		e.preventDefault();
		let id = uuidv1();
		let payload = {
			pokemonName: this.state.name,
			pokemonImg: this.state.src,
			pokemonInfo: this.state.info,
			id
		};
		if (payload.pokemonName && payload.pokemonImg && payload.pokemonInfo) {
			this.create(payload);
			this.setState({ message: 'Successful creation', err: false });
			this.props.update(payload);
		} else {
			this.setState({ message: 'Please fill all the fileds', err: true });
		}
	};
	
	create = payload => {
		fetch('http://localhost:5000/pokedex/create', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(payload)
		});
	};
	render() {
		let infoClass = this.state.err
			? 'alert alert-danger'
			: 'alert alert-success';
		return (
			<div className="container">
				<button
					onClick={() => {
						localStorage.clear();
						this.setState({},()=>{
              window.location = 'http://localhost:3000'
						});
					}}
					className="btn btn-warning d-flex justify-content-center"
          style={{margin:'0 auto',textAlign:'center'}}
				>
					Logout
				</button>
				<form className="login-form form-group" onSubmit={this.submitPokemon}>
					<fieldset className="App">
						<div style={{ display: 'inline-grid' }}>
							<div className={infoClass}>{this.state.message}</div>
							<Input
								type="text"
								data="pokemon-name"
								name="Pokemon Name"
								value={this.state.name}
								func={e => {
									this.setState({ name: e.target.value });
								}}
							/>

							<Input
								type="text"
								data="src"
								name="Pokemon image"
								value={this.state.src}
								func={e => {
									this.setState({ src: e.target.value });
								}}
							/>
							<Input
								type="text"
								data="info"
								name="Pokemon info"
								value={this.state.info}
								func={e => {
									this.setState({ info: e.target.value });
								}}
							/>
							<input
								className={'btn btn-primary m-3'}
								type="submit"
								value="Create Pokemon"
							/>
						</div>
					</fieldset>
				</form>
				
			</div>
		);
	}
}
