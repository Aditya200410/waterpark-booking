import React, { useEffect, useState } from 'react';

const Checkout = () => {

  const [bookingData, setBookingData] = useState({
    adultCount: 0,
    childCount: 0,
    total:0,
    pickup: false,
    selectedDate: null,
  });

  // Load data from localStorage when component mounts
  useEffect(() => {
    const adultCount = parseInt(localStorage.getItem('adultCount')) || 0;
    const childCount = parseInt(localStorage.getItem('childCount')) || 0;
    const total = parseInt(localStorage.getItem('total')) || 0;
    const pickup = localStorage.getItem('pickup') === 'true';
    const selectedDate = localStorage.getItem('selectedDate') || null;

    setBookingData({ adultCount, childCount, pickup, selectedDate,total });
  }, []);

  const { adultCount, childCount, pickup, selectedDate, total } = bookingData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    dob: '',
    coupon: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleApplyCoupon = () => {
    // Logic to apply coupon
    console.log('Coupon applied:', formData.coupon);
  };

  const handlePayment = () => {
    // Logic to handle payment
    console.log('Payment made');
  };

  return (
    <div className="cpage">
        <h1>Checkout Details</h1>
    <div className="checkout">
      
      <div className="personal-details">
        <h2>Personal Details</h2>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone No."
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Enter Location"
          value={formData.location}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dob"
          placeholder="mm/dd/yyyy"
          value={formData.dob}
          onChange={handleChange}
        />
      </div>
      <div className="apply-coupon">
        <h2>Apply Coupon</h2>
        <input
          type="text"
          name="coupon"
          placeholder="Enter Coupon"
          value={formData.coupon}
          onChange={handleChange}
        />
        <button className='cbutton' onClick={handleApplyCoupon}>APPLY</button>
      </div>
      <div className="booking-summary">
        <h2>Booking Summary</h2>
        <div className="summary-details">
        <div>
      <h1>Checkout Page</h1>
      <p>Adults: {adultCount}</p>
      <p>Children: {childCount}</p>
      <p>Pickup Service: {pickup ? 'Yes' : 'No'}</p>
      <p>Selected Date: {selectedDate ? `Sun Nov ${selectedDate} 2024` : 'Not Selected'}</p>
    </div>
        </div>
        <div className="terms">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">I acknowledge and agree to the terms and conditions.</label>
        </div>
        <button className='cbutton' onClick={handlePayment}>PAY : {total}</button>
      </div>
    </div>
    </div>
  );
};

export default Checkout;
