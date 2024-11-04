import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Todo from './Todo'
import Cardwrapper from './Cardwrapper'
import Hooks from './Hooks'
import Test from './Test'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Test/>
  </StrictMode>,
)

