// src/components/InventoryCarryingCost.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import './charts/ChartSetup';
import './Card.css';

const InventoryCarryingCost = () => {
    const data = {
        labels: ['Warehouse 1', 'Warehouse 2', 'Warehouse 3', 'Warehouse 4', 'Warehouse 5'],
        datasets: [
            {
                label: 'Storage',
                backgroundColor: '#ff6384',
                data: [500000, 600000, 700000, 800000, 900000],
            },
            {
                label: 'Handling',
                backgroundColor: '#36a2eb',
                data: [300000, 400000, 500000, 600000, 700000],
            },
            {
                label: 'Administrative',
                backgroundColor: '#cc65fe',
                data: [200000, 300000, 400000, 500000, 600000],
            },
            {
                label: 'Damage',
                backgroundColor: '#ffce56',
                data: [100000, 200000, 300000, 400000, 500000],
            },
            {
                label: 'Loss',
                backgroundColor: '#36a2ab',
                data: [50000, 100000, 150000, 200000, 250000],
            },
        ],
    };

    const options = {
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    return (
        <div className="card">
            <h3>Inventory Carrying Cost</h3>
            <Bar data={data} options={options} />
        </div>
    );
};

export default InventoryCarryingCost;
