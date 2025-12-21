import React, { useState } from "react";
import { useUser } from "../hooks/useUserData";

// ENVs
const apiKey = import.meta.env.VITE_API_KEY;

export default function General() {
  type Message = {
    id: number;
    author: string;
    text: string;
  };
  const user = useUser();
  const [messages, setMessages] = useState<Message[]>([]); //! No borrar
  const [text, setText] = useState("");

  async function send() {
    if (!text.trim()) return;
    const next = { id: Date.now(), author: "Tú", text: text.trim() };

    // Enviar mensaje a la API
    try {
      const response = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          title: "En construcciones",
          content: next.text,
          author: user.user.name || "Desconocido",
          key: apiKey,
        },
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
      }
    } catch (err) {
      console.error(err);
    }

    setMessages((prev) => [...prev, next]);
    setText("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      send();
    }
  }

  return (
    <div className="content-section">
      <div className="section-title">
        <span className="section-title-icon">💬</span>Chats Generales
      </div>
      <div style={{ marginBottom: 12 }}>
        {messages.map((m) => (
          <div
            key={m.id}
            style={{
              padding: 10,
              borderRadius: 8,
              background: "#fff",
              marginBottom: 8,
            }}
          >
            <strong>{m.author}:</strong> {m.text}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <input
          className="form-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe un mensaje..."
          onKeyDown={handleKeyDown}
        />
        <button className="btn btn-primary" onClick={send}>
          Enviar
        </button>
      </div>
    </div>
  );
}
