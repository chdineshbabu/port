import React from 'react'
import './skill.css'
import react from './img/react.svg'
import express from './img/express.svg'
import sol from './img/solidity.svg'
import node from './img/node.png'
import js from './img/js.png'
import htmls from './img/html.png';
import css from './img/css.png';
import mongo from './img/mongo.svg'



function Skill() {
  return (
    <div>
        <div className='skill'>
        <h3>Languages, That i know</h3>
        <p className="separator" />
        <div className='img_cnt'>
        <img className='skill_img' src = {react} alt="react"/>
        <img className='skill_img' src = {express} alt="express"/>
        <img className='skill_img' src = {sol} alt="solidity"/>
        <img className='skill_img' src = {node} alt="node"/>
        <img className='skill_img' src = {js} alt="javaceript"/>
        <img className='skill_img' src = {htmls} alt="Developer"/>
        <img className='skill_img' src = {css} alt="Developer"/>
        <img className='skill_img' src = {mongo} alt="Developer"/>
        
        </div>
        </div>
    </div>
  )
}

export default Skill