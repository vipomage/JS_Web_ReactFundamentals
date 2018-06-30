import React, { Component } from 'react';
import './App.css';
import Slider from './components/Slider/Slider';
import Rooster from './components/Characters/Rooster';
import Details from './components/Characters/Details';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { epOnFocus: 0, characters: [0, 1, 2, 3], selectedChar: 0 };
		this.changeEp = ep => {
			this.setState({ epOnFocus: ep });
		};
		this.updateCharacter = e => {
			this.setState({ selectedChar: e.target.id });
		};
		this.updateCharacter.bind(this);
	}
	render() {
		return (
			<div className="container">
				<Slider updateFunc={this.changeEp} focusedEp={this.state.epOnFocus} />
				<div className="characters">
					<Rooster updateFunc={this.updateCharacter} />
				</div>
				<Details id={this.state.selectedChar} />
			</div>
		);
	}
}

export default App;
