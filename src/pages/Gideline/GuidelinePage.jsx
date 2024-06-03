import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const GuidelinePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { userName } = location.state || {};

    const handleStartQuiz = () => {
        navigate('/quiz', { state: { userName } });
    };

    return (
        <div>
            <h1>Guidelines</h1>
            <p>Here are some guidelines before you start the quiz...</p>
            <button onClick={handleStartQuiz}>Start Quiz</button>
        </div>
    );
};

export default GuidelinePage;
