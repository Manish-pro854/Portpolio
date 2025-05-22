import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li><span>Name</span> : MANISH AHLAWAT</li>
              <li><span>AGE</span> : 22 YEARS</li>
              <li><span>GENDER</span> : MALE</li>
              <li><span>LANGUAGE</span> : ENGLISH,HINDI</li>
            </ul>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li><span>DEGREE</span> : PURSUING B.TECH</li>
              <li><span>BRANCH</span> : COMPUTER SCIENCE & ENGINEERING</li>
              
            </ul>
          </div>
          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>FRONTEND DEVELOPER</li>
              <li>REACT</li>
              <li>TAILWIND CSS</li>
              <li>JAVASCRIPT</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout"></div>
    </div>
  )
}

export default About
