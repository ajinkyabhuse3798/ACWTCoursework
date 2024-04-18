import React, { useState } from 'react';
import './services.css'; 

const serviceData = [
  { id: 1, name: 'Oil Change', description: 'Keep your engine running smoothly with regular oil changes.' },
  { id: 2, name: 'Tire Rotation', description: 'Extend the life of your tires with periodic rotation.' },
  { id: 3, name: 'Brake Service', description: 'Ensure your safety with our comprehensive brake services.' },
 
];

function Services() {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="service-list">
        {serviceData.map(service => (
          <div key={service.id} className="service-item">
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <button>Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
