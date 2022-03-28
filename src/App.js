
import React from 'react';
import {Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.scss';


// import from pages
import Home from './pages/Home';
// import {Routes,Route} from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import KisaanDashboard from './pages/KisaanDashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/owner" element={<AdminDashboard />} />
        <Route path="/client" element={<KisaanDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
