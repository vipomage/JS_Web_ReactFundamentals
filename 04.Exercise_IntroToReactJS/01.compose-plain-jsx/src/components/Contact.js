import React, { Component } from 'react';

export default class Contact extends Component {
	// updateDetails = () => {
	// 	//ReactDOM.render(<Details index={this.props.id}/>,document.getElementById('contact-details'));
	// };  // First solution with rendering again wich gave warning and i realized it's so wrong

	render() {
		return (
			<div
				onClick={this.props.updateIndex}
				className="contact"
				data-id={this.props.id}
			>
				<span onClick={e => e.preventDefault()} className="avatar small">
					&#9787;
				</span>
				<span onClick={e => e.preventDefault()} className="title">
					{this.props.title}
				</span>
			</div>
		);
	}
}
