
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.scss';
import KisaanContext from "./Context"

// import from pages
import Home from './pages/Home';
// import {Routes,Route} from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import KisaanDashboard from './pages/KisaanDashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    const [kisaan, setKisaan] = useState({ username: localStorage.getItem("username"), token: localStorage.getItem("token") } || null);
    console.log(kisaan)
    return (
        <KisaanContext.Provider value={{kisaan: kisaan, setKisaan: setKisaan}}>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/admin" element={<AdminDashboard />} exact />
                <Route path="/dashboard" element={kisaan.username ? <KisaanDashboard /> : <Login />} exact />
                <Route path="/login" element={!kisaan.username ? <Login /> : <KisaanDashboard />} exact />
                <Route path="/register" element={!kisaan.username ? <Register />: <KisaanDashboard />} exact />
            </Routes>
        </KisaanContext.Provider>
    );
}

export default App;
