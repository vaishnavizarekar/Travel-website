import React from 'react';

const destinations = [
  { id: 1, name: 'Paris', description: 'The City of Light', image: 'paris.jpg' },
  { id: 2, name: 'Tokyo', description: 'The Capital of Japan', image: 'tokyo.jpg' },
  { id: 3, name: 'New York City', description: 'The Big Apple', image: 'nyc.jpg' },
];

const DestinationsSection = () => (
  <section id="destinations" className="destinations">
    <h2>Popular Destinations</h2>
    <div className="destination-list">
      {destinations.map(destination => (
        <div key={destination.id} className="destination">
          <img src={require(`./images/${destination.image}`).default} alt={destination.name} />
          <h3>{destination.name}</h3>
          <p>{destination.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default DestinationsSection;
