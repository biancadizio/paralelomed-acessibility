import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'


export default function App() {
  return (
    <Router>
      <div className="app-root">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Redirect legacy page routes to home sections */}
          <Route path="/empresa" element={<Navigate to="/#sobre" replace />} />
          <Route path="/exames" element={<Navigate to="/#exames" replace />} />
          <Route path="/servicos" element={<Navigate to="/#servicos" replace />} />
          <Route path="/contato" element={<Navigate to="/#contato" replace />} />
          {/* Catch all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}