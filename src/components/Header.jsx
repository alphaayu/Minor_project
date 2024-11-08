import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// import landingPage from './LandingPage';

const Header = () => {
  return (
    <header className="header">
      <nav>
      <Link className="brand" to="/">WALMART</Link>
      </nav>
      <nav>
     
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/inventory">Inventory</Link>
       
        <Link to="/order">Order</Link>
        <Link to="/tracking">Tracking</Link>
        <Link to="/forecasting">Forecasting</Link>
        {/* <Link to="/Signup">Signup</Link> */}
        {/* <Link to="/login">Login</Link> */}
      </nav>
    </header>
  );
};

export default Header;
