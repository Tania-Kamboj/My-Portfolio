import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Education() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.edu-card', {
        x: 80, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.education', start: 'top 70%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="education" id="education" ref={ref}>
      <div className="section-head">
        <span className="sec-no">05</span>
        <h2 className="sec-title">EDUCATION</h2>
        </div>

      <div className="edu-card">
        <div className="xp-top">
          <h3 className="xp-role">B.TECH — COMPUTER SCIENCE ENGINEERING</h3>
          <span className="xp-date">Aug 2022 – June 2026</span>
        </div>
        <p className="xp-place">Baba Farid Group Of Institutions, Punjab</p>
        <ul className="xp-points">
          <li>2026 Passout</li>
          <li>Secured 7.5 GPA</li>
        </ul>
      </div>
    </section>
  )
}