// src/components/Services.jsx
import './Services.css'
import GradientDivider from './GradientDivider'

export default function Services() {
  const services = [
    {
      title: 'Sistemas Web & SaaS',
      desc: 'Desenvolvemos plataformas web completas e soluções SaaS escaláveis, garantindo processos eficientes e crescimento estruturado.'
    },
    {
      title: 'Automação de Processos',
      desc: 'Automatizamos tarefas repetitivas, integração de APIs, geração de relatórios e fluxos de comunicação para equipes B2B.'
    },
    {
      title: 'Aplicativos Mobile',
      desc: 'Criamos apps mobile integrados com seus sistemas, permitindo controle e otimização de processos em qualquer lugar.'
    },
    {
      title: 'Integrações de APIs',
      desc: 'Conectamos suas plataformas, garantindo fluxo contínuo de dados e integração inteligente entre sistemas.'
    },
    {
      title: 'Extensões Google',
      desc: 'Desenvolvemos extensões e ferramentas para Google Workspace, potencializando produtividade e automação corporativa.'
    },
    {
      title: 'Manutenção & Hospedagem',
      desc: 'Garantimos suporte contínuo, manutenção e hospedagem de sistemas e aplicativos, com performance e segurança.'
    }
  ]

  return (
    <section className="services" id="services">
      <div className="services-header">
        <h2>Nossos Serviços</h2>
        <GradientDivider />
        <p>
          Soluções tecnológicas pensadas para automatizar, escalar e tornar sua operação mais eficiente.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, idx) => (
          <div key={idx} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
