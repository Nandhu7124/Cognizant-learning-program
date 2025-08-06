import React from 'react';

const UserPage = () => {
  const flights = [
    { id: 1, from: "Chennai", to: "Delhi", time: "10:00 AM", price: "₹5000" },
    { id: 2, from: "Mumbai", to: "Bangalore", time: "2:00 PM", price: "₹4000" },
    { id: 3, from: "Kolkata", to: "Hyderabad", time: "6:00 PM", price: "₹4500" }
  ];

  const handleBooking = (flight) => {
    alert(`Ticket booked from ${flight.from} to ${flight.to} for ${flight.price}`);
  };

  return (
    <div>
      <h2> Book Your Flight (User View)</h2>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            <strong>{flight.from}</strong> ➡️ <strong>{flight.to}</strong> | 
            Time: {flight.time} | Price: {flight.price}{' '}
            <button onClick={() => handleBooking(flight)}>Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
