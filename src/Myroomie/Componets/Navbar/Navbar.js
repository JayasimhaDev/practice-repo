import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className="navbar">
			<span className="nav-logo">KALYANI HOMES</span>
			<div className={`navbar-items ${open && 'open'}`}>
				<a href="/home">Home</a>
				<a href="/home">About</a>
				<a href="/home">Contact</a>
				<a href="/home">Service</a>
			</div>
			<div
				className={`nav-taggle ${open && 'open'}`}
				onClick={() => setOpen(!open)}
			>
				<div className="bar"></div>
			</div>
		</div>
	);
};

export default Navbar;
