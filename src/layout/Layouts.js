import React from 'react';
import Header from '../components/header/Header';
import Aboutme from '../components/aboutme/Aboutme';
import HeroSection from '../components/herosection/HeroSection';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

const Layouts = () => {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <section>
        <HeroSection />
        <Aboutme />
        <Projects />
        <Contact />
        <Footer />
      </section>
    </React.Fragment>
  );
};

export default Layouts;
