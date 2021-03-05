import React from 'react'
import "../css/Home.css"
import { Link } from "react-router-dom"
import Particles from "react-particles-js"

const Home = () => {
    return (
      
        <div id="container">
          
          <h1>
              <div>Hi, I'm <span>Daniel</span></div>
              <div>Your friendly neighbourhood</div>
              <div><span>Software Developer</span></div>
            
          </h1>

          <div id="button-container">
              <Link to="/work"><button id="projects">Work</button></Link>
             
          </div> 
          
        
        </div>
       
    )
}

export default Home
