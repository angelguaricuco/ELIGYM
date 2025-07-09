import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import FitnessDetails from './components/FitnessDetails/FitnessDetails';
import Services from './components/Services/Services';
import Package from './components/Package/Package';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';

const App = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Hero />
			<FitnessDetails />
			<Services />
			<Package />
			<Contact />
			<Footer />
		</React.Fragment>
	);
};

export default App;
