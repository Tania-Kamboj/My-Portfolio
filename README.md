## 📖 About The Project

A single-page portfolio website that introduces me as a **MERN stack web developer**.
Every section is full-screen (100vh), smoothly scrollable, and loaded with meaningful
GSAP animations — from a staggered giant-name intro to scroll-triggered skill bars,
a custom cursor, floating butterflies and an infinite marquee.

### Sections
| # | Section | Highlights |
|---|---------|------------|
|  | **Home / Hero** | Giant "TANIA" typography, centered photo, slanted "Hello!" badge, floating butterflies, full-width marquee |
| 👩💻 | **About Me** | Photo + summary card, soft-skill chips |
| 📊 | **Skills** | Animated knowledge-level bars (theme gradient), tools chips |
| 🗂️ | **Projects** | Portfolio · Wanderlust · RideIndia · Gmail Clone — alternating black/gray cards |
| 💼 | **Experience** | Front-end Developer Intern @ SoftAirTechnology |
| 🎓 | **Education** | B.Tech CSE — Baba Farid Group Of Institutions, Punjab |
| 🏆 | **Achievements** | Leadership · Teamwork · Communication · Content Writing |
| 📬 | **Contact** | Email, phone, location + GitHub / LinkedIn / Resume download |

---

## ✨ Features

- 🦋 Floating **butterflies** instead of boring blobs (GSAP yoyo float + tilt)
- 🖱️ **Custom cursor** — dot + lazy ring, grows on hover, elastic pulse on click
- 📜 **Scroll progress bar** (purple → pink gradient) scrubbed with ScrollTrigger
- 🔤 **Giant Anton typography** with per-letter stagger intro
- 📏 **Every section = 100vh**, content perfectly centered
- ️ **Infinite seamless marquee** (linear ease, duplicated track)
- 📊 **Skill bars grow 0 → %** on scroll with stagger
- 🧭 **Smooth scrolling navbar** powered by `gsap.to` + ScrollToPlugin
- 📱 **Fully responsive** (mobile-friendly navbar, grids, type sizes)
- ⬇️ **Resume download** button wired to `public/resume.pdf`

---

## 🛠️ Tech Stack

| Tech | Use |
|------|-----|
| **React 18 (Vite)** | UI framework & dev server |
| **GSAP 3** | All animations (core + ScrollTrigger + ScrollToPlugin) |
| **CSS3** | Custom styling, CSS variables, responsive design |
| **Google Fonts** | Anton (display) · Poppins (body) · Caveat (handwritten) |

---

## 🎬 GSAP Animation Breakdown

| GSAP Feature | Where It's Used |
|--------------|-----------------|
| `gsap.to()` | Smooth navbar scrolling, butterfly float, marquee loop, card hover pop, scroll progress bar |
| `gsap.from()` | Navbar drop-in, section headings, project/achievement cards, chips, xp/edu cards |
| `gsap.fromTo()` | Hero photo, "Hello!" badge, **skill bars (0% → level%)**, mega headings, contact title |
| **Timelines** | Whole hero intro sequence (letters → photo → badge → text → info) |
| **Easing** | `back.out`, `elastic.out`, `power3.out`, `power4.out`, `sine.inOut`, `power2.inOut`, `none` |
| **Stagger** | Giant letters, cards, chips, tool-chips, skill rows, bars |
| **ScrollTrigger** | Every section reveal + `scrub` progress bar |
| **ScrollToPlugin** | Navbar + "View More" smooth scrolling |
| **quickTo** | Custom cursor dot & ring following the mouse |

---
