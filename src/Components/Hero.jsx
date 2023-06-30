import React from 'react'
import Nav from './nav/Nav';
import Title from './hero/Title.jsx';
import About from './about/About';
import Skill from './Skills/Skill';
import Project from './projects/Project';
import Footer from './footer/Footer';
import Social from './social/Social';

function Hero() {
  return (
    <div>
        <Nav />
        <Title />
        <About />
        <Skill />
        <Project />
        <Footer />
        <Social />
    </div>
  )
}

export default Hero;