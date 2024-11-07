import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Roadmap from './Roadmap';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;