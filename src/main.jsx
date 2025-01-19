import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './GlobalStyles.css'
import Home from './pages/HomePage/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
console.log("API Key:", process.env.REACT_APP_API_KEY);
console.log("Base URL:", process.env.REACT_APP_API_BASE_URL);
