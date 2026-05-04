import { useEffect, useRef, useState } from 'react'
import './Projects.css'

export default function Projects() {
  const trackRef = useRef(null)
  const animationRef = useRef(null)

  const position = useRef(0)
  const velocity = useRef(0.8)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const lastX = useRef(0)

  const dragDistance = useRef(0)
  const isClickAllowed = useRef(true)

  const [videoAtivo, setVideoAtivo] = useState(null)
  const [loading, setLoading] = useState(true)

  const projects = [
    {
      title: 'Plataforma Comercial',
      hoverTitle: 'E-commerce',
      image: `${import.meta.env.BASE_URL}projetos/images/comercial.png`,
      video: `${import.meta.env.BASE_URL}projetos/videos/comercial.mp4`
    },
    {
      title: 'Site Institucional Pizzaria',
      hoverTitle: 'Site Institucional • E-commerce',
      image: `${import.meta.env.BASE_URL}projetos/images/web-app.png`,
      video: `${import.meta.env.BASE_URL}projetos/videos/videoFIORDIFORNO.mp4`
    },
    {
      title: 'ChatBot',
      hoverTitle: 'Chat Bot • Empresarial',
      image: `${import.meta.env.BASE_URL}projetos/images/chatbot.png`,
      video: `${import.meta.env.BASE_URL}projetos/videos/chatbot.mp4`
    }
  ];

  useEffect(() => {
    const track = trackRef.current

    const animate = () => {
      if (!isDragging.current) {
        position.current -= velocity.current
      }

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

  useEffect(() => {
    const track = trackRef.current

    const onDown = (e) => {
      isDragging.current = true
      isClickAllowed.current = true
      dragDistance.current = 0

      startX.current = e.pageX || e.touches[0].pageX
      lastX.current = startX.current
      velocity.current = 0
    }

    const onMove = (e) => {
      if (!isDragging.current) return

      const x = e.pageX || e.touches[0].pageX
      const delta = x - lastX.current

      position.current += delta
      velocity.current = delta * 0.1

      dragDistance.current += Math.abs(delta)

      if (dragDistance.current > 8) {
        isClickAllowed.current = false
      }

      lastX.current = x
    }

    const onUp = () => {
      isDragging.current = false
      velocity.current = 0.8
    }

    track.addEventListener('mousedown', onDown)
    track.addEventListener('touchstart', onDown)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchend', onUp)

    return () => {
      track.removeEventListener('mousedown', onDown)
      track.removeEventListener('touchstart', onDown)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchend', onUp)
    }
  }, [])

  return (
    <section className="projects" id="projects">
      <h2>Projetos</h2>

      <div className="carousel">
        <div className="projects-track" ref={trackRef}>
          {[...projects, ...projects].map((project, index) => (
            <div
              key={index}
              className="project-card"
              draggable="false"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                if (!isClickAllowed.current) return
                setVideoAtivo(project.video)
                setLoading(true)
              }}
            >
              <img src={project.image} alt={project.title} draggable="false"/>
              <div className="project-overlay">
                <span>{project.hoverTitle}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-left"></div>
        <div className="fade-right"></div>
      </div>

      {videoAtivo && (
        <div className="modal" onClick={() => setVideoAtivo(null)}>
          <div
            className="modal-content show"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setVideoAtivo(null)}
            >
              ✕
            </button>

            {loading && <div className="loader"></div>}

            <video
              src={videoAtivo}
              controls
              autoPlay
              muted
              playsInline
              onLoadedData={() => setLoading(false)}
              onVolumeChange={(e) => {
                e.target.muted = true
                e.target.volume = 0
              }}
            />
          </div>
        </div>
      )}
    </section>
  )
}