import React, { Component } from 'react';

export default class Button extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0
		};
	}
	updateState = () => {
		this.setState({ count: (this.state.count += 1) });
	};
	render() {
		return (
			<button onClick={this.updateState}>
				{this.props.text} - Clicked {this.state.count}
			</button>
		);
	}
}
