import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx"; // Include .jsx extension
import Dashboard from "./components/Dashboard.jsx"; // Include .jsx extension
import Order from "./components/Order.jsx"; // Include .jsx extension
import LandingPage from "./components/LandingPage.jsx"; // Include .jsx extension
import InventoryPage from "./components/InventoryPage.jsx"; // Include .jsx extension
import Tracking from "./components/Tracking.jsx";
import Overview from "./components/Overview.jsx"; // Import Overview component
import Reports from "./components/Reports2.jsx"; // Import Reports component
import "./App.css";
import Forecast from "./components/Forecast.jsx";
import Chatbot from "./components/Chatbot.jsx"
function App() {
  return (
    <Router>
      <Header />
      <div className="app-container">
      
        <main className="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/order" element={<Order />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/forecasting" element={<Forecast />} />
            <Route path="/overview" element={<Overview />} />{" "}
            
            <Route path="/reports" element={<Reports />} />{" "}
            <Route path="/chatbot" element={<Chatbot />} />{" "}
            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;