import React, { Component } from 'react';

export default class Navigation extends Component {
	render = () => {
		return (
			<div className="navigation">
				My Navigation
				{this.props.children}
			</div>
		);
	};
}
