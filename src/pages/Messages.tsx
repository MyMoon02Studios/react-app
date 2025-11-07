import React from 'react'

const sample = [
  { id: 1, title: 'Anuncios del Sistema', time: '10:30 AM', preview: 'Nueva actualización disponible para mejorar tu experiencia' },
  { id: 2, title: 'Promociones', time: '09:15 AM', preview: 'Descuento especial del 20% en todos los planes premium' },
  { id: 3, title: 'Seguridad', time: 'Ayer', preview: 'Verificación de seguridad completada exitosamente' }
]

export default function Messages() {
  return (
    <div className="content-section">
      <div className="section-title"><span className="section-title-icon">✉️</span>Mensajes</div>
      <div className="chat-list">
        {sample.map(m=>(
          <div className="chat-item" key={m.id}>
            <div className="chat-avatar">📢</div>
            <div className="chat-info">
              <div className="chat-name">{m.title} <span className="chat-time">{m.time}</span></div>
              <div className="chat-preview">{m.preview}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
