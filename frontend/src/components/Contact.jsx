import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import './Contact.css'

export default function Contact() {

  const [open, setOpen] = useState(false)

  const whatsappNumber = '5531999999999'

  const mensagem = encodeURIComponent(
    'Olá! Gostaria de conversar sobre um projeto com a Scalytech.'
  )

  return (
    <section className="contact" id="contact">

      <h2>Contato</h2>

      <p className="contact-text">
        Entre em contato com a Scalytech e descubra como podemos
        desenvolver soluções digitais, sistemas e plataformas
        para o seu projeto.
      </p>

      <button
        className="contact-button"
        onClick={() => setOpen(true)}
      >
        Falar com a equipe
      </button>

      {open && (

        <div
          className="contact-modal-overlay"
          onClick={() => setOpen(false)}
        >

          <div
            className="contact-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <h3>Escolha um canal</h3>

            <div className="contact-modal-actions">

              <a
                className="contact-modal-btn whatsapp"
                href={`https://wa.me/${whatsappNumber}?text=${mensagem}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="icon" />
                WhatsApp
              </a>

              <a
                className="contact-modal-btn gmail"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contato@scalytech.contatos@gmail.com&subject=Novo%20Projeto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail className="icon" />
                Email
              </a>

            </div>

            <button
              className="contact-close-btn"
              onClick={() => setOpen(false)}
            >
              Fechar
            </button>

          </div>

        </div>

      )}

    </section>
  )
}