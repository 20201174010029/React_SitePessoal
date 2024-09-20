import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import formação from './components/pages/formação'; 
import sobremim from './components/pages/sobremim'; 
import Projetosrealizados from './components/pages/Projetosrealizados';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes> 
          <Route path='/' element={<Home/>} /> 
          <Route path='/sobremim' element={<sobremim/>} /> 
          <Route path='/formação' element={<formação/>} /> 
          <Route path='/Projetosrealizados' element={<Projetosrealizados/>} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
