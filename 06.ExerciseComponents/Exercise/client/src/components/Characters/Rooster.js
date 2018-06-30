import React from 'react';
import Character from './Character';

export default class Rooster extends React.Component {
	constructor(props) {
		super(props);
		this.state = { characters: [],selectedChar:0};
	}
	componentDidMount() {
		fetch(`http://localhost:9999/roster`)
			.then(data => data.json())
			.then(parseData => {
				this.setState({ characters: parseData });
			});
	}
	render() {
		let list = [];

		this.state.characters.forEach(char => {
			list.push(
				<Character
					updateFunc={this.props.updateFunc}
					key={char.id}
					name={char.name}
					url={char.url}
					id={char.id}
				/>
			);
		});

		return list;
	}
}
