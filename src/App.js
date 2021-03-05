import { useContext } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { __RouterContext } from "react-router"
import { useTransition, animated, interpolate } from "react-spring"
import Particles from "react-particles-js"


// components
import Home from "./components/jsx/Home"
import About from "./components/jsx/About"
import Contact from "./components/jsx/Contact"
import Projects from "./components/jsx/Projects"
import Header from "./components/jsx/Header"
import Resume from "./components/jsx/Resume"

import './App.css';


function App() {

  const { location } = useContext(__RouterContext)
  const transitions = useTransition(location, location => location.pathname, {
    from: {opacity:0, transform: "translateX(100%)"},
    enter: {opacity:1, transform: "translateX(0)"},
    leave: {opacity:0, transform: "translateX(-80%)"},
    config: {
      duration: 700
    }
  })
  return (
      <>
    {/* <Router> */}
        <Header/>
        
        {transitions.map(({item, props, key}) => (
          <animated.div key={key} style={props}>
             <Switch location={item}>
                <Route path="/" exact component={Home}/>
                <Route path="/about" exact component={About}/>
                <Route path="/work" exact component={Projects}/>
                <Route path="/contact" exact component={Contact}/>
                <Route path="/resume" exact component={Resume}/>
            </Switch>
          </animated.div>
        ))}
        
        <Particles
     params={{

       particles: {
         number: {
           value: 400,
           density: {
             enable: true,
             value_area: 2000
           }
         },
        collisions: {

        },
         line_linked: {
          enable: true,
          opacity: 0.5
         
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
         detect_on: "window",
        events: {
          onHover: {
            enable: true,
            mode: "repulse"
          },
          onClick: {
            enable: true,
            mode: ["push", "repulse"]
          }
        },
        modes: {
          grab: {
            distance: 500,
            lineLinked: {
              opacity: 0.5
            }
          },
          bubble: {
            distance: 200,
            size: 30,
            duration: 1,
            opacity: 1,
            speed: 12
          }
        }
       }

     }}
    id="particles-home"/>
     {/* </Router> */}
    
   
    
  </>
  );
}

export default App;
