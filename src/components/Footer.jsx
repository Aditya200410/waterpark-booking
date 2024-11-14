import React from 'react'
import {Link,NavLink} from 'react-router-dom'
const Footer = () => {
  return (
    <>
   <div className="footer">
        <div className="fleft">
          <a href='/'>  <img src="https://newdemo.rreda.in/wp-content/uploads/2023/04/cropped-Untitled-design-1.png" alt="" /></a>

        </div>
        <div className="fm">
                <div className="fmcon">
                  <NavLink to='/about'> <p>About us </p> </NavLink>
                  <NavLink to='/'><p> Home</p> </NavLink>
                  <NavLink to='/contact'><p> Contact</p> </NavLink>  
                </div>
                <div className="fmcon">
                  <p>Support </p> 
                  <p> Customer Support</p> 
                  <p> Privacy & Policy</p> 
                  
                   
                </div>
        </div>
        <div className="fright">
          
          <div className="frc">
            <div className='cinfo'>
              <div className="cleft">
                <img src="https://www.shutterstock.com/image-vector/call-icon-symbol-vector-mail-260nw-1189039696.jpg" alt="" />
              </div>
              <div className="cright">
              <div>Phone number</div>
              <div>918847714464</div>
              </div>
             
            </div>
            <div className='cinfo'>
              <div className="cleft">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/002/205/854/small/email-icon-free-vector.jpg" alt="" />
              </div>
              <div className="cright">
              <p>Email Address</p>
              <p>wpc@waterparkchalo.com</p>
              </div>
             
            </div>
            <div className='cinfo'>
              <div className="cleft">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmTVkqizpykOy4P0YjBxJ9NKxQLYddy1FRA&s" alt="" />
              </div>
              <div className="cright">
              <p>Address</p>
              <p>110,Lakshmi Apt 1,Alkapuri, Nallasopara  491209</p>
              </div>
             
            </div>
            
            
          </div>
        </div>
     </div>
     <div className="fbottom">
          <div className="fbl">
            <p>Water park Chalo</p>
          </div>
          <div className="fbl">
            <p>Build By Appzeto</p>
          </div>
        </div>


        <div className="fomo">
        <div className="fomoinfo">
        <NavLink to="/" className="fomoinfo"> <img  src="https://myresortbooking.in/public/images/icons/home.webp" alt="" />
           Home</NavLink>
          </div>
          <div className="fomoinfo">
            <NavLink to="/resorts" className="fomoinfo"> <img c src="https://myresortbooking.in/public/images/icons/resort.webp" alt="" />
           Resorts</NavLink>
          </div>
          <div className="fomoinfo">
          <NavLink to="/farmvilla" className="fomoinfo"><img  src="https://myresortbooking.in/public/images/icons/villa.webp" alt="" />
          <p> Villa</p>
          </NavLink>

          </div>
          <div className="fomoinfo">
          <NavLink to="/influencers" className="fomoinfo"><img src="https://myresortbooking.in/public/images/icons/collab.webp" alt="" />
           Collab
           </NavLink>

          </div>
         
          <div className="fomoinfo">
          <NavLink to="/contact" className="fomoinfo"><img src="https://myresortbooking.in/public/images/icons/more.webp" alt="" />
           Contact
           </NavLink>
          </div>

        </div>
    
    </>
  )
}

export default Footer
