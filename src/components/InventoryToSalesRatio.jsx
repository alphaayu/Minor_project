// src/components/InventoryToSalesRatio.jsx
import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import './charts/ChartSetup';
import './Card.css'; // Import the CSS file

const InventoryToSalesRatio = () => {
    return (
        <div className="card">
            <h3>Inventory to Sales Ratio</h3>
            <ReactSpeedometer
                maxValue={100}
                value={18.33}
                needleColor="black"
                startColor="purple"
                segments={10}
                endColor="grey"
            />
        </div>
    );
};

export default InventoryToSalesRatio;
