import React, { useState } from 'react'
import { useUser } from '../hooks/useUserData'

export default function Profile() {
  const { user, setName, openFilePicker, setAvatar } = useUser()
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState(user.name)
  const [showPersonalInfo, setShowPersonalInfo] = useState(false)
  
  // Estados para información personal adicional
  const [email, setEmail] = useState('usuario@ejemplo.com')
  const [phone, setPhone] = useState('+34 600 000 000')
  const [bio, setBio] = useState('¡Hola! Soy un usuario de MyMoon 🌙')

  function save() {
    if (value.trim()) setName(value.trim())
    setEditing(false)
  }

  function togglePersonalInfo() {
    setShowPersonalInfo(!showPersonalInfo)
  }

  return (
    <div className="content-section">
      <div className="section-title">
        <span className="section-title-icon">👤</span>
        Mi Perfil
      </div>

      <div className="profile-card">
        <div className="profile-avatar" onClick={openFilePicker}>
          {user.avatar ? (
            <img 
              src={user.avatar} 
              alt="avatar" 
              style={{ width: '100%', height: '100%', borderRadius: '50%' }} 
            />
          ) : (
            <div className="avatar-placeholder">
              {user.name.split(' ').map(n=>n[0]).join('').slice(0,2)}
            </div>
          )}
        </div>

        <div className="profile-info">
          {editing ? (
            <>
              <input 
                className="form-input" 
                value={value} 
                onChange={e=>setValue(e.target.value)} 
                placeholder="Tu nombre"
              />
              <div style={{ marginTop: 10 }}>
                <button 
                  className="btn btn-secondary" 
                  onClick={()=>setEditing(false)}
                >
                  Cancelar
                </button>
                <button 
                  className="btn btn-primary" 
                  style={{ marginLeft: 8 }} 
                  onClick={save}
                >
                  Guardar
                </button>
              </div>
            </>
          ) : (
            <>
              <div 
                className="profile-name" 
                onClick={()=>setEditing(true)}
                style={{ cursor: 'pointer' }}
              >
                {user.name}
              </div>
              <div className="profile-status">
                <span className="status-indicator" />
                En línea • Última vez hoy a las {new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
              </div>
              <button 
                className="btn btn-primary" 
                onClick={openFilePicker} 
                style={{ marginTop: 12 }}
              >
                📷 Cambiar foto de perfil
              </button>
              <div style={{ marginTop: 12 }}>
                <button 
                  className="btn btn-secondary" 
                  onClick={()=>setAvatar(null)}
                  disabled={!user.avatar}
                  style={{ 
                    opacity: user.avatar ? 1 : 0.5,
                    cursor: user.avatar ? 'pointer' : 'not-allowed'
                  }}
                >
                  🗑️ Quitar foto
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Botón de Información Personal - AHORA FUNCIONA */}
      <div className="settings-list">
        <div 
          className="setting-item" 
          onClick={togglePersonalInfo}
          style={{ cursor: 'pointer' }}
        >
          <div className="setting-icon">📝</div>
          <div className="setting-info">
            <div className="setting-title">
              Información personal
              <span style={{ 
                fontSize: '20px', 
                marginLeft: '8px',
                transition: 'transform 0.3s'
              }}>
                {showPersonalInfo ? '▼' : '▶'}
              </span>
            </div>
            <div className="setting-desc">
              Actualiza tu nombre, email, teléfono y biografía
            </div>
          </div>
        </div>

        {/* Panel expandible de información personal */}
        {showPersonalInfo && (
          <div style={{
            marginTop: '15px',
            padding: '20px',
            background: '#fff5f8',
            borderRadius: '10px',
            border: '1px solid #ffd6e0'
          }}>
            <h3 style={{ marginBottom: '15px', color: '#ff4d8d' }}>
              Editar Información Personal
            </h3>
            
            <div style={{ marginBottom: '15px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '5px', 
                fontWeight: '600',
                color: '#555'
              }}>
                Nombre completo
              </label>
              <input 
                className="form-input" 
                value={value} 
                onChange={e=>setValue(e.target.value)}
                placeholder="nombre"
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '5px', 
                fontWeight: '600',
                color: '#555'
              }}>
                Email
              </label>
              <input 
                className="form-input" 
                type="email"
                value={email} 
                onChange={e=>setEmail(e.target.value)}
                placeholder="ejemplo@email.com
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '5px', 
                fontWeight: '600',
                color: '#555'
              }}>
                Teléfono
              </label>
              <input 
                className="form-input" 
                type="tel"
                value={phone} 
                onChange={e=>setPhone(e.target.value)}
                placeholder="+00 000000000"
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '5px', 
                fontWeight: '600',
                color: '#555'
              }}>
                Biografía
              </label>
              <textarea 
                className="form-input"
                value={bio} 
                onChange={e=>setBio(e.target.value)}
                placeholder="Cuéntanos algo sobre ti..."
                rows={3}
                style={{ resize: 'vertical', minHeight: '80px' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  save()
                  alert('Información guardada')
                }}
              >
                 Guardar cambios
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => setShowPersonalInfo(false)}
              >
                ❌ Cerrar
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Sección de estadísticas */}
      <div style={{ 
        marginTop: '20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '15px'
      }}>
        <div style={{
          padding: '20px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '12px',
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold' }}>42</div>
          <div style={{ fontSize: '13px', opacity: 0.9 }}>Mensajes enviados</div>
        </div>
        
        <div style={{
          padding: '20px',
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          borderRadius: '12px',
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold' }}>15</div>
          <div style={{ fontSize: '13px', opacity: 0.9 }}>Contactos</div>
        </div>
        
        <div style={{
          padding: '20px',
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          borderRadius: '12px',
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold' }}>7</div>
          <div style={{ fontSize: '13px', opacity: 0.9 }}>Días activo</div>
        </div>
      </div>
    </div>
  )
}
