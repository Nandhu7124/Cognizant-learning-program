import React, { useState } from 'react';

const CounterEvents = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
    sayHello(); 
  };

  const sayHello = () => {
    console.log("Hello from EventExamplesApp!");
    alert("Hello! Keep going 🚀");
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  const greetMessage = (msg) => {
    alert(`You clicked: ${msg}`);
  };

  const handleSyntheticEvent = () => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: '20px', border: '1px solid gray', borderRadius: '10px', marginBottom: '20px' }}>
      <h2>Counter Event Example</h2>
      <p>Current Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>{' '}
      <button onClick={handleDecrement}>Decrement</button>{' '}
      <button onClick={() => greetMessage("Welcome!")}>Say Welcome</button>{' '}
      <button onClick={handleSyntheticEvent}>Synthetic Event OnPress</button>
    </div>
  );
};

export default CounterEvents;
