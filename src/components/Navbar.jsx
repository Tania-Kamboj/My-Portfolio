import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

const LINKS = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.navbar .pill', { y: -70, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'back.out(1.7)' })
    })
    return () => ctx.revert()
  }, [])

 const goTo = (name) => {
    setActive(name)
    gsap.to(window, { duration: 1, ease: 'power2.inOut', scrollTo: { y: '#' + name.toLowerCase(), offsetY: 80 } })
  }

  return (
    <nav className="navbar">
      <div className="pill">
        <span className="menu-icon">☰</span>
        {LINKS.map((l) => (
          <button key={l} className={'nav-link' + (active === l ? ' active' : '')} onClick={() => goTo(l)}>
            {l}
          </button>
        ))}
      </div>
      <div className="pill">
        <a className="resume-link" href="/resume.pdf" download>Resume &#8595;</a>
        <span className="nav-name">Tania</span>
      </div>
    </nav>
  )
}