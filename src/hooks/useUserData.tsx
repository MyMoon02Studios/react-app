import React, { createContext, useContext, useEffect, useState } from 'react'

export interface UserData {
  name: string
  avatar: string | null
}

interface UserContextValue {
  user: UserData
  setName: (name: string) => void
  setAvatar: (dataUrl: string | null) => void
  openFilePicker: () => void
}

const UserContext = createContext<UserContextValue | undefined>(undefined)

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData>(() => {
    try {
      const raw = localStorage.getItem('mymoon_user')
      return raw ? JSON.parse(raw) : { name: 'Tu Nombre', avatar: null }
    } catch {
      return { name: 'Tu Nombre', avatar: null }
    }
  })

  useEffect(() => {
    localStorage.setItem('mymoon_user', JSON.stringify(user))
  }, [user])

  const openFilePicker = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = async (e) => {
      const target = e.target as HTMLInputElement
      const file = target.files && target.files[0]
      if (!file) return
      const reader = new FileReader()
      reader.onload = () => {
        setUser(prev => ({ ...prev, avatar: reader.result as string }))
      }
      reader.readAsDataURL(file)
    }
    input.click()
  }

  const setName = (name: string) => setUser(prev => ({ ...prev, name }))
  const setAvatar = (dataUrl: string | null) => setUser(prev => ({ ...prev, avatar: dataUrl }))

  return (
    <UserContext.Provider value={{ user, setName, setAvatar, openFilePicker }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error('useUser must be used within UserProvider')
  return ctx
}
