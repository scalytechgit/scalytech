import './Services.css'
import RGBLine from './RGBLine'

export default function Services() {

  const services = [
    {
      title: 'Sistemas Inteligentes / SaaS',
      desc: 'Desenvolvemos plataformas web corporativas e soluções SaaS escaláveis, otimizando processos internos e operações de empresas.'
    },
    {
      title: 'Automação de Processos',
      desc: 'Automatizamos tarefas repetitivas, integrações entre sistemas e fluxos de trabalho, garantindo eficiência e redução de erros.'
    },
    {
      title: 'Integrações de APIs',
      desc: 'Conectamos sistemas e plataformas para troca de dados em tempo real e integração inteligente entre diferentes ferramentas.'
    },
    {
      title: 'Apps Mobile Corporativos',
      desc: 'Criamos aplicativos mobile voltados para gestão de empresas, sistemas internos e controle de operações, integrados aos sistemas existentes.'
    },
    {
      title: 'Extensões e Ferramentas Corporativas',
      desc: 'Desenvolvemos extensões e dashboards personalizados, como ferramentas para Google Workspace e sistemas internos de produtividade.'
    },
    {
      title: 'Manutenção e Suporte',
      desc: 'Oferecemos manutenção contínua, atualizações e suporte técnico para garantir a segurança e funcionamento dos sistemas.'
    },
    {
      title: 'Hospedagem e Deploy',
      desc: 'Configuramos, publicamos e hospedamos seus sistemas, garantindo infraestrutura confiável e disponibilidade contínua.'
    },
    {
      title: 'SEO e Performance',
      desc: 'Otimização de sistemas e plataformas para máxima performance, confiabilidade e experiência do usuário.'
    }
  ]

  return (
    <section className="services" id="services">

      <div className="services-header">
        <h2>Nossos Serviços</h2>

        <p>
          Soluções tecnológicas pensadas para automatizar, escalar e tornar sua operação mais eficiente.
        </p>

        <RGBLine width={160} />
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

    </section>
  )
}