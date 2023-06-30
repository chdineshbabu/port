import React from 'react'
import './Project.css'
import redirect from './link.svg'

function Project() {
  return (
    <div className='prj'>
    <h2><b>Previous Work</b></h2>
    <p className="separator" />
        <div className='cards'>
            <div className='card'>
                <h5>Student Blog site</h5>
                <p className='card-text'>An full stack Blog site with google authentication process for students to upload there daily blogs to share there thoughts to world, this is an simple and minimal site which is user friendly to use.</p>
                <p>React.js,JavaScript,CSS,Mongo,Express</p>
                <a href='https://blog-site-ten-neon.vercel.app/'>Explore <img className='link_img' src={redirect} alt='link'/></a>
            </div>
            <div className='card'>
                <h5>Personal Portflio</h5>
                <p className='card-text'>This is pervious portflio which is simple made with only frontend language like HTML,CSS,JavaScript</p>
                <p>HTML,CSS,JavaScript</p>
                <a href='https://chdineshbabu.github.io/'>Explore <img className='link_img' src={redirect} alt='link'/></a>
            </div>
        </div>
        {/*<button className='prj_btn'>More Project <img className='link_img' src={redirect} alt='link'/></button>*/}
    </div>
  ) 
}

export default Project
