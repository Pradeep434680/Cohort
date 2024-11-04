import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import Assignment1 from './Assignment_1.jsx'
import Assignment2 from './Assignment_2.jsx'
import Assignment3 from './Assignment-3.jsx'
import Assignment_4 from './Assignment_4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Assignment1 />
    <Assignment2/>
    <Assignment3/> */}
    <Assignment_4/>
  </StrictMode>,
)
