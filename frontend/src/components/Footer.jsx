import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>SCALYTECH</h2>
          <p>
            Desenvolvendo soluções digitais, sistemas inteligentes
            e tecnologia para impulsionar empresas.
          </p>
        </div>

        <div className="footer-links">
          <a href="#services">Serviços</a>
          <a href="#projects">Projetos</a>
          <a href="#orcamento">Orçamento</a>
          <a href="#contact">Contato</a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Scalytech. Todos os direitos reservados.
      </div>

    </footer>
  )
}