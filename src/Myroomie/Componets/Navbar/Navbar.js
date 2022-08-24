import React, { useState } from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const navtaggle = () => {
		if (open === true) {
			setOpen(false);
		} else {
			setOpen(true);
		}
	};
	return (
		<div className="navbar">
			<span className="nav-logo">KALYANI HOMES</span>
			<div className={open === false ? 'navbar-items active ' : 'navbar-items'}>
				<a href="/home">Home</a>
				<a href="/home">About</a>
				<a href="/home">Contact</a>
				<a href="/home">Service</a>
			</div>
			<div className="nav-button">
				<FaBars onClick={navtaggle} />
			</div>
			<div>
				<button className="getbutton">GET IN TOUCH</button>
			</div>
		</div>
	);
};

export default Navbar;
