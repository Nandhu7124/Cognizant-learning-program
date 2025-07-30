import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ title, status, mentor }) {
  return (
    <div className={styles.box}>
      <h3 style={{ color: status === 'ongoing' ? 'green' : 'blue' }}>
        {status.toUpperCase()}
      </h3>
      <dl>
        <dt>Title</dt>
        <dd>{title}</dd>
        <dt>Mentor</dt>
        <dd>{mentor}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
