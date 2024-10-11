import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdicionarDiario from './pages/adicionarDiario';
import ConsultarDiario from './pages/consultarDiario';
import Login from './pages/loginDiario';

export default function Navegacao(){

      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AdicionarDiario />}  />
            <Route path='/cadastrar/:id' element={<ConsultarDiario />} />
            <Route path='/consultar' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
}
