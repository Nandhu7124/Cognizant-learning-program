import React from 'react';

const GuestPage = () => {
  const flights = [
    { id: 1, from: "Chennai", to: "Delhi", time: "10:00 AM", price: "₹5000" },
    { id: 2, from: "Mumbai", to: "Bangalore", time: "2:00 PM", price: "₹4000" },
    { id: 3, from: "Kolkata", to: "Hyderabad", time: "6:00 PM", price: "₹4500" }
  ];

  return (
    <div>
      <h2> Flight Details (Guest View)</h2>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            <strong>{flight.from}</strong> ➡️ <strong>{flight.to}</strong> | 
            Time: {flight.time} | Price: {flight.price}
          </li>
        ))}
      </ul>
      <p><i>Please login to book tickets.</i></p>
    </div>
  );
};

export default GuestPage;
