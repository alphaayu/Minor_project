// src/components/OnTimeShipments.jsx
import React from 'react';
import './charts/ChartSetup';


const OnTimeShipments = () => {
    return (
        <div className="card">
            <h3>On-Time Shipments</h3>
            <div className="value">88.82%</div>
            <div className="details">
                <div>Within Time Limit: 8,608</div>
                <div>Out of Time Limit: 1,084</div>
            </div>
        </div>
    );
};

export default OnTimeShipments;
