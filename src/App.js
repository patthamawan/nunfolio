
import './App.css';
import './style.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './pages/NavBar'
import HomePage from './pages/HomePage.js';

function Home() {
  return <div>HomePage Component</div>;
}

function App() {
  return (
<Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
