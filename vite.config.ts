/**
 * Configuración de Vite para la aplicación MyMoon
 * 
 * Este archivo configura:
 * - Plugin de React para Vite
 * - Variables de entorno para host y puerto
 * - Configuración del servidor de desarrollo
 */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Configuración principal de Vite
 * @param {object} params - Parámetros de configuración
 * @param {string} params.mode - Modo de ejecución (development/production)
 */
export default defineConfig(({ mode }) => {
  // @ts-ignore: `process` may not have Node types available in every TS setup for vite config
  const env = loadEnv(mode, process.cwd(), '')

  const host = env.VITE_HOST ?? '0.0.0.0'
  const port = env.VITE_PORT ? parseInt(env.VITE_PORT, 10) : 3000

  return {
    plugins: [react()],
    clearScreen: false,
    server: {
      host,
      port,
      open: true,
      allowedHosts: ['react-app-yg5h.onrender.com']
    }
  }
})
