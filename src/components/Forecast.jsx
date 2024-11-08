import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Forecast = () => {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        // Fetch forecast data from the FastAPI endpoint
        axios.get('http://localhost:8000/forecast')
            .then(response => {
                console.log('Forecast data:', response.data);  // Log the response to check if it's coming through
                setForecast(response.data);
            })
            .catch(error => {
                console.error('Error fetching forecast:', error);
            });
    }, []);

    return (
        <div>
            <h2>Demand Forecast</h2>
            {forecast.length > 0 ? (
                <ul>
                    {forecast.map((item, index) => (
                        <li key={index}>{item.ds}: {item.yhat.toFixed(2)} units</li>
                    ))}
                </ul>
            ) : (
                <p>No forecast data available.</p>
            )}
        </div>
    );
};

export default Forecast;
