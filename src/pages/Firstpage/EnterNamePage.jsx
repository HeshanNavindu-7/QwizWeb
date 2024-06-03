// src/EnterNamePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from '../../firebase';
import { db } from '../../firebase'; // Ensure db is imported

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
        <div>
            <h1>Enter Your Name</h1>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <button onClick={handleStartQuiz}>Next</button>
        </div>
    );
};


export default EnterNamePage;
