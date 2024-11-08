// src/components/InventoryDaysSupply.jsx
import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import './charts/ChartSetup'; // Import the Chart setup
import './Card.css'; // Import the CSS file

const InventoryDaysSupply = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current;

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  const data = {
    labels: ['Days'],
    datasets: [
      {
        label: 'Inventory Days Supply',
        data: [45], // Example data
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="card">
      <h3>Inventory Days Supply</h3>
      <Bar ref={chartRef} data={data} />
    </div>
  );
};

export default InventoryDaysSupply;
