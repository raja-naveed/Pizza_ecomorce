import React from 'react';
import First from '../components/First';
import About from '../components/About';
import Work from '../components/Work';
import Testinomial from '../components/Testinomial';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <>
        <First/>
        <About />
        <Work/>
        <Testinomial/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home;
