import React from 'react';
import { useState } from 'react';
import {Link,NavLink} from 'react-router-dom'
const resorts = [
  {
    name: "Vaity Aqua",
    location: "Virar West",
    price: "₹550",
    originalPrice: "₹800",
    discount: "32% Off",
    imageUrl: "https://myresortbooking.in/public/uploads/resorts/thumbnail/17282234839123treanding%20vaity%20aqua.png",
    trending: true,
  },
  {
    name: "Manthan Resort",
    location: "Virar West",
    price: "₹550",
    originalPrice: "₹700",
    discount: "22% Off",
    imageUrl: "https://myresortbooking.in/public/uploads/resorts/thumbnail/17273967924412manthan%20resort2.png",
    trending: false,
  },
  {
    name: "Visava Resort",
    location: "Virar West",
    price: "₹550",
    originalPrice: "₹800",
    discount: "32% Off",
    imageUrl: "https://myresortbooking.in/public/uploads/resorts/thumbnail/17274182628349Visava%20resort.png",
    trending: false,
  },
  {
    name: "Dream World",
    location: "Virar West",
    price: "₹550",
    originalPrice: "₹700",
    discount: "22% Off",
    imageUrl: "https://myresortbooking.in/public/uploads/resorts/thumbnail/17273969538750dream%20world%202.png",
    trending: false,
  },
  {
    name: "Vaity Aqua",
    location: "Virar West",
    price: "₹550",
    originalPrice: "₹800",
    discount: "32% Off",
    imageUrl: "https://myresortbooking.in/public/uploads/resorts/thumbnail/17282234839123treanding%20vaity%20aqua.png",
    trending: true,
  },
  {
    name: "Manthan Resort",
    location: "Virar West",
    price: "₹550",
    originalPrice: "₹700",
    discount: "22% Off",
    imageUrl: "https://myresortbooking.in/public/uploads/resorts/thumbnail/17273967924412manthan%20resort2.png",
    trending: false,
  },
  {
    name: "Visava Resort",
    location: "Virar West",
    price: "₹550",
    originalPrice: "₹800",
    discount: "32% Off",
    imageUrl: "https://myresortbooking.in/public/uploads/resorts/thumbnail/17274182628349Visava%20resort.png",
    trending: false,
  },
  {
    name: "Dream World",
    location: "Virar West",
    price: "₹550",
    originalPrice: "₹700",
    discount: "22% Off",
    imageUrl: "https://myresortbooking.in/public/uploads/resorts/thumbnail/17273969538750dream%20world%202.png",
    trending: false,
  },
];

const Card = ({ resort }) => (
  <div className="card">
    <div className="card-image">
      <img src={resort.imageUrl} alt={resort.name} />
      
    </div>
    <div className="card-content">
      <h3>{resort.name}</h3>
      <p>{resort.location}</p>
      <p className="discount">{resort.discount}</p>
      <p className="price">
        <span className="current-price">{resort.price}</span>
        <span className="original-price">{resort.originalPrice}</span>
      </p>
     <NavLink to="/resorts"> <button className="explore-button" >Explore</button></NavLink>
    </div>
  </div>
);

const Home = () => {
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

  return (
    <div className="homepage">
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

      <div className="homeinfo">
        <p>Popular Resorts</p>
        <p>Creating Memories, One Adventure at a Time</p>
      </div>
    <div className="card-container">
      {resorts.map((resort, index) => (
        <Card key={index} resort={resort} />
      ))}
    </div>
    </div>
  );
};

export default Home;
