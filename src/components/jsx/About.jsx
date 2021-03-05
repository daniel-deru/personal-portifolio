import React from 'react'
import Particles from "react-particles-js"
import { FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa"
import { SiCodewars } from "react-icons/si"

import "../css/About.css"

const About = () => {

  const styles = {
    display: "block",
    fontSize: "3.2em",
    margin: "30px 0"
   
  }
    return (
        <div id="about-container">
          <div className="icons">
          <a href="http://youtube.com" target="_blank"><FaYoutube style={styles} className="icon"></FaYoutube></a>
          <a href="https://www.codewars.com/users/danielIsAwesomeAtCoding" target="_blank"><SiCodewars style={styles} className="icon"/></a>
              <a href="https://github.com/daniel-deru" target="_blank"><FaGithub style={styles} className="icon"/></a>
              <a href="https://www.linkedin.com/in/daniel-de-ru-4b600a202/" target="_blank"><FaLinkedin style={styles} className="icon"/></a>
          </div>
            <div className="bio">
                <h1>Interests</h1>
                <div>I have a passion for design, software development and solving problems. I think software development is one of the coolest career paths in the world. being a programmer is like having super powers and I love using my super powers everyday.</div>
                <h1>Life Goals</h1>
                <div>I strive to help others achieve their dreams and goals because I know how hard it is to pursue your dreams with little to no support. software development allows me to touch the lives of many people and make this world a better place one website or app at a time. </div>
            </div>
            <div className="skills">
                <h1>skills</h1>
                <ul>
                    <li>HTML</li>
                    <li>CSS/SASS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                    <li>ExpessJS</li>
                    <li>MongoDB</li>
                    <li>Python</li>
                </ul>
            </div>
            {/* <Particles
     params={{

       particles: {
         number: {
           value: 200,
           density: {
             enable: true,
             value_area: 2000
           }
         },
         line_linked: {
          enable: true
        },
        size: {
          value: 1.5
        },
        move: {
          speed: 1,
          direction: "top",
          bounce: false,
          out_mode: "out",
          straight: false
        },
        opacity: {
          anim: {
            speed:2,
            opacity_min: 0
          }
        }
       },
       interactivity: {
         detect_on: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "repulse"
          }
        },
        modes: {
          grab: {
            distance: 200,
            lineLinked: {
              opacity: 0.5
            }
          }
        }
       }

     }}
        className="particles-js"/> */}
        </div>
    )
}

export default About
