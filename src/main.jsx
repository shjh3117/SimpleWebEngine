import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SimpleWebEngine from './SimpleWebEngine'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SimpleWebEngine />
  </StrictMode>
)