import { useEffect, useState } from 'react'
import './SectionNavigation.css'
import { useSectionWheel } from './useWheelPaging'

const sections = [
  ['inicio', 'Inicio'],
  ['nosotros', 'Nosotros'],
  ['servicios', 'Servicios'],
  ['maquinaria', 'Maquinaria'],
  ['flota', 'Nuestra flota'],
  ['proyectos', 'Proyectos'],
  ['resultados', 'Resultados'],
  ['marcas', 'Marcas'],
  ['clientes', 'Experiencia'],
  ['equipo', 'Nuestro equipo'],
  ['contacto', 'Contacto'],
]

export default function SectionNavigation() {
  useSectionWheel()
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    let frame = 0
    function update() {
      frame = 0
      const marker = (document.querySelector('.cw header')?.getBoundingClientRect().height ?? 96) + 24
      let current = sections[0][0]
      for (const [id] of sections) {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= marker) current = id
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) current = 'contacto'
      setActive(current)
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)

    const items = document.querySelectorAll<HTMLElement>('.featurePhoto, .teamPhoto, .cwContact form')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle('scrollVisible', entry.isIntersecting))
    }, { threshold: 0.08 })
    items.forEach((item, index) => {
      item.classList.add('scrollEnter', index === 1 ? 'scrollFromLeft' : 'scrollFromRight')
      observer.observe(item)
    })

    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      cancelAnimationFrame(frame)
      observer.disconnect()
      items.forEach(item => item.classList.remove('scrollEnter', 'scrollFromLeft', 'scrollFromRight', 'scrollVisible'))
    }
  }, [])

  return <nav className="sectionNavigation" aria-label="Navegar por secciones">
    {sections.map(([id, label]) => <a key={id} href={`#${id}`} onClick={event => {
      const section = document.getElementById(id)
      if (!section) return
      event.preventDefault()
      section.scrollTop = 0
      const header = document.querySelector('.cw header')?.getBoundingClientRect().height ?? 96
      window.scrollTo({ top: Math.max(0, section.getBoundingClientRect().top + window.scrollY - header),
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
      history.replaceState(null, '', `#${id}`)
    }}
      className={active === id ? 'sectionDot active' : 'sectionDot'}
      aria-label={`Ir a ${label}`} aria-current={active === id ? 'location' : undefined}>
      <span className="sectionDotLabel">{label}</span>
      <span className="sectionDotMark" aria-hidden="true" />
    </a>)}
  </nav>
}
