import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact .sec-title',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact', start: 'top 70%' } })
      gsap.from('.contact-card', {
        y: 50, opacity: 0, stagger: 0.15, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-cards', start: 'top 80%' },
      })
      gsap.from('.contact-links .btn', {
        scale: 0, opacity: 0, stagger: 0.12, duration: 0.5, ease: 'back.out(2)',
        scrollTrigger: { trigger: '.contact-links', start: 'top 90%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="section-head">
        <span className="sec-no">07</span>
        <h2 className="sec-title">LET'S TALK</h2>
      </div>
      <p className="contact-sub">OPEN TO WEB DEVELOPER ROLES & FREELANCE WORK</p>

      <div className="contact-cards">
        <div className="contact-card"><b>EMAIL</b><span>taniapmvt@gmail.com</span></div>
        <div className="contact-card"><b>PHONE</b><span>+91 74978-50544</span></div>
        <div className="contact-card"><b>LOCATION</b><span>Sirsa, Haryana, India</span></div>
      </div>

      <div className="contact-links">
        <a className="btn" href="https://github.com/Tania-Kamboj" target="_blank" rel="noreferrer">GitHub &#8599;</a>
        <a className="btn" href="https://www.linkedin.com/in/taniapmvt" target="_blank" rel="noreferrer">LinkedIn &#8599;</a>
        <a className="btn ghost" href="/resume.pdf" download>Download Resume &#8595;</a>
      </div>
    </section>
  )
}