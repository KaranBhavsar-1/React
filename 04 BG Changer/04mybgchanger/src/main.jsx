import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Buttons from './componenets/buttons.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <Buttons />
  </StrictMode>,
)
