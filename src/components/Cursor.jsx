import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const COLORS = ['#a78bfa', '#f0abfc', '#8b5cf6', '#e9d5ff']

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current

    gsap.set([dot, ring], { x: -100, y: -100, xPercent: -50, yPercent: -50 })

    const xDot = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3.out' })
    const yDot = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3.out' })
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' })
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' })

    let lastX = -100
    let lastY = -100

    const spawnPuff = (x, y) => {
      const puff = document.createElement('div')
      puff.className = 'smoke-puff'
      const size = gsap.utils.random(16, 34)
      puff.style.width = size + 'px'
      puff.style.height = size + 'px'
      puff.style.left = x + 'px'
      puff.style.top = y + 'px'
      puff.style.background = COLORS[Math.floor(gsap.utils.random(0, COLORS.length))]
      document.body.appendChild(puff)

      gsap.fromTo(
        puff,
        { xPercent: -50, yPercent: -50, scale: 0.4, opacity: 0.5 },
        {
          x: gsap.utils.random(-35, 35),       
          y: gsap.utils.random(-60, -15),      
          scale: gsap.utils.random(1.8, 2.6),  
          opacity: 0,
          duration: gsap.utils.random(0.8, 1.5),
          ease: 'power2.out',
          onComplete: () => puff.remove(),     
        }
      )
    }

    const move = (e) => {
      xDot(e.clientX); yDot(e.clientY)
      xRing(e.clientX); yRing(e.clientY)

      const dx = e.clientX - lastX
      const dy = e.clientY - lastY
      if (dx * dx + dy * dy > 144) {
        spawnPuff(e.clientX, e.clientY)
        lastX = e.clientX
        lastY = e.clientY
      }
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
      document.querySelectorAll('.smoke-puff').forEach((p) => p.remove())
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}