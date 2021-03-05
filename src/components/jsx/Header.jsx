import React from 'react'
import "../css/Header.css"
import { Lin, NavLink, NavNavLink } from "react-router-dom"

const Header = () => {

    
    return (
        <header>
        <nav>
            <ul>
                <NavLink to="/"  activeClassName="is-active" className="nav" exact><li>Home</li></NavLink> 
                <NavLink to="/about"  activeClassName="is-active" className="nav"><li>About</li></NavLink>
                <NavLink  to="/work"  activeClassName="is-active" className="nav"><li>Work</li></NavLink>
                <NavLink to="/contact"  activeClassName="is-active" className="nav"><li>Contact</li></NavLink>
                <NavLink to="/resume"  activeClassName="is-active" className="nav"><li>Resume</li></NavLink>
            </ul>
        </nav>
     
    </header>
    )
}

export default Header
