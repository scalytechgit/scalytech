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

        <span className="hero-tag">SCALYTECH • SOLUÇÕES TECNOLÓGICAS</span>

        <h1>
          Tecnologia que impulsiona<br />
          <span>empresas e projetos digitais</span>
        </h1>

        <p>
          Desenvolvemos sistemas web, sites profissionais, automações
          e soluções digitais que ajudam empresas a crescer com
          eficiência, performance e inovação.
        </p>

        <a href="#orcamento" className="hero-btn">
          Solicitar orçamento
        </a>

      </div>

      <div className="hero-rgb-line"></div>

    </section>
  )
}