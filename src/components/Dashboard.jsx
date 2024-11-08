// src/components/Dashboard.jsx
import React from 'react';
import './Dashboard.css';
import StockoutRate from './StockoutRate';
import ReturnRate from './ReturnRate';
import BackorderRate from './BackorderRate';
import InventoryDaysSupply from './InventoryDaysSupply';
import InventoryCarryingCostRate from './InventoryCarryingCostRate';
import InventoryTurnoverRatio from './InventoryTurnoverRatio';
import InventoryToSalesRatio from './InventoryToSalesRatio';
import InventoryCarryingCost from './InventoryCarryingCost';
import OnTimeShipments from './OnTimeShipments';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="top-row">
                <div className="chart-container"><StockoutRate /></div>
                <div className="chart-container"><ReturnRate /></div>
                <div className="chart-container"><BackorderRate /></div>
                <div className="chart-container"><InventoryDaysSupply /></div>
            </div>
            <div className="middle-row">
                <div className="chart-container"><InventoryCarryingCostRate /></div>
                <div className="chart-container"><InventoryTurnoverRatio /></div>
                <div className="chart-container"><InventoryToSalesRatio /></div>
            </div>
            <div className="bottom-row">
                <div className="chart-container"><InventoryCarryingCost /></div>
                <div className="chart-container"><OnTimeShipments /></div>
            </div>
        </div>
    );
};

export default Dashboard;
