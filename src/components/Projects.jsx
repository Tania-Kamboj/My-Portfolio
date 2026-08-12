import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { title: 'BHAJAN GYAN EDUCATION', desc: 'Complete working website built for college students by providing them the all resources needed for study built in MERN stack.', tags: ['React', 'MongoDB', 'Node.js', 'Express'] },
  { title: 'AIRBNB', desc: 'Property listing web app with search, filtering and a full booking flow on the MERN stack.', tags: ['Node.js', 'Express', 'MongoDB'] },
  { title: 'RIDEINDIA', desc: 'A travel companion web app for bike riders travelling across the india by helping them find the hideen spots and added many more features for their convinience.', tags: ['Mobile-first', 'UI Design'] },
  { title: 'GMAIL CLONE', desc: 'Email inbox interface with React Router navigation and basic CRUD operations for emails.', tags: ['React', 'Tailwind', 'Firebase'] },
]

export default function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        y: 80, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.projects-grid', start: 'top 75%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const hover = (e, up) => gsap.to(e.currentTarget, { scale: up ? 1.03 : 1, duration: 0.3, ease: 'power2.out' })

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="section-head">
        <span className="sec-no">03</span>
        <h2 className="sec-title">PROJECTS</h2>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className={'project-card ' + (i % 2 === 0 ? 'dark' : 'light')}
            onMouseEnter={(e) => hover(e, true)}
            onMouseLeave={(e) => hover(e, false)}
          >
            <span className="project-no">0{i + 1}</span>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="tags">{p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}