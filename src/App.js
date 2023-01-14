import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About  from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackTopBtn from './components/BackTopBtn';

const App = () => {
  return <div>
    <Header />
    <Hero />
    <Brands />
    <About />
    <Skills />
    <Portfolio />
    <Services />
    <Testimonials />
    <Contact />
    <Footer />
    <BackTopBtn />
    <div style={{ height: '0px' }}></div>
  </div>;
};

export default App;
