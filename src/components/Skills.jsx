import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: 'HTML & CSS', level: 90 },
  { name: 'JAVASCRIPT', level: 85 },
  { name: 'TYPESCRIPT', level: 90 },
  { name: 'REACT.JS', level: 85 },
  { name: 'TAILWIND CSS', level: 82 },
  { name: 'NODE & EXPRESS', level: 70 },
  { name: 'PHP & WORDPRESS', level: 75 },
  { name: 'C / C++', level: 80 },
  { name: 'MONGODB', level: 70 },
  { name: 'MYSQL', level: 70 },
]
const tools = ['Git', 'GitHub', 'VS Code', 'Cursor', 'GSAP', 'Three.js', 'Bootstrap', 'Material-UI', 'React Router', 'Mongoose', 'SEO']

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skills .section-head > *', {
        y: 40, opacity: 0, stagger: 0.15, duration: 0.7,
        scrollTrigger: { trigger: '.skills', start: 'top 75%' },
      })
      gsap.from('.skill-row', {
        x: -40, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: '.skills-box', start: 'top 78%' },
      })
      gsap.fromTo('.bar-fill',
        { width: '0%' },
        {
          width: (i, el) => el.getAttribute('data-width') + '%',
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: { trigger: '.skills-box', start: 'top 70%' },
        }
      )
      gsap.from('.tool-chip', {
        y: 20, opacity: 0, stagger: 0.06, duration: 0.4,
        scrollTrigger: { trigger: '.tools', start: 'top 88%' },
      })
      
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="section-head">
        <span className="sec-no">02</span>
        <h2 className="sec-title">SKILLS</h2>
      </div>
      <p className="sec-sub">MY KNOWLEDGE LEVEL IN SOFTWARE</p>

      <div className="skills-box">
        {skills.map((s) => (
          <div className="skill-row" key={s.name}>
            <span className="skill-name">{s.name}</span>
            <div className="bar">
              <div className="bar-fill" data-width={s.level} />
            </div>
            <span className="skill-pct">{s.level}%</span>
          </div>
        ))}
      </div>

      <div className="tools">
        {tools.map((t) => <span className="tool-chip" key={t}>{t}</span>)}
      </div>

    </section>
  )
}