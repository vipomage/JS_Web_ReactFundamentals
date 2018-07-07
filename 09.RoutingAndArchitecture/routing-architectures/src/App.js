import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';
import AppRouter from './AppRouter';

class App extends Component {
	render() {
		return (
			<div>
				<Navigation>
					<Link to='/home'>Home</Link>
					<Link to='/add'>Add Cat Food</Link>
					<Link to='/all'>All</Link>
				</Navigation>
				<AppRouter />
				<Footer />
			</div>
		);
	}
}

export default App;
