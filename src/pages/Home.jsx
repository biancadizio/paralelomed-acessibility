import React, { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Contact from '../components/sections/Contact'
import Exames from '../components/sections/Exames'

import { useLocation } from 'react-router-dom'

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else {
        // If element isn't ready yet, try again shortly.
        setTimeout(() => {
          const retryEl = document.getElementById(id)
          if (retryEl) retryEl.scrollIntoView({ behavior: 'smooth' })
        }, 80)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  return (
    <>
      <Hero />
      <main className="container" lang="pt-BR">
        <About />
        <Exames />
        <Services />
        <Contact />   
      </main>
    </>
  )
}
