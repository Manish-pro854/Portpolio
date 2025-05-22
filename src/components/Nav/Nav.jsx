import React, { useRef } from 'react'
import {Link} from "react-scroll"
import "./Nav.css"

function Nav() {
  let menu = useRef()
  let mobile = useRef()

  return (
    <nav>
      <h1>PORTPOLIO</h1>
      <ul className='desktopmenu'>
        <Link to="home" smooth={true} duration={500} activeClass='active' spy={true}><li>Home</li></Link>
        <Link to="about" smooth={true} duration={500} activeClass='active' spy={true}><li>About</li></Link>
        <Link to="projects" smooth={true} duration={500} activeClass='active' spy={true}><li>Projects</li></Link>
        <Link to="contact" smooth={true} duration={500} activeClass='active' spy={true}><li>Contact</li></Link>
      </ul>
      <div className="hamburger" ref={menu} onClick={
        ()=>{
          mobile.current.classList.toggle("activemobile")
          menu.current.classList.toggle("activeham")
        } 
      }>
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>
      <ul className='mobilemenu' ref={mobile}>
        <Link to="home" smooth={true} duration={500} activeClass='active' spy={true}><li>Home</li></Link>
        <Link to="about" smooth={true} duration={500} activeClass='active' spy={true}><li>About</li></Link>
        <Link to="projects" smooth={true} duration={500} activeClass='active' spy={true}><li>Projects</li></Link>
        <Link to="contact" smooth={true} duration={500} activeClass='active' spy={true}><li>Contact</li></Link>
      </ul>
    </nav>
  )
}

export default Nav
