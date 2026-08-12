import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.xp-card', {
        x: -80, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.experience', start: 'top 70%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="experience" id="experience" ref={ref}>
      <div className="section-head">
        <span className="sec-no">04</span>
        <h2 className="sec-title">EXPERIENCE</h2>
        </div>

      <div className="xp-card">
        <div className="xp-top">
          <h3 className="xp-role">FRONT-END DEVELOPER INTERN</h3>
          <span className="xp-date">March 2025 – May 2025</span>
        </div>
        <p className="xp-place">SoftAirTechnology</p>
        <ul className="xp-points">
          <li>Built and maintained responsive web pages using HTML, CSS and JavaScript by turning Figma UI/UX designs into working websites.</li>
          <li>Collaborated remotely with team members using Git and GitHub.</li>
        </ul>
      </div>
    </section>
  )
}