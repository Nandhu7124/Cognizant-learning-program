import React from 'react';
import CohortDetails from './Components/CohortDetails';

function App() {
  return (
    <div>
      <h1>Academy Cohort Dashboard</h1>
      <CohortDetails
        title="React Bootcamp July"
        status="ongoing"
        mentor="John Doe"
      />
      <CohortDetails
        title="Python for Data Science"
        status="completed"
        mentor="Jane Smith"
      />
    </div>
  );
}

export default App;
