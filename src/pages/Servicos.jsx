import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'

export default function Servicos() {
  return (
    <>
        <Hero />
        <main className="container">
          <Services />
        </main>
    </>
  )
}
