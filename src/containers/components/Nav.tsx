import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav({ onSearch }) {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<Link to="/">
				<span className="navbar-brand">Henry - Weather App</span>
			</Link>
			<Link to="/about">
				<span> About </span>
			</Link>
			<SearchBar onSearch={onSearch} />
		</nav>
	);
}

export default Nav;
