import React from 'react';
import { Component } from 'react';
import contacts from '../db/contacts';

export default class Details extends Component {
	render() {
		let contact = contacts[this.props.index];
		return (
			<div className="content">
				<div className="info">
					<div className="col">
						<span className="avatar">&#9787;</span>
					</div>
					<div className="col">
						<span className="name">{contact.firstName}</span>
						<span className="name">{contact.lastName}</span>
					</div>
				</div>
				<div className="info">
					<span className="info-line">&#9743; {contact.phone}</span>
					<span className="info-line">&#9993; {contact.email}</span>
				</div>
			</div>
		);
	}
}
