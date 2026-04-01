export function animateOnLoad(selector, className = 'show', delay = 0) {
  const elements = document.querySelectorAll(selector)

  if (!elements.length) return

  elements.forEach((el, index) => {
    const time = delay * index

    setTimeout(() => {
      el.classList.add(className)
    }, time)
  })
}