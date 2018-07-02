import React, { Component } from 'react';
import List from './List';
import ItemForm from './ItemForm';

export default class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{ id: 1, name: 'Ivan' },
				{ id: 2, name: 'Pesho' },
				{ id: 3, name: 'Gosho' },
				{ id: 4, name: 'Maria' }
			]
		};
	}

	addItem = itemname => {
		this.setState(prevState => {
			let items = prevState.items;
			items.push({ id: items.length + 1, name: itemname });

			return { items };
		});
	};

	render() {
		return (
			<div className={'container'}>
				<h1>My page</h1>
				<List items={this.state.items} />
				<ItemForm addItem={this.addItem} />
			</div>
		);
	}
}
