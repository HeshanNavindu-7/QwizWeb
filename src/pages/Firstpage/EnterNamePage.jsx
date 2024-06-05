// src/EnterNamePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from '../../firebase';
import { db } from '../../firebase'; // Ensure db is imported
import './first.css'
const EnterNamePage = () => {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    const handleStartQuiz = async () => {
        // Add user to Firestore
        await addDoc(collection(db, 'users'), { name: userName });
        // Navigate to the guideline page
        navigate('/guideline', { state: { userName } });
    };

    return (

               <div className="home-page">
       <div className="logo-container">
      <img src="/logo.png" alt="QWhiz Logo" className="logo-image" />
    </div>
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
        <input type="text" placeholder="Enter User Name" value={userName} onChange={(e) => setUserName(e.target.value)}/>
      </div>
      <button onClick={handleStartQuiz}>Next</button>
    </div>
           
          
    );
};


export default EnterNamePage;
