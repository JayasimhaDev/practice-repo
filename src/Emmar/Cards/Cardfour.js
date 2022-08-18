import React from 'react';
import './Cardtwo.css';
import { FiMapPin } from 'react-icons/fi';
import Apisubgallery from './Apisubgallery';
import { useState } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Cardfour = (setOpen) => {
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
		<div className="main-div-two">
			<div className="cardsection-two">
				<div className="gallery-section-two">
					<div className="text-section-two">
						<div className="col-first-two">
							<div className="title-card-two">
								<h1>TUMAKURU</h1>
								<p className="p-tag-title-two">HEBBAL,RAJANKUNTE,KALYANNAGAR</p>
							</div>
							<div className="direction-div-two">
								<button
									className="direction-button-two"
									onClick={showInMapClicked}
								>
									<FiMapPin />
									&nbsp; &nbsp;Direction
								</button>
							</div>
						</div>
						<div className="text-more-tag-two">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
								quisquam nihil culpa. Exercitationem iste pariatur facere animi
								libero, alias natus, blanditiis voluptates placeat sapiente,
								magnam ut quis nisi ad
							</p>
						</div>
						<div className="subimages-div-two">
							<div className="images-2">
								<img
									src={subdata[4].src}
									alt=""
									style={{ width: '150px', height: '200px' }}
								/>
								<h4 className="img-title-two">HEBBAL</h4>
							</div>
							<div className="images-2">
								<img
									src={subdata[5].src}
									alt=""
									style={{ width: '150px', height: '200px' }}
								/>
								<h4 className="img-title-two">JAKKURU</h4>
							</div>
							<div className="images-2">
								<img
									src={subdata[6].src}
									alt=""
									style={{ width: '150px', height: '200px' }}
								/>
								<h4 className="img-title-two">KODIGEHALLI</h4>
							</div>
						</div>
						<div className="getintouch-button-two">
							<button className="touch-button-two" onClick={togglePopup}>
								GET IN TOUCH
							</button>
						</div>
					</div>
					<div className="img-section-two">
						<button className="leftbutton-two" onClick={slideback}>
							<BsFillArrowLeftCircleFill />
						</button>
						<img
							src={subdata[move].src}
							alt=" "
							style={{ width: '800px', height: '500px' }}
						/>
						<button className="rightbutton-two" onClick={slidefront}>
							<BsFillArrowRightCircleFill />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cardfour;
