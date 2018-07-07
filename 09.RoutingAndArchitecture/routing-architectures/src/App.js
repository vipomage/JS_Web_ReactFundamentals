import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';
import AppRouter from './AppRouter';

class App extends Component {
	render() {
		return (
			<div>
				<Navigation>
					<a href="/home">Home</a>
					<a href="/add">Add</a>
					<a href="/all">All</a>
				</Navigation>
				<AppRouter />
				<Footer />
			</div>
		);
	}
}

export default App;
