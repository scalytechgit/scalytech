// src/components/Projects.jsx
import { useRef, useEffect } from 'react';
import './Projects.css';

export default function Projects() {
  const trackRef = useRef(null);

  const projects = [
    {
      title: 'E-commerce Google Sheets',
      hoverTitle: 'E-commerce',
      image: '/projects/FIOR-DI-FORNO/preview.jpg',
      link: '/projects/FIOR-DI-FORNO/index.html'
    },
    {
      title: 'Atendimento Automático',
      hoverTitle: 'ChatBot',
      image: '/projects/ecommerce/preview.jpg',
      link: '/projects/ecommerce/index.html'
    },
    {
      title: 'Mensagem Automática de Contato',
      hoverTitle: 'Dashboard Interativo • Selenium',
      image: '/projects/dashboard/preview.jpg',
      link: '/projects/dashboard/index.html'
    }
  ];

  useEffect(() => {
    const track = trackRef.current;
    let position = 0;
    let velocity = 0.8;
    let animationFrame;

    const animate = () => {
      position -= velocity;
      const width = track.scrollWidth / 2;
      if (Math.abs(position) >= width) {
        position += width;
      }
      track.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="projects reveal" id="projects">
      <div className="container">
        <h2>Projetos Recentes</h2>
        <p>Esses são alguns dos projetos da ScalyTech.</p>

        <div className="carousel">
          <div className="projects-track" ref={trackRef}>
            {[...projects, ...projects].map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
                draggable="false"
              >
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span>{project.hoverTitle}</span>
                </div>
              </a>
            ))}
          </div>
          <div className="fade-left"></div>
          <div className="fade-right"></div>
        </div>
      </div>
    </section>
  );
}
