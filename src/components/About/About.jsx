import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from "../../assets/mern.png"
import java from "../../assets/java.png"
import dsa from "../../assets/dsa.png"
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function About() {

  useGSAP(()=>{
    gsap.from(".circle",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
    trigger:".circle",
    scroll:"body",
    markers:true,
    scrub:2,
    start:"top 60%",
    end:"top 30%"
    }
  })
    gsap.from(".line",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".circle",
      scroll:"body",
      scrub:2,
      markers:true,
      start:"top 60%",
      end:"top 30%"
    }
    })
  })

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
      <div className="rightabout">
        <Card title="MERN STACK WEB DEVELOPER" image={mern}/>
        <Card title="JAVA" image={java}/>
        <Card title="DSA" image={dsa}/>
      </div>
    </div>
  )
}

export default About
