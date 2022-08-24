import './App.css';
import Cardone from './Emmar/Cards/Cardone';
import Cardtwo from './Emmar/Cards/Cardtwo';
import Cardthree from './Emmar/Cards/Cardthree';
import Cardfour from './Emmar/Cards/Cardfour';
// import Navbar from './Emmar/Navbar/Navbar';
import Popup from './Emmar/Popup/Popup';
import Cardslider from './Emmar/Cardslider/Cardslider';
import Textslide from './Emmar/textslide/Textslide';
import Navbar from './Myroomie/Componets/Navbar/Navbar';
import Singleslide from './Myroomie/Componets/Sliders/Singleslide';
import LocationSlide from './Myroomie/Componets/Sliders/LocationSlide';
import { useState } from 'react';

function App() {
	const [open, setOpen] = useState(false);

	return (
		<div>
			{/* {open === true ? (
				<div>
					<Navbar setOpen={setOpen} />
					<Cardslider setOpen={setOpen} />
					<Textslide setOpen={setOpen} />
					<Cardone setOpen={setOpen} />
					<Cardtwo setOpen={setOpen} />
					<Cardthree setOpen={setOpen} />
					<Cardfour setOpen={setOpen} />
					<Popup setOpen={setOpen} />
				</div>
			) : (
				<div>
					<Navbar setOpen={setOpen} />
					<Cardslider setOpen={setOpen} />
					<Textslide setOpen={setOpen} />
					<Cardone setOpen={setOpen} />
					<Cardtwo setOpen={setOpen} />
					<Cardthree setOpen={setOpen} />
					<Cardfour setOpen={setOpen} />
				</div>
			)} */}
			<div>
				<Navbar />
				<Singleslide />
				<LocationSlide />
			</div>
		</div>
	);
}

export default App;
