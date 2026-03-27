import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="notfound">

      <div className="notfound-content">
        <span className="notfound-code">404</span>

        <h1>Página não encontrada</h1>

        <p>
          A página que você tentou acessar não existe ou foi movida.
          Volte para o início e continue explorando a Scalytech.
        </p>

        <Link to="/" className="notfound-btn">
          Voltar para o início
        </Link>
      </div>

      {/* Elemento visual de background */}
      <div className="notfound-gradient"></div>

    </section>
  )
}