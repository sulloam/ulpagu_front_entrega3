import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserWelcome from '../profile/UserWelcome.jsx'
import Routing from './Routing.jsx'
import { AuthProvider } from '../context/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Routing />
    </AuthProvider>
  </StrictMode>,
)
