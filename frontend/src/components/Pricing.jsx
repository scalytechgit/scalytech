import './Pricing.css'
import { useState } from 'react'

// react-icons
import { FaLaptopCode, FaCogs, FaProjectDiagram, FaMobileAlt, FaPlug, FaLifeRing, FaServer, FaRocket } from 'react-icons/fa'

export default function Pricing() {

  const [modal, setModal] = useState(false)
  const [service, setService] = useState(null)

  const base = import.meta.env.BASE_URL

  const services = [
    {
      title: 'Sistemas Inteligentes / SaaS',
      desc: 'Desenvolvemos plataformas web corporativas e soluções SaaS escaláveis, otimizando processos internos e operações de empresas.',
      icon: <FaLaptopCode />,
      img: `${base}assets/pricing/saas.jpg`
    },
    {
      title: 'Automação de Processos',
      desc: 'Automatizamos tarefas repetitivas, integrações entre sistemas e fluxos de trabalho, garantindo eficiência e redução de erros.',
      icon: <FaCogs />,
      img: `${base}assets/pricing/automacao.jpg`
    },
    {
      title: 'Integrações de APIs',
      desc: 'Conectamos sistemas e plataformas para troca de dados em tempo real e integração inteligente entre diferentes ferramentas.',
      icon: <FaPlug />,
      img: `${base}assets/pricing/apis.jpg`
    },
    {
      title: 'Apps Mobile',
      desc: 'Criamos aplicativos mobile voltados para gestão de empresas, sistemas internos e controle de operações, integrados aos sistemas existentes.',
      icon: <FaMobileAlt />,
      img: `${base}assets/pricing/apps.jpg`
    },
    {
      title: 'Extensões e Ferramentas Corporativas',
      desc: 'Desenvolvemos extensões e dashboards personalizados, como ferramentas para Google Workspace e sistemas internos de produtividade.',
      icon: <FaProjectDiagram />,
      img: `${base}assets/pricing/extensoes.jpg`
    },
    {
      title: 'Manutenção e Suporte',
      desc: 'Oferecemos manutenção contínua, atualizações e suporte técnico para garantir a segurança e funcionamento dos sistemas.',
      icon: <FaLifeRing />,
      img: `${base}assets/pricing/suporte.jpg`
    },
    {
      title: 'Hospedagem e Deploy',
      desc: 'Configuramos, publicamos e hospedamos seus sistemas, garantindo infraestrutura confiável e disponibilidade contína.',
      icon: <FaServer />,
      img: `${base}assets/pricing/deploy.jpg`
    },
    {
      title: 'SEO e Performance',
      desc: 'Otimização de sistemas e plataformas para máxima performance, confiabilidade e experiência do usuário.',
      icon: <FaRocket />,
      img: `${base}assets/pricing/seo.jpg`
    }
  ]

  return (
    <section className="pricing" id="orcamento">

      <h2>Solicite um Orçamento</h2>

      <div className="services-budget-grid">
        {services.map((item, index) => (
          <div
            key={index}
            className="service-budget-card"
            onClick={() => {
              setService(item)
              setModal(true)
            }}
          >
            <div className="service-icon">{item.icon}</div>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {modal && service && (
        <div
          className="pricing-modal-overlay"
          onClick={() => setModal(false)}
        >
          <div
            className="pricing-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{service.title}</h3>

            {service.img && (
              <img
                src={service.img}
                alt={service.title}
                className="modal-image"
              />
            )}

            <p className="modal-desc">{service.desc}</p>

            <div className="pricing-modal-actions">
              <a
                href={`https://wa.me/5531999999999?text=Olá! Gostaria de solicitar um orçamento para o serviço: ${service.title}`}
                target="_blank"
                className="pricing-modal-btn pricing-whatsapp"
              >
                Solicitar pelo WhatsApp
              </a>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=scalytech.contatos@gmail.com&subject=Orçamento - ${service.title}&body=Olá! Gostaria de solicitar um orçamento para o serviço: ${service.title}`}
                target="_blank"
                className="pricing-modal-btn pricing-gmail"
              >
                Solicitar por Email
              </a>
            </div>

            <button
              className="pricing-close"
              onClick={() => setModal(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  )
}