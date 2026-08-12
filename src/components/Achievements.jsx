import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const items = [
  { icon: '🏆', title: 'Leadership', desc: 'Led Art & Craft and various mentorship programs, including BFCET hackathons.' },
  { icon: '🤝', title: 'Teamwork', desc: 'Worked with diverse teams ensuring coordination and successful execution.' },
  { icon: '🗣️', title: 'Communication', desc: 'Effectively conveying ideas and working with teams for clarity and productivity.' },
  { icon: '✍️', title: 'Content Writing', desc: 'Personal development and growth content writer along with writing for brands for the target audience.' },
]

export default function Achievements() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.mega',
        { y: 90, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power4.out',
          scrollTrigger: { trigger: '.achievements', start: 'top 70%' } })
      gsap.from('.ach-card', {
        y: 70, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.ach-grid', start: 'top 78%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="achievements" id="achievements" ref={ref}>
      <h2 className="mega">ACHIEVEMENTS<br />& STRENGTHS</h2>
      <div className="ach-grid">
        {items.map((a, i) => (
          <div key={a.title} className={'ach-card ' + (i % 2 === 0 ? 'dark' : 'light')}>
            <div className="ach-icon">{a.icon}</div>
            <h3 className="ach-title">{a.title}</h3>
            <p className="ach-desc">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}