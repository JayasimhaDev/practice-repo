import React, { useState } from 'react';
import './Contactform.css';
import { BsWhatsapp } from 'react-icons/bs';

const Contactform = (e) => {
	const [date, setDate] = useState();
	console.log('Date', date);

	const from = () => {
		const handleClick = (e) => {
			console.log('');
		};
	};
	const [name, setName] = useState('');
	return (
		<div className="contactform">
			<div className="box-form">
				<button className="closeform">X</button>
				<form>
					<div className="button-form-div">
						<button className="visitbutton">Schedule a Visit</button>
						<button className="unlockbutton">Unlock Discount</button>
					</div>
					<div className="inside-div">
						<div className="details-div-form">
							<div className="name-div">
								<input type="text" id="firstname" value="First Name" />
								&nbsp;&nbsp;&nbsp;{' '}
								<input type="text" id="lastname" value="Last Name" />
								<br />
							</div>
							<div className="mobilenumber">
								<img
									src=" https://res.cloudinary.com/stanza-living/image/upload/v1654081381/Website%20v5/Icons/form-country-flag.png"
									width="30px"
									height="30px"
									alt=""
								/>
								<h4 style={{ textAlign: 'center' }}>+91</h4>
								<p>|</p>
								<input type="num" id="mobilenum" value="Mobile Number" />
							</div>
							<div className="working-div-form">
								<p>I am a</p>
								<div className="iama-div">
									<input
										type="radio"
										id="workingprofessional"
										value="professional"
									/>
									&nbsp; Working Professional&nbsp; &nbsp;
									<input type="radio" id="student" value="student" />
									&nbsp; Student
								</div>
								<div className="select-month">
									<lable>
										<select name="months" className=" select-month-lable">
											<option>Duration of your Stay</option>
											<option value="3months"> Less than 3 months</option>
											<option value="36months"> 3 - 6 months</option>
											<option value="6months"> More than months</option>
										</select>
									</lable>
								</div>
							</div>
							<div className="visit-div-form">
								<p>When are you planning to visit?</p>
								<div className="button-four-div">
									<button className="date-first-button">{date}</button>
									<button className="date-picker-button">
										<input
											type="date"
											className="date-target"
											onChange={(e) => setDate(e.target.value)}
										/>
									</button>
								</div>
							</div>
							<div className="time-div-form">
								<p>What is your preferred time slot?</p>
								<div className="button-five-div">
									<button clsasName="time-first-but">9-12 PM</button>
									<button clsasName="time-first-but">12-3 PM</button>
									<button clsasName="time-first-but">3-6 PM</button>
									<button clsasName="time-first-but">6-9 PM</button>
								</div>
							</div>
						</div>
						<div className="inside-two-div">
							<div className="social-whatsapp">
								<p>
									<BsWhatsapp className="whtasappbutton" />
									&nbsp;&nbsp;&nbsp;Get updates over WhatsApp
								</p>
								<div className="radio-button">
									<input
										className="react-switch-checkbox"
										id={`react-switch-new`}
										type="checkbox"
									/>
									<label
										className="react-switch-label"
										htmlFor={`react-switch-new`}
									>
										<span className={`react-switch-button`} />
									</label>
								</div>
							</div>
						</div>
						<div className="checkbox-div">
							<input type="checkbox" className="checkbox-last" />
							&nbsp;&nbsp;
							<p>
								I have read and agree to the terms and conditions and hereby
								confirm to proceed.
							</p>
						</div>
						<div className="last-final-button">
							<button className="visit-button">Schedule a Visit</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contactform;
