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
          Tecnologia que automatiza,<br />
          <span>cresce e escala.</span>
        </h1>

        <p>
          Soluções digitais completas: sistemas sob medida, automações,
           sites institucionais e landing pages. Reduza custos e escale
            sua empresa com eficiência.
        </p>

        <a href="#orcamento" className="hero-btn">
          Solicitar orçamento
        </a>

      </div>

      <div className="hero-rgb-line"></div>

    </section>
  )
}