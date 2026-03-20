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
    scrollReveal() // inicializa animações de reveal
  }, [])

  return (
    <main>
      <Hero />

      <section>
        <Services />
      </section>

      <section>
        <Products />
      </section>

      <GradientDivider />

      <section>
        <Projects />
      </section>

      <section>
        <Contact />
      </section>
    </main>
  )
}
