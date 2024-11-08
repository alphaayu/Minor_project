import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import './charts/ChartSetup';

const StockoutRate = () => {
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
        labels: ['Stockout Rate'],
        datasets: [
            {
                label: 'Stockout Rate',
                data: [10], // Example data
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="card">
            <h3>Stockout Rate</h3>
            <Bar ref={chartRef} data={data} />
        </div>
    );
};

export default StockoutRate;