import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Forecast.css'; // Import the CSS file

const Forecast = () => {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/forecast')
            .then(response => {
                console.log('Forecast data:', response.data);
                setForecast(response.data);
            })
            .catch(error => {
                console.error('Error fetching forecast:', error);
            });
    }, []);

    return (
        <div className="forecast-container">
            <h2 className="forecast-header">Demand Forecast</h2>
            {forecast.length > 0 ? (
                <ul className="forecast-list">
                    {forecast.map((item, index) => (
                        <li className="forecast-item" key={index}>
                            <span className="date">{item.ds}</span>
                            <span className="units">{item.yhat.toFixed(2)} units</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No forecast data available.</p>
            )}
        </div>
    );
};

export default Forecast;
