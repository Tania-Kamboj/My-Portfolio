import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current

    gsap.set([dot, ring], { x: -100, y: -100, xPercent: -50, yPercent: -50 })

    const xDot = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3.out' })
    const yDot = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3.out' })
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' })
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' })

    const move = (e) => {
      xDot(e.clientX); yDot(e.clientY)
      xRing(e.clientX); yRing(e.clientY)
    }

   const grow = () => gsap.to(ring, { scale: 2, duration: 0.3, ease: 'power2.out' })
    const shrink = () => gsap.to(ring, { scale: 1, duration: 0.3, ease: 'power2.out' })

    const down = () => gsap.to(ring, { scale: 1.4, duration: 0.15, ease: 'power2.out' })
    const up = () => gsap.to(ring, { scale: 1, duration: 0.4, ease: 'elastic.out(1, 0.4)' })

    const hoverables = document.querySelectorAll(
      'a, button, .project-card, .ach-card, .contact-card, .chip, .tool-chip'
    )
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}