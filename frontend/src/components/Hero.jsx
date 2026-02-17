// src/components/Hero.jsx
import './Hero.css'
import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    const hero = document.querySelector('.hero')
    hero.classList.add('show')
  }, [])

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">SCALYTECH • 2026</span>

        <h1>
          Crescimento estruturado <br />
          <span>com tecnologia que automatiza e escala</span>
        </h1>

        <p>
          Desenvolvemos sistemas web, SaaS e automações inteligentes que otimizam processos,
          aumentam eficiência e garantem escalabilidade para empresas digitais maduras.
        </p>

        <a href="#contact" className="hero-btn">
          Vamos conversar
        </a>
      </div>

      <div className="hero-rgb-line"></div>
    </section>
  )
}
