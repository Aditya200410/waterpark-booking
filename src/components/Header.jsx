import React from 'react'
import '../index.css'
import {Link,NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <>
      <nav className="navbar">
        <a href='/'> <div className="logo">
          <img src="https://myresortbooking.in/public/images/logo.webp" alt="" />
          </div></a>
        <div className="nav-links">
          <NavLink to="/" className="nav-link home" >Home</NavLink>
          <NavLink to="/farmvilla" className="nav-link">Farm/Villa</NavLink>
          <NavLink to="/influencers" className="nav-link">Influencers</NavLink>
          <NavLink to="/about" className="nav-link">About Us</NavLink>
          <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
        </div>
        <div className="location">
          <i className="fas fa-search"></i>
          <span className="location-text">Location</span>
          <span className="city">Mumbai - All</span>
        </div>
      </nav>

      
    </>


  )
}

export default Header;