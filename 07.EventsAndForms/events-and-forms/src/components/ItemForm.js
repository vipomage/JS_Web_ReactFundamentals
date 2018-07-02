import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ItemForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemName: '',
			error: ''
		};
	}

	onInputChanged = event => {
		this.setState({ itemName: event.target.value });
	};

	onItemSaved = event => {
		event.preventDefault();

		//check if empty

		if (this.state.itemName) {
			this.props.addItem(this.state.itemName);
			this.setState({error:''})
		} else {
			this.setState({ error: 'Item name cannot be empty!' });
		}
	};

	render() {
		return (
			<div>
				<p className={'error'}>{this.state.error}</p>
				<form onSubmit={this.onItemSaved}>
					Item name:
					<input
						value={this.state.itemName}
						onChange={this.onInputChanged}
						type="text"
						name={'name'}
					/>
					<br />
					<input type="submit" />
				</form>
			</div>
		);
	}
}


ItemForm.propTypes = {
	name:PropTypes.string
};

export default ItemForm
