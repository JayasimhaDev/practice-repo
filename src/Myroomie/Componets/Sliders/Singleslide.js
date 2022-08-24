import React, { useState } from 'react';
import Singlesslideapi from '../../Assets/Api/Singleslideapi';
import './Singleslide.css';
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from 'react-icons/bs';

const Singleslide = () => {
	const [open, setOpen] = useState(Singlesslideapi);
	const [num, setNum] = useState(0);
	const data = +Singlesslideapi.length - 1;
	console.log(num);

	const Leftbuttoncontainer = () => {
		if (num === 0) {
			setNum(data);
		} else {
			setNum(+num - 1);
		}
	};

	const Rightbuttoncontainer = () => {
		if (num === 0) {
			setNum(data);
		} else {
			setNum(+num - 1);
		}
	};
	return (
		<div className="Slidecontainer">
			<div className="singlesllide-container">
				<div className="img-container">
					<button
						className="leftbutton-container"
						onClick={Leftbuttoncontainer}
					>
						<BsFillArrowLeftCircleFill />
					</button>
					<img src={Singlesslideapi[num].src} alt="" />
					<div className="button-div-two">
						<button className="contactbutton">Contact with us</button>
						&nbsp;&nbsp;
						<label>
							<select className="lablebutton">
								<option value="Bangalore">Choose City </option>
								<option value="Bangalore">Bangalore</option>
								<option value="Chennai">Chennai</option>
							</select>
						</label>
					</div>
					<button
						className="rightbutton-container"
						onClick={Rightbuttoncontainer}
					>
						<BsFillArrowRightCircleFill />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Singleslide;
