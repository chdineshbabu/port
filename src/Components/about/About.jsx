import React from 'react'
import './about.css'

function About() {
  return (
    <div className='about'>
        <div className='wrapper'>
            <h2><b>Who's this guy?</b></h2>
            <p className="separator" />
        </div>
        <h3 className='title_desc'>Hello, My name is Dinesh.</h3>
        <p className='about_text'>I am a web developer with a passion for creating amazing websites.
        I have had the opportunity to work on various exciting projects that have 
        helped me grow as a developer.Over the years, I have developed a strong expertise 
        in various web development frameworks and technologies such as React, Node.js, and more.
         I have also been exploring the potential of <b>web3</b>, and I am excited about the possibilities
          it offers in terms of decentralized web applications.</p>
          <div className='wrapper'>
            <h2><b>Who's this guy?</b></h2>
            <p className="separator" />
        </div>
        <h3 className='title_desc'>I am a Programmer.</h3>
        <p className='about_text'>For the front-end I usually work with Javascript, either standalone or including popular frameworks like <b>ReactJS</b> and Node.js. I also make the web pretty by using <b>Tailwindcss</b>, CSS and, whenever needed, any of their friends: Bootstrap, Bulma, etc.

For the back-end I also work with <b>Javascript</b> (NodeJS, Express, MongoDB, etc). And i'm also works with web 3 technologies like <b>solidity</b>, web3.js and etc.,</p>
    </div>
    
  )
}

export default About