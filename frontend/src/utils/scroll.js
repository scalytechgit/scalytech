export function scrollReveal(
  selector,
  className = 'visible',
  threshold = 0.15
) {
  const elements = document.querySelectorAll(selector)

  if (!elements.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className)
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold
    }
  )

  // observar cada elemento
  elements.forEach((el) => observer.observe(el))
}