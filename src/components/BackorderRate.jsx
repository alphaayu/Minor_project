// src/components/BackorderRate.jsx
import React from 'react';
import './Card.css';

const BackorderRate = () => {
  return (
    <div className="card">
      <h3>Backorder Rate</h3>
      <div className="value">1.11%</div>
      <div className="details">
        <div>1 Backorder</div>
        <div>90 Total Orders</div>
      </div>
    </div>
  );
};

export default BackorderRate;
