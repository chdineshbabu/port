import React from 'react'
import './social.css'
import twitter from './img/twitter.svg'
import github from './img/githubb.svg'
import linkedin from './img/linkedin.svg'


function Social() {
  return (
    <div>



<div class="fs-buttons on-bottom on-right">
  <a href="#!" target="_blank" class="fs-button is-twitter">
    <img src={twitter} alt='twitter'/>
  </a>
    <a href="https://github.com/chdineshbabu" target="_blank" class="fs-button is-instagram">
    <img src={github} alt='twitter'/>
  </a>
    <a href="https://www.linkedin.com/in/dinesh-ch-4b9902136" target="_blank" class="fs-button is-facebook">
    <img src={linkedin} alt='twitter'/>
  </a>
</div>
    </div>
  )
}

export default Social