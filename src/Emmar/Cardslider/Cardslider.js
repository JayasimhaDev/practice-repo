import React from 'react';
import { useState } from 'react';
import './Cardslider.css';
import Apisubgallery from '../Cards/Apisubgallery';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const Cardslider = () => {
	const [subdata, setSubdata] = useState(Apisubgallery);
	const [num, setNum] = useState(0);
	let length = +subdata.length - 4;
	console.log(num);

	const slideback = (e) => {
		if (num === 0) {
			setNum(length);
		} else {
			setNum(+num - 1);
		}
	};
	const slidefront = (e) => {
		if (num === length) {
			setNum(0);
		} else {
			setNum(+num + 1);
		}
	};

	return (
		<div className="card-slider-main">
			<div className="slide-container">
				<div className="slide-images">
					<button className="leftbutton-slide" onClick={slideback}>
						<BsFillArrowLeftCircleFill />
					</button>
					<div className="image-div">
						<img src={subdata[num].src} alt=" " />
						<h2>{subdata[num].title}</h2>
						<h5>{subdata[num].para}</h5>
					</div>
					<div className="image-div">
						<img src={subdata[+num + 1].src} alt=" " />
						<h2>{subdata[+num + 1].title}</h2>
						<h5>{subdata[+num + 1].para}</h5>
					</div>
					<div className="image-div">
						<img src={subdata[+num + 2].src} alt=" " />
						<h2>{subdata[+num + 2].title}</h2>
						<h5>{subdata[+num + 2].para}</h5>
					</div>
					<div className="image-div">
						<img src={subdata[+num + 3].src} alt=" " />
						<h2>{subdata[+num + 3].title}</h2>
						<h5>{subdata[+num + 3].para}</h5>
					</div>
					<button className="rightbutton-slide" onClick={slidefront}>
						<BsFillArrowRightCircleFill />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cardslider;
