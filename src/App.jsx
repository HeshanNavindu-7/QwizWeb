import { useState } from 'react'
import Home from './pages/Home/Home'
import EnterNamePage from './pages/Firstpage/EnterNamePage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizPage from './pages/Quiz/QuizPage';
import GuidelinePage from './pages/Gideline/GuidelinePage';

function App() {
 

  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<EnterNamePage />} />
                <Route path="/guideline" element={<GuidelinePage />} />
                <Route path="/quiz" element={<QuizPage />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
