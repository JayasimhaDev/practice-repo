import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	return (
		<>
			<nav className="navbar">
				<div className="nav-container">
					<a className="nav-logo">
						KALYNAI HOMES
						<i className="fas fa-code"></i>
					</a>

					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className="nav-item">
							<a activeClassName="active" className="nav-links">
								CONTACT
							</a>
						</li>
						<li className="nav-item">
							<a activeClassName="active" className="nav-links">
								WHATSAPP
							</a>
						</li>
						<li className="nav-item">
							<a activeClassName="active" className="nav-links">
								<button className="button-getin">GET IN TOUCH</button>
							</a>
						</li>
					</ul>
					<div className="nav-icon" onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
