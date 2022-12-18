import React from 'react';
// import NavBar from '../components/navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../pages/custom.css';
import NavBar from '../components/navbar';
const About = () => {
	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<div className='d-flex justify-content-center align-items-center'>
							<h1 className='py-5 fntclr color-red fw-bold fs-large'>Welcome to Mastan IT Solutions</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
