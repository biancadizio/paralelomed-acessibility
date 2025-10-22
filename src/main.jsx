import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { FontSizeProvider } from './contexts/FontSizeContext.jsx'

createRoot(document.getElementById('root')).render(

  <ThemeProvider>
    <FontSizeProvider>
      <App />
    </FontSizeProvider>
  </ThemeProvider>

)
