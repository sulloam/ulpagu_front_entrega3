import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserWelcome from './UserWelcome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserWelcome />
    <App />
  </StrictMode>,
)
