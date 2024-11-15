import React, { useEffect, useState } from 'react';

import { Stack, Button, Typography, TextField, } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';


const Resorts = () => {
  const [fname, setFname] = useState("");
  const [pnum, setPnum] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adult, setadult] = useState("");
  const [child, setchild] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {

      e.preventDefault();

      console.log(fname, pnum,  email, password,adult,child,date);
      fetch("https://iic-backend-r3jg.onrender.com/register", {
          method: "POST",
          crossDomain: true,
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
              fname,
              email,
              pnum,
              adult,
              child,
              date,
              password,

          }),
      })
          .then((res) => res.json())
          .then((data) => {
              console.log(data, "userRegister");
              if (data.status === "ok") {
                  alert("Registration Successful");
                  setTimeout(() => {
                    navigate('/sign-in');
                  }, 500);
              } else {
                  alert("Something went wrong");
              }
          });
  };

  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  
  const [pickup, setPickup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const adultPrice = 550;
  const childPrice = 400;
  const dadultPrice = 100;
  const dchildPrice = 100;

  // Load data from localStorage when component mounts
  useEffect(() => {
    const savedAdultCount = localStorage.getItem('adultCount');
    const savedChildCount = localStorage.getItem('childCount');
    
    const savedPickup = localStorage.getItem('pickup') === 'true';
    const savedSelectedDate = localStorage.getItem('selectedDate');

    if (savedAdultCount) setAdultCount(parseInt(savedAdultCount));
    if (savedChildCount) setChildCount(parseInt(savedChildCount));
 
    if (savedSelectedDate) setSelectedDate(parseInt(savedSelectedDate));
    setPickup(savedPickup);
  }, []);

 

  const handleChildChange = (increment) => {
    setChildCount((prev) => Math.max(0, prev + increment));
  };

  const handleDateSelect = (day) => {
    setSelectedDate(day);
  };

  const subtotal = adultCount * adultPrice + childCount * childPrice;
  const total = subtotal ;
  const dtotal = adultCount * dadultPrice + childCount * dchildPrice;


   // Update localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('adultCount', adultCount);
    localStorage.setItem('childCount', childCount);
    localStorage.setItem('total', dtotal);
    localStorage.setItem('pickup', pickup);
    if (selectedDate) localStorage.setItem('selectedDate', selectedDate);
  }, [adultCount, childCount, pickup, selectedDate,dtotal]);

  const handleAdultChange = (increment) => {
    setAdultCount((prev) => Math.max(0, prev + increment));
  };

  const images = [
    'https://myresortbooking.in/public/uploads/banners/17274193709185mrb2.png',
    'https://myresortbooking.in/public/uploads/banners/17274193709185mrb2.png',
    'https://myresortbooking.in/public/uploads/banners/17274193709185mrb2.png',
    'https://myresortbooking.in/public/uploads/banners/17274193709185mrb2.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const [activeTab, setActiveTab] = useState('Attractions');

  const attractions = [
    'Biggest Wave Pool',
    '4 Big Swimming Pool',
    '12+ Water Slides',
    'Jungle theme',
    'Tornado Slide',
    '2 Rain Dance',
    'D.J. Music',
    'Tube Slide',
  ];
const tripinfo = [
'9 Am to 5 Pm',
'Virar, Maharashtra',
'Meals',
'Veg / Non-veg',
'Parking',
'Available Rooms',
'Free Cancellation(One Day Prior)'
  ];

  const map = [
    
  ];
  const cost = [
   ' Cost Includes',
' Morning Breakfast',
 'Lunch Veg/Non-Veg',
 'Evening Hie Tea'
  ];

  const FAQ = [
  ];




  return (
    <>
    <div className="carousel-card">
    <button className="carousel-button left" onClick={goToPrevious}>
      &#10094;
    </button>

    <div className="carousel-image">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
    </div>

    <button className="carousel-button right" onClick={goToNext}>
      &#10095;
    </button>

    <div className="carousel-indicators">
      {images.map((_, index) => (
        <span
          key={index}
          className={`indicator ${index === currentIndex ? 'active' : ''}`}
          onClick={() => setCurrentIndex(index)}
        ></span>
      ))}
    </div>
  </div>

    <div className="container">
      <h1 className="resort-title">Manthan Resort</h1>
      <p className="resort-location">📍 Virar West</p>
      <p className="resort-description">
        Welcome to Manthan Waterpark and Beach Resort, your ultimate destination for sun-soaked adventures and serene escapes in Navapur, Virar West. Nestled along the pristine shores, our resort offers an idyllic retreat for families, couples, and thrill-seekers alike.
      </p>

      <div className="tabs">
        {['Attractions','tripinfo','cost','FAQ','map'].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Attractions' && (
        <div className="attractions-list">
          {attractions.map((attraction, index) => (
            <div key={index} className="attraction-item">
              <span className="checkmark">✔️</span> {attraction}
            </div>
          ))}
        </div>
      )}
{activeTab === 'tripinfo' && (
        <div className="attractions-list">
          {tripinfo.map((tripinfo, index) => (
            <div key={index} className="attraction-item">
              <span className="checkmark">✔️</span> {tripinfo}
            </div>
          ))}
        </div>
      )}
      {activeTab === 'map' && (
        <div className="attractions-list">
          {map.map((map, index) => (
            <div key={index} className="attraction-item">
              <span className="checkmark">✔️</span> {map}
            </div>
          ))}
        </div>
      )}
      {activeTab === 'FAQ' && (
        <div className="attractions-list">
          {FAQ.map((FAQ, index) => (
            <div key={index} className="attraction-item">
              <span className="checkmark">✔️</span> {FAQ}
            </div>
          ))}
        </div>
      )}
        {activeTab === 'cost' && (
        <div className="attractions-list">
          {cost.map((cost, index) => (
            <div key={index} className="attraction-item">
              <span className="checkmark">✔️</span> {cost}
            </div>
          ))}
        </div>
      )}

    </div>

    <div className="booking-container">
      <h2>November</h2>
      <div className="calendar">
        {[...Array(30)].map((_, i) => {
          const day = i + 1;
          const isSelected = selectedDate === day;
          return (
            <div
              key={i}
              className={`calendar-day ${isSelected ? 'selected' : ''}`}
              onClick={() => handleDateSelect(day)}
            >
              {day}
            </div>
          );
        })}
      </div>

      <div className="ticket-selector">
          <div className="ticket">
            <span>Adult (Above 8 yr)</span>
            <span>₹{adultPrice}</span>
            <button onClick={() => handleAdultChange(-1)}>-</button>
            <span>{adultCount}</span>
            <button onClick={() => handleAdultChange(1)}>+</button>
          </div>
          <div className="ticket">
            <span>Children (3 to 8 yr)</span>
            <span>₹{childPrice}</span>
            <button onClick={() => handleChildChange(-1)}>-</button>
            <span>{childCount}</span>
            <button onClick={() => handleChildChange(1)}>+</button>
          </div>
        </div>

        <div className="booking-summary">
          <h3>Booking Summary</h3>
          <div className="summary-item">
            <span>Selected Date:</span>
            <span>{selectedDate ? `Sun Nov ${selectedDate} 2024` : 'Not Selected'}</span>
          </div>
          <div className="summary-item total">
            <strong>Total Amt.:</strong>
            <strong>₹{total}</strong>
          </div>
        </div>

        <div className="pickup-option">
          <input
            type="checkbox"
            checked={pickup}
            onChange={() => setPickup(!pickup)}
          />
          <label>Pickup & Drop Service</label>
        </div>

      <div className="booking-summary">
        <h3>Booking Summary</h3>
        <div className="summary-item">
          <span>Selected Date:</span>
          <span>{selectedDate ? `Sun Nov ${selectedDate} 2024` : 'Not Selected'}</span>
        </div>
        <div className="summary-item">
          <span>Adult ({adultCount})</span>
          <span>₹{adultCount * adultPrice}</span>
        </div>
        <div className="summary-item">
          <span>Child ({childCount})</span>
          <span>₹{childCount * childPrice}</span>
        </div>
        <div className="summary-item">
          <strong>Subtotal:</strong>
          <strong>₹{subtotal}</strong>
        </div>
        <div className="summary-item">
          <span>Pickup & Drop</span>
          <span>₹{pickup ? 50 : 0}</span>
        </div>
        <div className="summary-item total">
          <strong>Total Amt.:</strong>
          <strong>₹{total}</strong>
        </div>
        <div className="summary-item total">
          <strong>Total downpayment:</strong>
          <strong>₹{dtotal}</strong>
        </div>
      </div>

      <div className="pickup-option">
        <input
          type="checkbox"
          checked={pickup}
          onChange={() => setPickup(!pickup)}
        />
        <label>Pickup & Drop Service</label>
      </div>



      <div >
      <Stack sx={{ width: '100%', display: 'flex', justifyContent: "center", alignItems: 'center', height: "100dvh", background: "white", height: "fit-content",marginTop:"20px",marginBottom:"50px" }}>
    <Stack sx={{ display: "flex", flexDirection: "row", width: { xs: '100%', sm: '85%', md: '80%' }, height: { xs: "fit-content", sm: "90dvh", md: '90dvh' }, borderRadius: '8px', border: { xs: "2px solid white", sm: "none" },zIndex:"0" }}>
        <form onSubmit={handleSubmit} style={{ width: '100%', padding: '1.5rem', height: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: '8px', zIndex: '200' }}>
            <Typography variant="h3" sx={{ color: 'black', fontWeight: 'bolder', fontFamily: 'Poppins, sans-serif', borderBottom: '4px solid black', paddingBottom: '0.25rem', borderRadius: '2px' }}>Sign Up</Typography>
            <Stack sx={{ width: '100%' }}>
                <TextField
                    required
                    label="Full Name"
                    name="full name"
                    type="text"
                    
                    placeholder="Enter full name"
                    onChange={(e) => setFname(e.target.value)}
                    InputLabelProps={{ sx: { color: "black", fontSize: { xs: "1.5rem", md: "16px" } } }}
                    sx={{
                        '& .MuiInputBase-input': { color: 'black', fontSize: { xs: "1.5rem", md: "16px" } },
                        '& .MuiInput-underline:before': { borderBottomColor: 'black' },
                        '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#00CED1' },
                    }}
                    variant="standard"
                />
            </Stack>

            <Stack sx={{ width: '100%' }}>
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    InputLabelProps={{ sx: { color: "black", fontSize: { xs: "1.5rem", md: "16px" } } }}
                    sx={{
                        '& .MuiInputBase-input': { color: 'black', fontSize: { xs: "1.5rem", md: "16px" } },
                        '& .MuiInput-underline:before': { borderBottomColor: 'black' },
                        '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#00CED1' },
                        '& .MuiInput-underline:after': { borderBottomColor: 'black' },
                    }}
                    variant="standard"
                />
            </Stack>

            <Stack gap={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Phone Number"
                    name="Phno"
                    type="number"
                    placeholder="Enter Phone number"
                    onChange={(e) => setPnum(e.target.value)}
                    InputLabelProps={{ sx: { color: "black", fontSize: { xs: "1.5rem", md: "16px" } } }}
                    sx={{
                        '& .MuiInputBase-input': { color: 'black', fontSize: { xs: "1.5rem", md: "16px" } },
                        '& .MuiInput-underline:before': { borderBottomColor: 'black' },
                        '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#00CED1' },
                        '& .MuiInput-underline:after': { borderBottomColor: 'black' },
                    }}
                    variant="standard"
                />
            </Stack>

            <Stack sx={{ width: '100%' }}>
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    InputLabelProps={{ sx: { color: "black", fontSize: { xs: "1.5rem", md: "16px" } } }}
                    sx={{
                        '& .MuiInputBase-input': { color: 'black', fontSize: { xs: "1.5rem", md: "16px" } },
                        '& .MuiInput-underline:before': { borderBottomColor: 'black' },
                        '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#00CED1' },
                        '& .MuiInput-underline:after': { borderBottomColor: 'black' },
                    }}
                    variant="standard"
                />
            </Stack>
            <Stack sx={{ width: '100%' }}>
                <Button
                    variant="contained"
                    sx={{
                        background: "#00CED1",
                        color: 'black',
                        padding: '8px 0px',
                        borderRadius: '.75rem',
                        fontSize: { xs: "1.15rem", md: "16px" },
                        '&:hover': {
                            transform: "scale(1.001)",
                            background: 'white',
                            color: "#00ced1",
                            fontWeight: "500",
                            border: ".125rem solid #00ced1",
                        },
                    }}
                    type="submit"
                >
                    Sign Up and Book
                </Button>
                
            </Stack>
            <Typography sx={{ color: 'black', textAlign: 'center' }}>
                Returning Customer? <NavLink to="/sign-in" style={{ color: '#00CED1' }}>Sign in</NavLink>
            </Typography>
        </form>
    </Stack>
</Stack>

      
        </div>
     
    </div>


    </>
  );
};

export default Resorts;