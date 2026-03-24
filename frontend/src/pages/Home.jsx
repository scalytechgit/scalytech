import Hero from '../components/Hero'
import Services from '../components/Services'
import Products from '../components/Products'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import GradientDivider from '../components/GradientDivider'
import { useEffect } from 'react'
import { scrollReveal } from '../utils/scroll'

export default function Home() {
  useEffect(() => {
   scrollReveal() 
  }, [])

  return (
    <main>
      <Hero />

      <section id="services">
        <Services />
      </section>

      <section id="products">
        <Products />
      </section>

      <GradientDivider />

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}