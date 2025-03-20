
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { newCars, usedCars } from './carsData'; // Update the import
import './App.css';

const CarDetail = () => {
  const { id } = useParams();


  const car = newCars.find((car) => car.id === parseInt(id)) || usedCars.find((car) => car.id === parseInt(id));

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="car-details">
      <h1>
        {car.make} {car.model} ({car.year})
      </h1>
      <img
        src={car.image}
        alt={`${car.make} ${car.model}`}
        className="car-detail-image"
      />
      <p>Color: {car.color}</p>
      <p>Price: ${car.price}</p>
      <p>Engine: {car.engine}</p>
      <p>Fuel Type: {car.fuelType}</p>
      <p>Transmission: {car.transmission}</p>

      {/* Additional details for used cars */}
      {car.mileage && <p>Mileage: {car.mileage}</p>}
      {car.condition && <p>Condition: {car.condition}</p>}

      <h3>Features:</h3>
      <ul>
        {car.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Link to="/" className="back-link">Back to Car List</Link>
    </div>
  );
};

export default CarDetail;
