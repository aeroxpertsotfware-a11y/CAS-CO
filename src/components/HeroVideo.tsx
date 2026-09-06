import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import video from '../assets/WhatsApp Video 2026-09-05 at 6.36.10 PM.mp4'

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null)
  const reducedMotion = useReducedMotion()
  const [failed, setFailed] = useState(false)
  const [ready, setReady] = useState(false)
  const [videoUrl, setVideoUrl] = useState<string>()

  useEffect(() => {
    const start = () => setReady(true)
    if (document.readyState === 'complete') start()
    else window.addEventListener('load', start, { once: true })
    return () => window.removeEventListener('load', start)
  }, [])

  useEffect(() => {
    if (!ready || reducedMotion) return
    const controller = new AbortController()
    let objectUrl: string | undefined
    setFailed(false)
    fetch(video, { signal: controller.signal })
      .then(response => {
        if (!response.ok) throw new Error('Video unavailable')
        return response.blob()
      })
      .then(blob => {
        if (controller.signal.aborted) return
        objectUrl = URL.createObjectURL(blob)
        setVideoUrl(objectUrl)
      })
      .catch(() => { if (!controller.signal.aborted) setFailed(true) })
    return () => {
      controller.abort()
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [ready, reducedMotion])

  useEffect(() => {
    const element = ref.current
    if (!element || !videoUrl) return
    if (reducedMotion) element.pause()
    else void element.play().catch(() => { /* Mantener el fondo oscuro si se bloquea la reproducción. */ })
    return () => element.pause()
  }, [reducedMotion, videoUrl])

  return <>
    <video
      ref={ref}
      className="heroVideo"
      src={!reducedMotion ? videoUrl : undefined}
      autoPlay={ready && !reducedMotion}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      onError={() => setFailed(true)}
      style={failed ? { display: 'none' } : undefined}
    />
    <div className="heroVideoShade" aria-hidden="true" />
  </>
}
