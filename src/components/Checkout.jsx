import React, { useState } from 'react';

const Checkout = () => {
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
          <p>TICKETS</p>
          <p>Thu Nov 14 2024</p>
          <p>Adult (1) ₹ 550</p>
          <p>Child (0) ₹ 0</p>
          <p>Subtotal: ₹ 550</p>
          <p>PAYMENT DETAILS</p>
          <p>Subtotal ₹ 550</p>
          <p>Conv. Fee ₹ 0</p>
          <p>Pickup Drop ₹ 0</p>
          <p>Total Amt.: ₹ 550</p>
          <p>Down Payment ₹ 50</p>
          <p>Remaining Payment ₹ 500</p>
        </div>
        <div className="terms">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">I acknowledge and agree to the terms and conditions.</label>
        </div>
        <button className='cbutton' onClick={handlePayment}>PAY ₹50</button>
      </div>
    </div>
    </div>
  );
};

export default Checkout;
