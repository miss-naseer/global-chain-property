// src/App.js (or main entry file)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Waitlist from './pages/Waitlist';
import SignUp from './pages/SignUp';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* Add a catch-all route if needed */}
      </Routes>
    </Router>
  );
}

export default App;