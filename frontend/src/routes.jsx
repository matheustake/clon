import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/home';
import ConsultarDiario from './pages/consultarDiario';
import AdicionarDiario from './pages/adicionarDiario';

export default function Navegacao(){

      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}  />
            <Route path='/cadastrar' element={<AdicionarDiario />} />
        <Route path='/cadastrar/:id' element={<AdicionarDiario />} />
            <Route path='/consultar' element={<ConsultarDiario />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
}
