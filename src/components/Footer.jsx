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

          <div className="fomoinfo">
            <NavLink to="/about" className="fomoinfo"> <img c src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAY1BMVEX///8AAACWlpYxMTFKSkri4uL8/PwpKSn39/e1tbWSkpLs7OxQUFDz8/PIyMjn5+fa2trQ0NA/Pz+np6e7u7uEhIRkZGQ6OjoTExOurq5eXl6dnZ1XV1d5eXlzc3MaGhohISEoVUfqAAAD3UlEQVR4nO2ZWZuqMAyG7QjIvoiKwLj8/195gEFlyTaDj5yLvNdt+dqkSRM2G0VRFEVRFEVRFEVRFOV/xQlir669OHDWVvIg8C7mycUL1tbTEPmFGVH4a8ty8rOZcc5XtWJwmktqOa14WPYW1mTMLl1NE2C6JyupStBz6s4qWUOT+01pMubbXUFUTWsyxv+8pvTOibp93q0unKYmun9aU8JrMubTvs56VMvXZzU5oURU+Nl0k+4kou6fdfWDRJMxh/d90U5TmxmSy0TVy7/UEMXHPqHt/IzwiKNM1BFfwcm+ehc4H+OI0uSN/PcUowMFUYoWFY8ePaGHDkz300VP2OEKRV2R6cnsHVYgdyIGbhQ2dpn57NnuG3cBzeLB68Im9GWi4Jycwe8wwIQZsu4OtCCygyklNBd9h832H6BJ34LeRbFMFHTMLpoMztOXPeG5ULAJAK+Ys4fqByLETe4FYmZ4Ay1XiSjo8gU3YsL4ZMnblANri+wHWY/MBaNduOTaeyjgCuxXANNwj+oY+i+zb+gCCu4fdPeYx+EwgzOxEFrdYYqZppyBcifzvBhGW6T6hoY+STlRYDJgou5pMLSSD31R0pPAwMltf3C6nClgUfSukaqPERUOPP1PJ0W6IvZokZ8UNxQt4NCgA4U2bh8tJ/lQ2D1aMjC5bjN0AuOIw+0zF5UoStx6JmtbE60Nm/7S8PkSkSO35BM6KUfBfV+SdXFUYF/pGKVZMr9yNckmKK9V2FBdS7avSJbW4xtF2e8sKSmdqEFSEJPtv0mdSBzVm/tMRHSbhh48UW7f3OklvGqW+FEDgsZLDhdrx2BdDuD7PsUMCBT5iAeCZWJO9mAHpwwGUWT/YOMIims3KAwG9LUeUUDGz6AqBYnQ2ez5bIGaRL2pByGkKrWmw85oi8CpR2cQwhnsV5qaVcBF8tEqRU1Fk+DwHHxCeiHCOvQF3LyIXi2O8MBecMeOPS9Gc4Ws4htioZ9M2i/Zb+hBCmvjIXhHiSGwUcZWFDaBhoyfYy7+pdGRRnm436Lsq3JwwlTqQri9ZjteZRFf+q6fumKqku4oXqHh95qMeU7OWIc892GdeQx23ON3iMokje4uiDJvwYeq/lzpAh+ht34gar63ydZlKpkH1+WihHekctEO3pT+r/ACUfzPuJ5M2r18JMwFoiS+2+FvZqkR47hUlLCj3KSADRsOHlRLRTEV74ub/IpbzjJRjtgmRkWpKBWlolSUilJRKkpFqSgVpaJUlIr6Yf9T5/5FVDfRkXdwN/mXDL/vPPvC8cOpPzMP0qnoD2hFURRFURRFURRFURRlCf8AqCtCWxlXkKYAAAAASUVORK5CYII=" alt="" />
           About</NavLink>
          </div>

        </div>
    
    </>
  )
}

export default Footer
