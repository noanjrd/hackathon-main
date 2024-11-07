import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Header from './layout/Header.jsx'
import Footer from './layout/Footer'
import Roadmap from './Roadmap.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
)