/**
 * @fileoverview Componente principal de la aplicación MyMoon
 * Maneja el enrutamiento y la estructura base de la aplicación
 */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Profile from './pages/Profile'
import Messages from './pages/Messages'
import General from './pages/General'
import Settings from './pages/Settings'
import { UserProvider } from './hooks/useUserData'
import PageTitle from './components/PageTitle'

/**
 * Componente principal de la aplicación
 * Proporciona:
 * - Estructura base de la aplicación (sidebar + contenido principal)
 * - Sistema de rutas para la navegación
 * - Contexto de usuario a través de UserProvider
 * @returns {JSX.Element} Estructura principal de la aplicación
 */
export default function App() {
  return (
    <UserProvider>
      <PageTitle />
      <div className="app-root">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/mensajes" element={<Messages />} />
            <Route path="/chats" element={<General />} />
            <Route path="/configuracion" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </UserProvider>
  )
}
