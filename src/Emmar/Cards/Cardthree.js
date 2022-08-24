import React from 'react';
import './Cardone.css';
import Apisubgallery from './Apisubgallery';
import { useState } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';

const Cardthree = (setOpen) => {
	const [subdata, SetSubdata] = useState(Apisubgallery);
	const [move, setMove] = useState(0);
	let click = +subdata.length - 1;
	console.log(move);

	const slideback = (e) => {
		if (move === 0) {
			setMove(click);
		} else {
			setMove(+move - 1);
		}
	};
	const slidefront = (e) => {
		if (move === click) {
			setMove(0);
		} else {
			setMove(+move + 1);
		}
	};
	const togglePopup = () => {
		setOpen(true);
	};
	const showInMapClicked = () => {
		window.open('https://maps.google.com?q=' + 12.9 + ',' + 77.5969);
	};
	return (
		<div className="main-div">
			<div className="cardsection">
				<div className="gallery-section">
					<div className="img-section">
						<button className="leftbutton" onClick={slideback}>
							<BsFillArrowLeftCircleFill />
						</button>
						<img
							src={subdata[move].src}
							alt=" "
							
						/>
						<button className="rightbutton-one" onClick={slidefront}>
							<BsFillArrowRightCircleFill />
						</button>
					</div>
					<div className="text-section">
						<div className="col-1-first">
							<div className="title-card">
								<h1>HUBBLI</h1>
								<p className="p-tag-title">HEBBAL,RAJANKUNTE,KALYANNAGAR</p>
							</div>
							<div className="direction-div">
								<button className="direction-button" onClick={showInMapClicked}>
									<FiMapPin />
									&nbsp; &nbsp;Direction
								</button>
							</div>
						</div>
						<div className="text-more-tag">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
								architecto eum qui, id non ratione mollitia nostrum labore! Eius
								optio soluta pariatur ex possimus voluptatibus nihil quisquam
								voluptates nulla qui.
							</p>
						</div>
						<div className="subimages-div">
							<div className="images-1">
								<img
									src={subdata[0].src}
									alt=""
									
								/>
								<h4 className="img-title">HEBBAL</h4>
							</div>
							<div className="images-1">
								<img
									src={subdata[1].src}
									alt=""
									
								/>
								<h4 className="img-title">RAJANKUNTE</h4>
							</div>
							<div className="images-1">
								<img
									src={subdata[2].src}
									alt=""
									
								/>
								<h4 className="img-title">KALYANNAGAR</h4>
							</div>
						</div>
						<div className="getintouch-button">
							<button className="touch-button" onClick={togglePopup}>
								GET IN TOUCH
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cardthree;
