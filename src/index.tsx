import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadUsuario from './Components/CadUsuario';



ReactDOM.render(
  <BrowserRouter>
 
    <Routes>
        <Route path="/" element={<CadUsuario />} />
    </Routes>
    
    <React.StrictMode></React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
