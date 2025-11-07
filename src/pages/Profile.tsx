import React, { useState } from 'react'
import { useUser } from '../hooks/useUserData'

export default function Profile() {
  const { user, setName, openFilePicker, setAvatar } = useUser()
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState(user.name)

  function save() {
    if (value.trim()) setName(value.trim())
    setEditing(false)
  }

  return (
    <div className="content-section">
      <div className="section-title"><span className="section-title-icon">👤</span>Mi Perfil</div>

      <div className="profile-card">
        <div className="profile-avatar" onClick={openFilePicker}>
          {user.avatar ? <img src={user.avatar} alt="avatar" style={{ width: '100%', height: '100%', borderRadius: '50%' }} /> : <div className="avatar-placeholder">{user.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div>}
        </div>

        <div className="profile-info">
          {editing ? (
            <>
              <input className="form-input" value={value} onChange={e=>setValue(e.target.value)} />
              <div style={{ marginTop: 10 }}>
                <button className="btn btn-secondary" onClick={()=>setEditing(false)}>Cancelar</button>
                <button className="btn btn-primary" style={{ marginLeft: 8 }} onClick={save}>Guardar</button>
              </div>
            </>
          ) : (
            <>
              <div className="profile-name" onClick={()=>setEditing(true)}>{user.name}</div>
              <div className="profile-status"><span className="status-indicator" />En línea • Última vez hoy a las 00:00</div>
              <button className="change-photo-btn btn-primary" onClick={openFilePicker} style={{ marginTop: 8 }}>Cambiar foto de perfil</button>
              <div style={{ marginTop: 12 }}>
                <button className="btn btn-secondary" onClick={()=>setAvatar(null)}>Quitar foto</button>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="settings-list">
        <div className="setting-item">
          <div className="setting-icon">📝</div>
          <div className="setting-info">
            <div className="setting-title">Información personal</div>
            <div className="setting-desc">Actualiza tu nombre, foto y estado</div>
          </div>
        </div>
      </div>
    </div>
  )
}
