
import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";

const InventoryTurnoverRatio = () => {
    return (
        <div className="card chart-container">
            <h3>Inventory Turnover Ratio</h3>
            <div className="speedometer">
                <ReactSpeedometer
                    maxValue={100}
                    value={18.33} // Example value, you can replace it with your dynamic data
                    needleColor="black"
                    startColor="green"
                    segments={10}
                    endColor="red"
                    needleTransitionDuration={4000}
                    needleTransition="easeElastic"
                    ringWidth={50}
                    textColor="#000000"
                />
            </div>
        </div>
    );
};

export default InventoryTurnoverRatio;







