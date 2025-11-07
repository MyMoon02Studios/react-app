import { useLocation } from 'react-router-dom'

export function useActiveSection() {
  const loc = useLocation()
  return loc.pathname
}
