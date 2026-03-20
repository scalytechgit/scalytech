import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="notfound-content reveal">
        <span className="notfound-code">404</span>

        <h1>Página não encontrada</h1>

        <p>
          A página que você tentou acessar não existe
          ou foi movida para outro endereço.
        </p>

        <Link to="/" className="notfound-btn hover-lift">
          Voltar para o início
        </Link>
      </div>

      <div className="notfound-gradient"></div>
    </section>
  )
}
