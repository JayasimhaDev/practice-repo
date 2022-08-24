import React, { useState } from 'react';	
import './LocationSlide.css';

const LocationSlide = () => {
	return (
		<div>
			<div className="location-slider">
				<div className="location-single-slide">
					<div className="locations">
						<img
							src="https://www.myroomie.in/assets/img/mangalore.svg"
							alt=" "
						/>
						<h4>Mangalore</h4>
					</div>
					<div className="locations">
						<img
							src="https://www.myroomie.in/assets/img/bangalore.svg"
							alt=" "
						/>
						<h4>Bangalore</h4>
					</div>
					<div className="locations">
						<img src="https://www.myroomie.in/assets/img/chennai.svg" alt=" " />
						<h4>Chennai</h4>
					</div>
					<div className="locations">
						<img
							src="https://www.myroomie.in/assets/img/hyderabad.svg"
							alt=" "
						/>
						<h4>Hyderabad</h4>
					</div>
					<div className="locations">
						<img
							src="https://www.myroomie.in/assets/img/coimbatore.svg"
							alt=" "
						/>
						<h4>Coimbatore</h4>
					</div>
					<div className="locations">
						<img src="https://www.myroomie.in/assets/img/mysore.svg" alt=" " />
						<h4>Mysore</h4>
					</div>
				</div>
			</div>
			<div className="second-slider">
				<div className="second-container">
					<div className='heading-slide'>
						<h2>Our Trending Residences</h2>
					</div>
					<div className='slider-iteam'>
           <div className='div-iteam'>
             
					 </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LocationSlide;
