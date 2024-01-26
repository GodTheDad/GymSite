import React from 'react'
import {Link} from "react-router-dom"
import "./Navigation.css"
const Navigation = () => {
  return (
    <div className='hero'>
        <nav>
            <h2 className = "logo">Fair<span>Ford</span></h2>
            <ul>
            <Link to = {`/about`}><li>Home</li></Link>
            <Link to = {`/about`}><li>About</li></Link>
            <Link to = {`/about`}><li>Subscriptions</li></Link>
            <Link to = {`/about`}><li>Contact Us</li></Link>
            <Link to = {`/about`}><li>Socials</li></Link>
            </ul>
            <button type="button">Sign Up</button>
        </nav>
    </div>
  )
}

export default Navigation