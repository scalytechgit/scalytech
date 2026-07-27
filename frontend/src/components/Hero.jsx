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

        <span className="eyebrow">scalytech / engenharia de software</span>

        <h1>
          Sistemas que rodam sozinhos,<br />
          <span>enquanto sua empresa cresce.</span>
        </h1>

        <p>
          Construímos sistemas sob medida, automações e integrações que tiram
          trabalho manual da sua operação. Menos retrabalho, mais tempo para
          o que importa.
        </p>

        <div className="hero-actions">
          <a href="#orcamento" className="hero-btn">
            Solicitar orçamento
          </a>
          <a href="#projects" className="hero-btn-secondary">
            Ver projetos
          </a>
        </div>

      </div>

    </section>
  )
}