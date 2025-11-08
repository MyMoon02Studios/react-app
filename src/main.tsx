/**
 * @fileoverview Punto de entrada principal de la aplicación MyMoon
 * Configura React Router y renderiza la aplicación
 */
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/main.css'

// Renderiza la aplicación principal en el elemento root
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
