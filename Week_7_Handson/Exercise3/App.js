import React from 'react';
import CounterEvents from './components/CounterEvents';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Arial', padding: '30px' }}>
      <h1>Event Examples App</h1>
      <CounterEvents />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
