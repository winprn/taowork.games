import React from 'react';
import About from '../components/About';
import Header from '../components/Header';
import Legal from '../components/Legal';
import Works from '../components/Works';

const Home = () => {
	return (
		<>
			<Header />
			<About />
			<Works />
			<Legal />
		</>
	);
};

export default Home;
