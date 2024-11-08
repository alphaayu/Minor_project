import React from 'react';
import Sidebar from './Sidebar.js';
import './LandingPage.css'; // External CSS file for animations

const LandingPage = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
      <Sidebar />
      
      <div style={{ position: 'relative', flex: 1 }}>
        {/* Image Wrapper */}
        <img 
          src="/background2.jpg" 
          alt="Supply Chain Dashboard" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover'
          }} 
        />
        
        {/* Text Overlay with Animation */}
        <div className="text-overlay">
          <h1>Supply Chain Dashboard</h1>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
