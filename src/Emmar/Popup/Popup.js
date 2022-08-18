import React from 'react';
import { useState } from 'react';
import './Popup.css';

const Popup = ({ setOpen, e }) => {
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	const [email, setEmail] = useState('');
	const [checkbox, setCheckbox] = useState('');

	const handleChangeName = () => {
		setName(e.target.value);
	};
	const handleChangeEmail = () => {
		setEmail(e.target.value);
	};
	const handleChangeNumber = () => {
		setNumber(e.target.value);
	};
	const handleCheckbox = () => {
		setCheckbox(e.target.value);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div className="popup-box">
			<div className="box">
				<button className="btn-close" onClick={handleClose}>
					X
				</button>
				<form>
					<h2>GET IN TOUCH</h2>
					<img
						src="https://www.iconspng.com/images/lake-view-home/lake-view-home.jpg"
						alt=""
					/>
					<br />
					<lable htmlFor="name">Full Name *</lable>
					<br />
					<input
						type="text"
						name="name"
						id="name"
						value={name}
						placeholder=" Enter Your Full Name"
						onChange={handleChangeName}
					/>
					<br />
					<br />
					<label htmlFor="email">Email Address *</label>
					<br />
					<input
						type="email"
						id="email"
						name="email"
						value={email}
						placeholder="Enter Your Email"
						onChange={handleChangeEmail}
					/>
					<br />
					<br />
					<label htmlFor="email" className="Lable-number">
						Phone Number *
					</label>
					<br />
					<input
						type="num"
						id="number"
						name="number"
						value={number}
						placeholder="Enter Your Phone Number"
						onChange={handleChangeNumber}
					/>
					<br />
					<br />
					<ul className="ul-checkbox">
						<li>
							<input
								type="checkbox"
								className="checkbox"
								onChange={handleCheckbox}
							/>
						</li>
						<li>
							<p>Keep me updated on news and offer</p>
						</li>
					</ul>
					<br />
					<p>
						Please visit
						<a href="" style={{ color: 'blue' }}>
							privacy policy
						</a>
						to understand how Emaar handles your personal data.
					</p>
					<br />
					<input type="submit" name="submit" id="submit" placeholder="SUBMIT" />
					<br />
				</form>
			</div>
		</div>
	);
};

export default Popup;
