import React, { Component } from 'react';
import { Route } from 'react-router-dom';

export default class Home extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<h1>
				Welcome to my app!
				<Route
					path={this.props.match.url + '/contact'}
					render={() => <h2>Some text</h2>}
				/>
			</h1>
		);
	}
}
