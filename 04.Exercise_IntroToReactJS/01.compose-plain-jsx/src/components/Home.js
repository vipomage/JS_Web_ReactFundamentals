import React, { Component } from 'react';
import '../app.css';
import db from '../db/contacts';
import Contact from './Contact';
import Details from './Details';
import Counter from './Counter';
import Timer from './Timer';
let contacts = db;
let contactIndex = 0;
class Home extends Component {
	constructor(props) {
		super(props);
		this.updateIndex = this.updateIndex.bind(this);
	}
	updateIndex = e => {
		let element;
		if (e.target.tagName === 'DIV') {
			// Preventing errors on clicks of inside elements {pic or name}
			element = e.target;
		} else {
			element = e.target.parentNode;
		}
		contactIndex = element.attributes['data-id'].value;
		this.setState({ index: contactIndex, contacts });
	};
	render() {
		let data;
		if (this.state !== null) {
			data = this.state.contacts;
		} else {
			data = contacts;
		}
		data = data.map((contact, index) => (
			<Contact
				updateIndex={this.updateIndex}
				key={index}
				id={index}
				title={`${contact.firstName} ${contact.lastName}`}
			/>
		));

		return (
			<div className="container">
				<header> &#9993; Contact Book</header>
				<div id="book">
					<div id="list">
						<h1>Contacts</h1>
						<div className="content">{data}</div>
					</div>
					<div id="details">
						<h1>Details</h1>
						<div id="contact-details">
							<Details index={contactIndex} />
						</div>
						<Counter />
						<Timer />
					</div>
				</div>
				<footer>Contact Book SPA &copy; 2017</footer>
			</div>
		);
	}
}

export default Home;
