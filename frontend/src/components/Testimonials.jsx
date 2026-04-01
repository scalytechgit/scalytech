import { useEffect, useRef } from 'react'
import './Testimonials.css'

export default function Testimonials() {
  const trackRef = useRef(null)
  const animationRef = useRef(null)
  const position = useRef(0)

  const testimonials = [
    {
      name: 'Mariana Torres',
      text: 'A Scalytech automatizou vários processos da nossa empresa e conseguimos economizar horas de trabalho toda semana.',
      rating: 5
    },
    {
      name: 'Carlos Mendes',
      text: 'Precisávamos de um sistema sob medida e a equipe da Scalytech entregou exatamente o que nossa operação precisava.',
      rating: 5
    },
    {
      name: 'Fernanda Oliveira',
      text: 'O suporte e a organização do projeto foram excelentes. Hoje temos uma plataforma muito mais eficiente.',
      rating: 5
    }
  ]

  useEffect(() => {
    const track = trackRef.current

    const animate = () => {
      position.current -= 0.45

      const width = track.scrollWidth / 2
      if (Math.abs(position.current) >= width) {
        position.current += width
      }

      track.style.transform = `translateX(${position.current}px)`
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationRef.current)
  }, [])

  return (
    <section className="testimonials" id="avaliacoes-clientes">
      <h2>O que nossos clientes dizem</h2>

      <div className="testimonials-carousel">
        <div className="testimonials-track" ref={trackRef}>
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <article className="testimonial-card" key={`${testimonial.name}-${index}`}>

              <div className="stars">
                {'★'.repeat(Math.floor(testimonial.rating))}
                {testimonial.rating % 1 !== 0 && '☆'}
              </div>

              <p>{testimonial.text}</p>
              <h3>{testimonial.name}</h3>

            </article>
          ))}
        </div>

        <div className="testimonials-fade-left"></div>
        <div className="testimonials-fade-right"></div>
      </div>
    </section>
  )
}