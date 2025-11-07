import React from 'react'

export default function Settings() {
  return (
    <div className="content-section">
      <div className="section-title"><span className="section-title-icon">⚙️</span>Configuración</div>
      <div className="settings-list">
        <div className="setting-item">
          <div className="setting-icon">🔔</div>
          <div className="setting-info">
            <div className="setting-title">Notificaciones</div>
            <div className="setting-desc">Gestiona tus notificaciones y sonidos</div>
          </div>
        </div>
        <div className="setting-item">
          <div className="setting-icon">💬</div>
          <div className="setting-info">
            <div className="setting-title">Chats</div>
            <div className="setting-desc">Tema, fondo de pantalla, historial</div>
          </div>
        </div>
      </div>
    </div>
  )
}
