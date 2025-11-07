import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUser } from '../hooks/useUserData'
import '../styles/sidebar.css'

export default function Sidebar() {
  const { user, openFilePicker } = useUser()

  const initials = user.name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase()

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="app-title">MyMoon</div>
        <div className="app-subtitle">{user.name}</div>
      </div>

      <div className="sidebar-avatar" onClick={openFilePicker} title="Cambiar foto">
        {user.avatar ? (
          <img src={user.avatar} alt="avatar" className="sidebar-avatar-img" />
        ) : (
          <div className="avatar-placeholder">{initials || 'TU'}</div>
        )}
      </div>

      <nav className="nav-container">
        <NavLink to="/" end className={({isActive})=> 'nav-btn' + (isActive? ' active' : '')}>
          <span className="nav-icon">👤</span><span className="nav-text">Mi Perfil</span>
          <div className="tooltip">Ver y editar tu perfil</div>
        </NavLink>

        <NavLink to="/mensajes" className={({isActive})=> 'nav-btn' + (isActive? ' active' : '')}>
          <span className="nav-icon">✉️</span><span className="nav-text">Mensajes</span>
          <div className="tooltip">Mensajes del sistema y notificaciones</div>
        </NavLink>

        <NavLink to="/chats" className={({isActive})=> 'nav-btn' + (isActive? ' active' : '')}>
          <span className="nav-icon">💬</span><span className="nav-text">Chat General</span>
          <div className="tooltip">Conversaciones con tus contactos</div>
        </NavLink>

        <NavLink to="/configuracion" className={({isActive})=> 'nav-btn' + (isActive? ' active' : '')}>
          <span className="nav-icon">⚙️</span><span className="nav-text">Configuración</span>
          <div className="tooltip">Ajustes y preferencias de la app</div>
        </NavLink>
      </nav>

      <div className="sidebar-footer">MyMoon v1.0 • 2025</div>
    </aside>
  )
}
