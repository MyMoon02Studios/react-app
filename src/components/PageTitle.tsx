import React, { useEffect } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'

const titles: Record<string, string> = {
    '/': 'Perfil',
    '/mensajes': 'Mensajes', 
    '/chats': 'Chat General',
    '/configuracion': 'Configuración'
}

export default function PageTitle() {
    const currentSection = useActiveSection()
    const currentTitle = titles[currentSection] || 'MyMoon'

    useEffect(() => {
        document.title = `MyMoon - ${currentTitle}`;
    }, [currentSection, currentTitle]);

    return null
}