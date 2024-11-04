import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import App2 from './App1.jsx'
import './index.css'
import Practice from './Practice.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Practice />
  </StrictMode>,
)
