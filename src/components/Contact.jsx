import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      
      <div className="contact-content">
        {/* Left Section */}
        <div className="contact-info">
          <div className="info-item">
            <h4>Address</h4>
            <p>Virar West</p>
          </div>
          <div className="info-item">
            <h4>Contact No.</h4>
            <p>7721819073</p>
          </div>
          <div className="info-item">
            <h4>Email</h4>
            <p>support@myresortbooking.in</p>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.222711034868!2d72.78578621490264!3d19.45539618687637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ae1d9219b9cf%3A0xc4e4db3bb688472d!2sVaity%20Aqua%20(Resort%20in%20Virar%20West)!5e0!3m2!1sen!2sin!4v1609439200013!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        {/* Right Section */}
        <div className="contact-form">
          <h3>Get in Touch</h3>
          <form>
            <div className="form-group">
              <label>Name*</label>
              <input type="text" name="name" required />
            </div>
            <div className="form-group">
              <label>Email*</label>
              <input type="email" name="email" required />
            </div>
            <div className="form-group">
              <label>Mobile No.*</label>
              <input type="text" name="mobile" required />
            </div>
            <div className="form-group">
              <label>Message*</label>
              <textarea name="message" required></textarea>
            </div>
            <button type="submit" className="submit-button">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
