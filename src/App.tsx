import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Profile from './pages/Profile'
import Messages from './pages/Messages'
import General from './pages/General'
import Settings from './pages/Settings'
import { UserProvider } from './hooks/useUserData'

export default function App() {
  return (
    <UserProvider>
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
