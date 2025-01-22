import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './GlobalStyles.css';
import HomePage from './pages/HomePage/HomePage.jsx';
import InfoPage from './pages/InfoPage/InfoPage.jsx';
import ContactPage from './pages/ContactPage/ContactPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about-us" element={<InfoPage />} />
            </Routes>
        </Router>
    </StrictMode>
);

// console.log("API Key:", process.env.REACT_APP_API_KEY);
// console.log("Base URL:", process.env.REACT_APP_API_BASE_URL);
