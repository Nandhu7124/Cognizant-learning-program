import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const rupeesValue = parseFloat(rupees);
    if (isNaN(rupeesValue)) {
      alert("Enter a valid amount in rupees");
      return;
    }

    const euroValue = (rupeesValue / 90).toFixed(2);
    setEuro(euroValue);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid gray', borderRadius: '10px' }}>
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount in ₹ Rupees:
          <input
            type="text"
            value={rupees}
            onChange={(e) => setRupees(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
        <button type="submit" style={{ marginLeft: '10px' }}>Convert</button>
      </form>

      {euro && (
        <p style={{ marginTop: '10px' }}>
          Euro Equivalent: <strong>€{euro}</strong>
        </p>
      )}
    </div>
  );
};

export default CurrencyConvertor;
