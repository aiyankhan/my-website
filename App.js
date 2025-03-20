// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarList from './CarList';
import CarDetail from './CarDetail';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<CarList />} />
          <Route path="/car/:id" element={<CarDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;