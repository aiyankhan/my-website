// src/CarList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { newCars, usedCars } from './carsData'; 
import './App.css';

const CarList = () => {
  const [category, setCategory] = useState('new'); 

  
  const cars = category === 'new' ? newCars : usedCars;

  return (
    <div className="container">
      
      <div className="header-section">
        <h1>Welcome to MrKhan's Automotive Garage</h1>
        <p>
          Explore our wide range of premium cars. Whether you're looking for a
          sleek sedan, a powerful SUV, or a high-performance sports car, we have
          something for everyone. Browse through our collection below and find
          your dream car today!
        </p>
        <p>
          All our cars come with a certified warranty and excellent after-sales
          service. Feel free to contact us for more details or for booking a test drive or any inquiries.</p>
        <p>For Contact Details Scroll Dowm </p>
      </div>

      
      <div className="category-buttons">
        <button
          className={category === 'new' ? 'active' : ''}
          onClick={() => setCategory('new')}
        >
          New Cars
        </button>
        <button
          className={category === 'used' ? 'active' : ''}
          onClick={() => setCategory('used')}
        >
          Used Cars
        </button>
      </div>

      <h2>{category === 'new' ? 'New Cars' : 'Used Cars'}</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <Link to={`/car/${car.id}`} className="car-link">
              <img
                src={car.image}
                alt={`${car.make} ${car.model}`}
                className="car-list-image"
              />
              <div>
                <h2>
                  {car.make} {car.model} ({car.year})
                </h2>
                <p>Engine: {car.engine}</p>
                <p>Fuel Type: {car.fuelType}</p>
                <p>Transmission: {car.transmission}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

    
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Reach out to us for any inquiries or to schedule a test drive.</p>
        <div className="contact-details">
          <p><strong>Phone:</strong> +91 9886576538</p>
          <p><strong>Email:</strong> info@mrkhansautomotive.com</p>
          <p><strong>Address:</strong> 2242 Sawday Road, Lashkar Mohalla, Mysore</p>
        </div>
      </div>
    </div>
  );
};

export default CarList;