import './Services.css'

export default function Services() {

  const services = [
    {
      title: 'Sistemas Inteligentes / SaaS',
      desc: 'Desenvolvemos plataformas web corporativas e soluções SaaS escaláveis, otimizando processos internos e operações de empresas.',
      preco: 'testeSaaS'
    },
    {
      title: 'Automação de Processos',
      desc: 'Automatizamos tarefas repetitivas, integrações entre sistemas e fluxos de trabalho, garantindo eficiência e redução de erros.',
      preco: ''
    },
    {
      title: 'Integrações de APIs',
      desc: 'Conectamos sistemas e plataformas para troca de dados em tempo real e integração inteligente entre diferentes ferramentas.',
      preco: ''
    },
    {
      title: 'Apps Mobile Corporativos',
      desc: 'Criamos aplicativos mobile voltados para gestão de empresas, sistemas internos e controle de operações, integrados aos sistemas existentes.',
      preco: ''
    },
    {
      title: 'Extensões e Ferramentas Corporativas',
      desc: 'Desenvolvemos extensões e dashboards personalizados, como ferramentas para Google Workspace e sistemas internos de produtividade.',
      preco: ''
    },
    {
      title: 'Manutenção e Suporte',
      desc: 'Oferecemos manutenção contínua, atualizações e suporte técnico para garantir a segurança e funcionamento dos sistemas.',
      preco: ''
    },
    {
      title: 'SEO e Performance',
      desc: 'Otimização de sistemas e plataformas para máxima performance, confiabilidade e experiência do usuário.',
      preco: 'teste'
    }
  ]

  return (
    <section className="services" id="services">

      <div className="services-header">
        <span className="eyebrow">o que fazemos</span>
        <h2>Nossos Serviços</h2>

        <p>
          Soluções tecnológicas pensadas para automatizar, escalar e tornar sua operação mais eficiente.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

    </section>
  )
}