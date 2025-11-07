import React, { useState } from 'react'

const initial = [
  { id: 1, author: 'Ana', text: 'Hola, ¿cómo estás?' },
  { id: 2, author: 'Carlos', text: 'Nos vemos mañana en la reunión.' },
  { id: 3, author: 'María', text: '¿Viste el último mensaje?' }
]

export default function General() {
  const [messages, setMessages] = useState(initial)
  const [text, setText] = useState('')

  function send() {
    if (!text.trim()) return
    const next = { id: Date.now(), author: 'Tú', text: text.trim() }
    setMessages(prev => [...prev, next])
    setText('')
  }

  return (
    <div className="content-section">
      <div className="section-title"><span className="section-title-icon">💬</span>Chats Generales</div>
      <div style={{ marginBottom: 12 }}>
        {messages.map(m=>(
          <div key={m.id} style={{ padding: 10, borderRadius: 8, background: '#fff', marginBottom: 8 }}>
            <strong>{m.author}:</strong> {m.text}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <input className="form-input" value={text} onChange={e=>setText(e.target.value)} placeholder="Escribe un mensaje..." />
        <button className="btn btn-primary" onClick={send}>Enviar</button>
      </div>
    </div>
  )
}
