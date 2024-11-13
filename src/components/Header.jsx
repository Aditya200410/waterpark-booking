import React from 'react'
import '../index.css'
import {Link,NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <>
     <div className="navbar">
        <div className="nleft">
            <p>wpc@waterparkchalo.com</p>
            <p>+91 8847714464</p>
            <p>Alkapuri</p>

        </div>
        <div className="nright">
                <div className="scon">
                  <p> <img src="" alt="face" /></p> 
                  <p> <img src="" alt="face" /></p> 
                  <p> <img src="" alt="face" /></p> 
                  <p> <img src="" alt="face" /></p> 


                </div>
        </div>
     </div>
    </>


  )
}

export default Header;