import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import {Navbar} from "./Navbar.jsx";
import {BootstrapCard} from "./BootstrapCard.jsx";
import {Jumbotron} from "./Jumbotron.jsx";
import {Endbar} from "./Endbar.jsx";

//create your first component
const Home = () => {
	return (
	<div>
		<Navbar />
			<div>
				<Jumbotron />
			</div>
		<div className='d-flex flex-column align-items-center flex-md-row justify-content-between text-center'>
			<BootstrapCard title="The Name Game" />
			<BootstrapCard title="The Name Game The 3rd"/>
			<BootstrapCard title="The Name Game 4ever"/>
			<BootstrapCard title="The Name Game Infinity"/>
		</div>
		<div>
			<Endbar copyright="Copyright My Website 2024" />
		</div>
	</div>
	);
};

export default Home;
