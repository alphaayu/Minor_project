// src/components/ReturnRate.jsx
import React from 'react';
import './charts/ChartSetup';


const ReturnRate = () => {
    return (
        <div className="card">
            <h3>Return Rate</h3>
            <div className="value">2.17%</div>
            <div className="details">
                <div>248 Returned</div>
                <div>11,400 Ordered</div>
            </div>
        </div>
    );
};

export default ReturnRate;
