import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


const Resorts = () => {

  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  
  const [pickup, setPickup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const adultPrice = 550;
  const childPrice = 400;

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
  const total = subtotal + (pickup ? 50 : 0);


   // Update localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('adultCount', adultCount);
    localStorage.setItem('childCount', childCount);
    localStorage.setItem('total', total);
    localStorage.setItem('pickup', pickup);
    if (selectedDate) localStorage.setItem('selectedDate', selectedDate);
  }, [adultCount, childCount, pickup, selectedDate,total]);

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
    'Biggest Wave Pool',
    '4 Big Swimming Pool',
    '12+ Water Slides',
    'Jungle theme',
    'Tornado Slide',
    '2 Rain Dance',
    'D.J. Music',
    'Tube Slide',
  ];

  const map = [
    'Biggest Wave Pool',
    '4 Big Swimming Pool',
    '12+ Water Slides',
    'Jungle theme',
    'Tornado Slide',
    '2 Rain Dance',
    'D.J. Music',
    'Tube Slide',
  ];
  const cost = [
    'Biggest Wave Pool',
    '4 Big Swimming Pool',
    '12+ Water Slides',
    'Jungle theme',
    'Tornado Slide',
    '2 Rain Dance',
    'D.J. Music',
    'Tube Slide',
  ];

  const FAQ = [
    'Biggest Wave Pool',
    '4 Big Swimming Pool',
    '12+ Water Slides',
    'Jungle theme',
    'Tornado Slide',
    '2 Rain Dance',
    'D.J. Music',
    'Tube Slide',
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
          {attractions.map((attraction, index) => (
            <div key={index} className="attraction-item">
              <span className="checkmark">✔️</span> {attraction}
            </div>
          ))}
        </div>
      )}
      {activeTab === 'map' && (
        <div className="attractions-list">
          {attractions.map((attraction, index) => (
            <div key={index} className="attraction-item">
              <span className="checkmark">✔️</span> {attraction}
            </div>
          ))}
        </div>
      )}
      {activeTab === 'FAQ' && (
        <div className="attractions-list">
          {attractions.map((attraction, index) => (
            <div key={index} className="attraction-item">
              <span className="checkmark">✔️</span> {attraction}
            </div>
          ))}
        </div>
      )}
        {activeTab === 'cost' && (
        <div className="attractions-list">
          {attractions.map((attraction, index) => (
            <div key={index} className="attraction-item">
              <span className="checkmark">✔️</span> {attraction}
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
      </div>

      <div className="pickup-option">
        <input
          type="checkbox"
          checked={pickup}
          onChange={() => setPickup(!pickup)}
        />
        <label>Pickup & Drop Service</label>
      </div>

     <NavLink to='/checkout'> <button className="checkout-button">PROCEED TO CHECKOUT</button></NavLink>
    </div>
    </>
  );
};

export default Resorts;
