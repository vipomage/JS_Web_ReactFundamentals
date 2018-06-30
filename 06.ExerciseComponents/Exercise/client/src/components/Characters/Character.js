import React, { Component } from 'react';

export default class Character extends Component {
	constructor(props) {
		super(props);
		this.state = {
			src: this.props.url,
			id: this.props.id,
			name: this.props.name
		};
	}
	render() {
		return (
			<div className="character" id={this.props.id}>
				<img className="zoom" onClick={this.props.updateFunc} id={this.props.id} src={this.props.url} alt={this.props.name} />
			</div>
		);
	}
}
