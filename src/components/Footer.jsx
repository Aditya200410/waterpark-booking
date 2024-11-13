import React from 'react'

const Footer = () => {
  return (
    <>
   <div className="footer">
        <div className="fleft">
          <a href='/'>  <img src="https://newdemo.rreda.in/wp-content/uploads/2023/04/cropped-Untitled-design-1.png" alt="" /></a>

        </div>
        <div className="fm">
                <div className="fmcon">
                  <a href='/about'> <p>About us </p> </a>
                  <a href='/'><p> Home</p> </a>
                  <a href='/contact'><p> Contact</p> </a>  
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
    
    </>
  )
}

export default Footer
