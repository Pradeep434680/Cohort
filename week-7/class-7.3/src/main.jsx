import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Asy_data from './Asy_data.jsx'
import './index.css'
import AtomFamily from './AtomFamily.jsx'
import SelectorFamily from './SelectorFamily.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Asy_data/> */}
    {/* <AtomFamily/> */}
    <SelectorFamily/>
  </StrictMode>,
)
