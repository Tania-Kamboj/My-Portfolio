import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const softSkills = ['Leadership', 'Teamwork', 'Communication', 'Content Writing']

export default function About() {
    const ref = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about .section-head > *', {
                y: 40, opacity: 0, stagger: 0.15, duration: 0.7, ease: 'power3.out',
                scrollTrigger: { trigger: '.about', start: 'top 75%' },
            })
            gsap.from('.about-card', {
                y: 70, opacity: 0, duration: 0.9, ease: 'power3.out',
                scrollTrigger: { trigger: '.about-card', start: 'top 80%' },
            })
            gsap.from('.chip', {
                scale: 0, opacity: 0, stagger: 0.08, duration: 0.5, ease: 'back.out(2)',
                scrollTrigger: { trigger: '.chips', start: 'top 88%' },
            })
        }, ref)
        return () => ctx.revert()
    }, [])

    return (
        <section className="about" id="about" ref={ref}>
            <div className="section-head">
                <span className="sec-no">01</span>
                <h2 className="sec-title">ABOUT ME</h2>
            </div>

            <div className="about-card">
                <img className="about-photo" src="/about.png" alt="Tania" />
                <div>
                    <h3>Web developer building simple and reliable applications</h3>
                    <p>
                        Over the last few years, I’ve grown from writing basic programs to building full web applications based on original ideas from my own experiences. I started with core programming and gradually moved into real-world projects using the MERN stack.

                        I’ve learned how to structure code and turn designs into functional interfaces. My internship and project building experience helped me understand team workflows, writing clean code, fixing bugs, and improving existing features.

                        Most of my growth came from building projects, making mistakes, and learning from them. Now, I focus on writing simple, maintainable code and building applications that are genuinely useful.
                    </p>
                    <div className="chips">
                        {softSkills.map((s) => <span className="chip" key={s}>{s}</span>)}
                    </div>
                </div>
            </div>
        </section>
    )
}