import React from 'react';
const officeList = [
  {
    id: 1,
    name: 'Corporate Heights',
    rent: 45000,
    address: '123 MG Road, Bengaluru',
    image: 'https://via.placeholder.com/300x150?text=Office+1',
  },
  {
    id: 2,
    name: 'Eco Towers',
    rent: 65000,
    address: '456 Anna Salai, Chennai',
    image: 'https://via.placeholder.com/300x150?text=Office+2',
  },
  {
    id: 3,
    name: 'Tech Park Hub',
    rent: 70000,
    address: '789 HITEC City, Hyderabad',
    image: 'https://via.placeholder.com/300x150?text=Office+3',
  },
  {
    id: 4,
    name: 'Startup Studio',
    rent: 55000,
    address: '100 OMR, Chennai',
    image: 'https://via.placeholder.com/300x150?text=Office+4',
  },
];

const OfficeList = () => {
  const heading = <h1>Office Space Rental Listings</h1>;

  return (
    <div style={{ padding: '20px' }}>
      {heading}

      {officeList.map((office) => (
        <div
          key={office.id}
          style={{
            border: '1px solid gray',
            borderRadius: '10px',
            marginBottom: '15px',
            padding: '15px',
            maxWidth: '400px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <img
            src={office.image}
            alt={office.name}
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h2>{office.name}</h2>
          <p><strong>Address:</strong> {office.address}</p>
          <p>
            <strong>Rent:</strong>{' '}
            <span style={{ color: office.rent > 60000 ? 'green' : 'red' }}>
              ₹{office.rent.toLocaleString()}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default OfficeList;
