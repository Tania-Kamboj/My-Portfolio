import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin);
const HALF = '✦ MERN STACK ✦ WEB DEVELOPER ✦ REACT '.repeat(4)

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.giant-letter', { y: 140, opacity: 0, stagger: 0.08, duration: 0.9, ease: 'back.out(1.4)' })
        .fromTo('.hero-photo',
          { opacity: 0, scale: 0.90, y: 50 },
          { opacity: 1, scale: 1, y: 0, duration: 0.9 }, '-=0.4')
        .fromTo('.hello-badge',
          { opacity: 0, scale: 0.8, rotate: -20 },
          { opacity: 1, scale: 1, rotate: -6, duration: 0.8, ease: 'elastic.out(1, 0.5)' }, '-=0.5')
        .from('.hero-line', { y: 30, opacity: 0, stagger: 0.15, duration: 0.6 }, '-=0.3')
        .from('.hero-info span', { y: 15, opacity: 0, stagger: 0.1, duration: 0.4 }, '-=0.2')

      gsap.to('.butterfly', {
        y: -30,
        rotation: 10,
        duration: 2.8,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.4,
      })

      gsap.to('.bf-2', { x: 25, duration: 4, ease: 'sine.inOut', yoyo: true, repeat: -1 })      
      gsap.to('.marquee-track', { xPercent: -50, ease: 'none', duration: 22, repeat: -1 })
    }, ref)
    return () => ctx.revert()
  }, [])

  const scrollToAbout = () => {
    gsap.to(window, { duration: 1, ease: 'power2.inOut', scrollTo: { y: '#about', offsetY: 80 } })
  }

  return (
    <section className="hero" id="home" ref={ref}>
      <img className="butterfly bf-1" src="/butterfly.png" alt="" />
      <img className="butterfly bf-2" src="/butterfly.png" alt="" />
      <img className="butterfly bf-3" src="/butterfly.png" alt="" />

      <div className="hero-section">
        <div className="giant-wrap">
          <h1 className="giant">
            {'TANIA'.split('').map((ch, i) => (
              <span className="giant-letter" key={i}>{ch}</span>
            ))}
          </h1>
          <div className="hello-badge">Hello!</div>
        </div>
        <img className="hero-photo" src="/hero.png" alt="Tania" />
        <p className="spaced hero-line">WEB DEVELOPER</p>
      </div>

      <p className="hero-intro hero-line">
        I'm Tania — a MERN stack developer who loves turning Figma designs into clean,
        responsive websites. Welcome to my portfolio..!
      </p>

      <div className="hero-bottom">
        <button className="btn" onClick={scrollToAbout}>View More &#8595;</button>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          <span>&#11044; MERN STACK &#11044; WEB DEVELOPER &#11044; REACT &#11044; MERN STACK &#11044; WEB DEVELOPER &#11044; REACT &#11044; MERN STACK &#11044; WEB DEVELOPER &nbsp;</span>
          <span>&#11044; MERN STACK &#11044; WEB DEVELOPER &#11044; REACT &#11044; MERN STACK &#11044; WEB DEVELOPER &#11044; REACT &#11044; MERN STACK &#11044; WEB DEVELOPER &nbsp;</span>
        </div>
      </div>
    </section>
  )
}