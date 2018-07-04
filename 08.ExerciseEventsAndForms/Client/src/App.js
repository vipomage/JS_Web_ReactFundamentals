import React, { Component } from 'react';
import './App.css';

import SingUpForm from './components/form/SingUpForm';
import LoginForm from './components/form/LoginForm';
import PokemonForm from './components/form/PokemonForm';
import PokemonField from './components/form/formFields/PokemonField';

class App extends Component {
	constructor() {
		super();

		this.state = {
			username: localStorage.getItem('user'),
			token: localStorage.getItem('token'),
			pokedex: []
		};
	}
	updatePokedex = data => {
		let collection = this.state.pokedex;
		collection.push(data);
		this.setState(collection);
	};
	setUserInfo = info => {
		this.setState({ user: info.user.name, token: info.token });
	};
	componentDidMount() {
		fetch('http://localhost:5000/pokedex/pokedex').then(response => {
			response.json().then(parseData => {
				this.setState({ pokedex: parseData.pokemonColection });
			});
		});
	}
	componentDidUpdate(prevProps, prevState, snap) {
		if (
			JSON.stringify(prevState.pokedex) !== JSON.stringify(this.state.pokedex)
		) {
			fetch('http://localhost:5000/pokedex/pokedex').then(response => {
				response.json().then(parseData => {
					this.setState({ pokedex: parseData.pokemonColection });
				});
			});
		}
	}
	render() {
		let pokemons = this.state.pokedex.map(pokemon => (
			<PokemonField key={pokemon.id} data={pokemon} />
		));
		if (!this.state.token && !this.state.username) {
			return (
				<div className="container">
					<SingUpForm />
					<LoginForm logged={this.setUserInfo} />
				</div>
			);
		} else {
			return (
				<div className="container md-3 ">
					<h1 className="text-center">
						Logged in as{' '}
						<em className={'text-uppercase'}>{localStorage.getItem('user')}</em>
					</h1>
					<PokemonForm token={this.state.token} update={this.updatePokedex} />
					<h1 className="text text-center">Pokemon Collection</h1>
					<div className={'container row border-2 border-warning'}>
						{pokemons}
					</div>
				</div>
			);
		}
	}
}

export default App;
