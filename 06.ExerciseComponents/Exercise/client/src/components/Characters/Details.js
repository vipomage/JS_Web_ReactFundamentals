import React from 'react';

export default class Details extends React.Component {
	constructor(props) {
		super(props);
		this.state = { character: {} };
	}
	componentDidMount() {
		fetch(`http://localhost:9999/character/${this.props.id}`)
			.then(data => data.json())
			.then(parsedData => {
				this.setState({ character: parsedData });
			});
	}
	componentDidUpdate(prevProps, prevState,snap) {
		fetch(`http://localhost:9999/character/${this.props.id}`)
			.then(data => data.json())
			.then(parsedData => {
				//breaking loop with condition
				if (JSON.stringify(prevState.character) !== JSON.stringify(parsedData)) {
					this.setState({ character: parsedData });
				}
			});
	}

	render() {
		let obj = this.state.character;
		return (
			<div className="details-container">
				<h1>{obj.name}</h1>
				<img key={obj.id} src={obj.url} alt={obj.name} />
				<p>{obj.bio}</p>
			</div>
		);
	}
}
