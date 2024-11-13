import React from 'react'
import {Link,NavLink} from 'react-router-dom'
const data = [
  {
    title: 'Vaity Aqua',
    location: 'Virar West',
    image: 'https://example.com/vaity-aqua.jpg',
    discount: '32%',
    originalPrice: '800',
    discountedPrice: '550',
    trending: true
  },
  {
    title: 'Manthan Resort',
    location: 'Virar West',
    image: 'https://example.com/manthan-resort.jpg',
    discount: '22%',
    originalPrice: '700',
    discountedPrice: '550',
    trending: false
  },
  {
    title: 'Visava Resort',
    location: 'Virar West',
    image: 'https://example.com/visava-resort.jpg',
    discount: '32%',
    originalPrice: '800',
    discountedPrice: '550',
    trending: false
  },
  {
    title: 'Dream World',
    location: 'Virar West',
    image: 'https://example.com/dream-world.jpg',
    discount: '22%',
    originalPrice: '700',
    discountedPrice: '550',
    trending: false
  },
];


const Home = () => {


  
  return (
    <div className='homepage'>
    <div className="page1">
    <div className="container">
      {data.map((item, index) => (
        <div key={index} className="card">
          <div className="card-header">
            <h2 className="card-title">{item.title}</h2>
            <span className="card-location">{item.location}</span>
          </div>
          <div className="card-image">
            <img src={item.image} alt={item.title} />
            {item.trending && (
              <div className="card-badge">Trending</div>
            )}
          </div>
          <div className="card-content">
            <div className="card-discount">{item.discount}% Off</div>
            <div className="card-price">
              <span className="card- original-price">₹{item.originalPrice}</span>
              <span className="card-discounted-price">₹{item.discountedPrice}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    <div className="page2">
      <h1>  Popular Resorts</h1>
      <h3>  Creating Memories, One Adventure at a Time</h3>
    </div>

    </div>
  )
}

export default Home