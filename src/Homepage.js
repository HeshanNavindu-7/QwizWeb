
import React from 'react';
import './Homepage.css';
import Logo from './Components/logo1/logos';

const HomePage = () => {
  return (
    <div className="home-page">
      <Logo />
      <div className="round">
        <div className='round_'>ROUND 01</div>
      </div>
      <div className="header">
        <h1 className="logo-text">QWhiz</h1>
        <h2 className="logo-text2">2024</h2>
      </div>
      <div className="robot">
        <img src="/robot.png" alt="BB8" />
      </div>
      <div className="input-container">
        <input type="text" placeholder="Enter User Name" />
      </div>
    </div>
  );
};

export default HomePage;
