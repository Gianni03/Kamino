import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';
import { BrowserRouter as Router } from 'react-router-dom';
//Dependencias para la traduccion
import './i18n.js'
//Suspense es para que no cargue la pagina en blanco si tarda en cargar la traduccion
import { Suspense } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Suspense fallback={<div>Loading translation...</div>}>
        <Router>
          <App />
        </Router>
      </Suspense>
  </React.StrictMode>,
);
