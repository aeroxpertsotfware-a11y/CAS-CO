import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Construction'
import './construction.css'
import './industrial.css'
import './brand.css'
import './hero-video.css'
import './typography.css'
import './presentation.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
