import { useEffect } from 'react'

export function useSectionWheel() {
  useEffect(() => {
    document.documentElement.classList.add('sectionPaging')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let releaseTimer = 0
    let moving = false
    let savedScrollBehavior = ''
    function finish() {
      cancelAnimationFrame(frame)
      window.clearTimeout(releaseTimer)
      if (moving) document.documentElement.style.scrollBehavior = savedScrollBehavior
      moving = false
    }
    function advance(delta: number, preventDefault: () => void) {
      if (moving) { preventDefault(); return }
      const y = window.scrollY
      const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
      const header = document.querySelector('.cw header')?.getBoundingClientRect().height ?? 96
      const points = Array.from(document.querySelectorAll<HTMLElement>('.cw main > section, .cw footer'))
      const stops = [...new Set([0, ...points.map(section => Math.max(0, Math.min(maxY,
        section.getBoundingClientRect().top + y - header))), maxY])].sort((a, b) => a - b)
      let destination = delta > 0
        ? stops.find(top => top > y + 10)
        : [...stops].reverse().find(top => top < y - 10)
      if (destination === undefined) return
      // En pantallas bajas, permitir leer el contenido largo antes de cambiar.
      const readingStep = Math.max(200, window.innerHeight - header - 24)
      if (Math.abs(destination - y) > readingStep + header) {
        destination = y + Math.sign(delta) * readingStep
      }
      preventDefault()
      savedScrollBehavior = document.documentElement.style.scrollBehavior
      document.documentElement.style.scrollBehavior = 'auto'
      moving = true
      if (reduced.matches) {
        window.scrollTo({ top: destination, behavior: 'instant' })
        finish()
        return
      }
      const duration = 1050
      let start: number | undefined
      function animate(time: number) {
        start ??= time
        const progress = Math.max(0, Math.min(1, (time - start) / duration))
        const ease = progress < .5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2
        window.scrollTo({ top: y + (destination! - y) * ease, behavior: 'instant' })
        if (progress < 1) frame = requestAnimationFrame(animate)
        else finish()
      }
      frame = requestAnimationFrame(animate)
      // La liberación no depende de que termine la inercia del panel táctil.
      releaseTimer = window.setTimeout(finish, duration + 200)
    }
    function wheel(event: WheelEvent) {
      if (!event.deltaY || event.ctrlKey || event.metaKey || event.shiftKey) return
      const target = event.target as HTMLElement
      if (target.closest('textarea, select, [contenteditable="true"], .cwMobile')) return
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return
      advance(event.deltaY, () => event.preventDefault())
    }
    let touchStart: { x: number; y: number } | undefined
    let swiped = false
    function startTouch(event: TouchEvent) {
      touchStart = undefined
      swiped = false
      if (event.touches.length !== 1) return
      const target = event.target as HTMLElement
      if (target.closest('input, textarea, select, button, [contenteditable="true"], .cwMobile')) return
      touchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY }
    }
    function moveTouch(event: TouchEvent) {
      if (event.touches.length !== 1) { touchStart = undefined; finish(); return }
      if (!touchStart || !event.cancelable) return
      if (swiped) { event.preventDefault(); return }
      const deltaX = touchStart.x - event.touches[0].clientX
      const deltaY = touchStart.y - event.touches[0].clientY
      if (Math.abs(deltaX) > Math.abs(deltaY)) { touchStart = undefined; return }
      if (Math.abs(deltaY) < 10) return
      advance(deltaY, () => { event.preventDefault(); swiped = true })
    }
    function endTouch() { touchStart = undefined; swiped = false }
    window.addEventListener('wheel', wheel, { passive: false })
    window.addEventListener('touchstart', startTouch, { passive: true })
    window.addEventListener('touchmove', moveTouch, { passive: false })
    window.addEventListener('touchend', endTouch)
    window.addEventListener('touchcancel', endTouch)
    window.addEventListener('pointerdown', finish)
    window.addEventListener('keydown', finish)
    return () => {
      finish()
      document.documentElement.classList.remove('sectionPaging')
      window.removeEventListener('wheel', wheel)
      window.removeEventListener('touchstart', startTouch)
      window.removeEventListener('touchmove', moveTouch)
      window.removeEventListener('touchend', endTouch)
      window.removeEventListener('touchcancel', endTouch)
      window.removeEventListener('pointerdown', finish)
      window.removeEventListener('keydown', finish)
    }
  }, [])
}
