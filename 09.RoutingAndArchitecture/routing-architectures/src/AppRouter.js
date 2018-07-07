import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import AllCatFood from './components/AllCatFoods';
import Add from './components/Add';

export default class AppRouter extends Component {
	render = () => {
		return (
			<div>
				<Route path="/home" component={Home} />
				<Route path="/add" exact component={Add} />
				<Route path="/all" exact component={AllCatFood} />
			</div>
		);
	};
}
