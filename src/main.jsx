import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import { DragonBallApp } from './DragonBallApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <DragonBallApp />
    </BrowserRouter>
  </StrictMode>,
)
