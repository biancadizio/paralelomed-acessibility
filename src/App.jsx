import React from 'react'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'


export default function App() {
  return (
    <div className="app-root">
      <Header />
      <Hero />
      <main className="container">

        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}