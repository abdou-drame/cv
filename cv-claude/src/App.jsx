import React, {useEffect, useRef} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const data = {
  name: 'Abdoulaye Drame',
  title: 'Dev Full Stack — Étudiant L3 Génie Logiciel',
  about: `Étudiant passionné en fin de cycle de Licence en Génie Logiciel, je maîtrise les technologies web et mobiles, notamment Laravel, React.js et Flutter. Autonome et rigoureux, j'ai concrétisé plusieurs applications fonctionnelles telles que des plateformes de QCM, de gestion de stock, et de livraison entre particuliers (Terrangafood). Je recherche un stage pour mettre mes compétences au service d'une équipe dynamique.`,
  experiences: [
    {period:'2023', role:'Concepteur Développeur', company:'Terrangafood', desc:'Création d\'une plateforme de gestion et réservation pour services de proximité. Architecture, flux de livraison et interfaces.'},
    {period:'2022', role:'Projet QCM', company:'Projet Universitaire', desc:'Plateforme de QCM en ligne avec gestion d\'utilisateurs et reporting.'},
    {period:'2021', role:'Gestion de stock', company:'Projet perso', desc:'Application de gestion de stock avec alertes et rapports.'}
  ],
  skills: [
    {name:'Laravel (PHP)', level:90},
    {name:'React.js', level:85},
    {name:'Flutter', level:80},
    {name:'MySQL/Postgres', level:78},
    {name:'Docker & Git', level:75}
  ],
  education: [
    {year:'2022-2026', degree:"Licence Génie Logiciel", school:'Université (en cours)'}
  ],
  photo: '/profile.png',
  socials: {
    email:'abdoudrame0418@gmail.com', phone:'774979236', github:'', linkedin:''
  }
}

export default function App(){
  const heroRef = useRef()
  useEffect(()=>{
    const ctx = gsap.context(()=>{
      gsap.from('.hero .stagger', {y:24, opacity:0, stagger:0.12, ease:'power3.out', duration:0.8})
      gsap.utils.toArray('.reveal').forEach((el,i)=>{
        gsap.from(el,{y:30,opacity:0,scrollTrigger:{trigger:el, start:'top 80%', toggleActions:'play none none reverse'}, duration:0.8, ease:'power2.out', delay:i*0.06})
      })
    }, heroRef)
    return ()=>ctx.revert()
  },[])

  // download CTA removed per request

  return (
    <div>
      <div className="noise-overlay" aria-hidden dangerouslySetInnerHTML={{__html:`<svg width="0" height="0" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/></filter></svg>`}} />

      <nav className="fixed left-1/2 -translate-x-1/2 top-6 backdrop-blur-xl px-4 py-2 pill flex items-center gap-4 z-50" style={{background:'rgba(10,10,12,0.35)', border:'1px solid rgba(212,168,67,0.12)'}}>
        <div className="font-bold">AD</div>
        <a href="#about" className="text-sm opacity-85">A propos</a>
        <a href="#exp" className="text-sm opacity-85">Experience</a>
        <a href="#skills" className="text-sm opacity-85">Competences</a>
        <a href={`mailto:${data.socials.email}`} className="ml-2 text-[var(--accent)] text-sm btn-magnet">Me contacter</a>
      </nav>

      <header className="hero" ref={heroRef} style={{background:'radial-gradient(1400px 500px at 15% 20%, rgba(212,168,67,0.08), transparent), radial-gradient(800px 800px at 90% 25%, rgba(255,255,255,0.08), transparent), linear-gradient(180deg, rgba(7,7,10,0.95), rgba(7,7,10,0.72))', paddingTop:80}}>
        <div className="container grid md:grid-cols-[1.7fr_1fr] gap-10 items-center relative">
          <div className="md:relative">
            <div className="stagger">
              <div className="inline-flex items-center gap-3 mb-4 text-xs uppercase tracking-[0.4em] text-[rgba(212,168,67,0.85)] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] block"></span>
                Stage Full Stack
              </div>
              <h1 className="text-5xl md:text-[5.5rem] leading-tight font-semibold">{data.name}</h1>
              <p className="italic mt-4 text-xl max-w-2xl leading-9">{data.title}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3 text-sm font-mono text-[rgba(255,255,255,0.78)]">
                <div className="bg-white/5 px-4 py-3 rounded-[1.5rem]">Étudiant</div>
                <div className="bg-white/5 px-4 py-3 rounded-[1.5rem]">3 projets majeurs</div>
                <div className="bg-white/5 px-4 py-3 rounded-[1.5rem]">Stage recherché</div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${data.socials.email}`} className="btn-magnet bg-[var(--accent)] text-black px-5 py-3 rounded-[1.5rem] accent-glow">Me contacter</a>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border border-[rgba(212,168,67,0.12)] shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img src={data.photo} alt={`${data.name} visage`} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      <main className="container space-y-16 py-16">
        <section id="about" className="reveal bg-white/4 p-8 card">
          <div className="md:flex md:gap-6">
            <h2 className="section-title md:w-1/4">À propos</h2>
            <div className="md:flex-1 text-lg">{data.about}</div>
          </div>
        </section>

        <section id="exp" className="reveal">
          <h2 className="section-title">Experience</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-10 bottom-10 left-8 w-px bg-[rgba(212,168,67,0.14)] z-0" />
            <div className="space-y-8">
              {data.experiences.map((e,i)=> (
                <article key={i} className="relative z-10 reveal p-8 bg-[rgba(15,15,22,0.92)] border border-white/10 shadow-2xl timeline-card flex gap-6">
                  <div className="hidden md:flex flex-col items-center">
                    <span className="block w-3 h-3 rounded-full bg-[var(--accent)] border border-black"></span>
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-[var(--accent)] uppercase tracking-[0.2em] text-xs">{e.period}</div>
                    <div className="text-2xl font-semibold mt-2">{e.role}</div>
                    <div className="text-sm opacity-80 mt-1">{e.company}</div>
                    <div className="mt-4 text-[0.98rem] leading-7 opacity-90">{e.desc}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="reveal bg-[rgba(255,255,255,0.06)] p-8 card">
          <h2 className="section-title">Compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.skills.map((s,i)=>{
              const radius = 40
              const circumference = 2 * Math.PI * radius
              const offset = circumference * (1 - s.level / 100)
              return (
                <div key={i} className="p-6 bg-[rgba(15,15,22,0.9)] border border-white/10 card shadow-[0_20px_50px_rgba(0,0,0,0.14)]">
                  <div className="mb-5">
                    <div className="text-sm opacity-80 uppercase tracking-[0.22em]">{s.name}</div>
                    <div className="text-2xl font-semibold mt-2 text-[var(--accent)]">{s.level}%</div>
                  </div>
                  <div className="mx-auto mb-5 w-[100px] h-[100px] relative">
                    <svg viewBox="0 0 120 120" className="w-full h-full">
                      <circle cx="60" cy="60" r={radius} fill="transparent" stroke="rgba(255,255,255,0.08)" strokeWidth="10"/>
                      <circle cx="60" cy="60" r={radius} fill="transparent" stroke="var(--accent)" strokeWidth="10" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} transform="rotate(-90 60 60)"/>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold">Niveau</div>
                  </div>
                  <p className="text-sm leading-7 opacity-75">Compétence technique fiable, livrant des interfaces et des API proprement architecturées.</p>
                </div>
              )
            })}
          </div>
        </section>

        <section id="education" className="reveal">
          <h2 className="section-title">Formation</h2>
          <div className="space-y-4">
            {data.education.map((ed,i)=> (
              <div key={i} className="p-4 bg-white/3 card flex items-center justify-between">
                <div className="font-mono text-[var(--accent)]">{ed.year}</div>
                <div className="ml-4"> <div className="font-semibold">{ed.degree}</div><div className="opacity-80">{ed.school}</div></div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="reveal bg-[rgba(212,168,67,0.95)] text-black p-8 card">
          <h2 className="section-title">Travaillons ensemble</h2>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <a className="flex items-center gap-2 lift text-[var(--accent)]" href={`mailto:${data.socials.email}`}><Mail size={18}/> {data.socials.email}</a>
              <a className="flex items-center gap-2 lift text-[var(--accent)]" href={`tel:${data.socials.phone}`}>📞 {data.socials.phone}</a>
            </div>
            <div>
              <a className="btn-magnet bg-black/10 px-4 py-2 rounded-md" href={`mailto:${data.socials.email}`}>Envoyer un message</a>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-black/90 text-white p-8 card-lg mt-12">
        <div className="container flex items-center justify-between">
          <div>{data.name} — Fait avec le vibe coding • {new Date().getFullYear()}</div>
          <div className="font-mono flex items-center gap-2"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> En ligne</div>
        </div>
      </footer>
    </div>
  )
}
