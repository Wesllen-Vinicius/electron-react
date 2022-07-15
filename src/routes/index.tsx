import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppHome from '../components/Home';
import AppLogin from '../components/Login';
import AppRegister from '../components/Register';

const Rotas: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLogin />} />
      <Route path="/register" element={<AppRegister />} />
      <Route path="/home" element={<AppHome />} />
    </Routes>
  );
};

export default Rotas;
