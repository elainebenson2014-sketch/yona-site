import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Check, Menu, X, Mail } from 'lucide-react'
import Dove from './components/Dove'
import { APPS, SERVICES, COURSES, PRICING } from './content'

const NAV = [
  ['Work', '#work'],
  ['Services', '#services'],
  ['Courses', '#courses'],
  ['Pricing', '#pricing'],
  ['Contact', '#contact'],
]

export default function App() {
  const [menu, setMenu] = useState(false)
  return (
    <div className="min-h-screen">
      <Header menu={menu} setMenu={setMenu} />
      <Hero />
      <Story />
      <Work />
      <Services />
      <Courses />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

function Header({ menu, setMenu }) {
  return (
    <header className="sticky top-0 z-40 border-b border-ivory/10 bg-forest/85 backdrop-blur">
      <div className="wrap flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <Dove size={30} className="text-gold" />
          <span className="font-display text-lg font-medium tracking-tight">Yona Enterprises</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-sage">
          {NAV.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-ivory">{label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex btn-gold py-2 px-5">Start a project</a>
        <button className="md:hidden text-ivory" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? <X /> : <Menu />}</button>
      </div>
      {menu && (
        <div className="md:hidden border-t border-ivory/10 bg-pine">
          <div className="wrap flex flex-col py-3">
            {NAV.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenu(false)} className="py-2.5 text-sage hover:text-ivory">{label}</a>
            ))}
            <a href="#contact" onClick={() => setMenu(false)} className="btn-gold mt-2">Start a project</a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* ambient gold glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #C9A227 0%, transparent 70%)' }} />
      <div className="wrap relative grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="eyebrow"><span className="h-px w-6 bg-gold" /> Yona · the dove, sent out</p>
          <h1 className="mt-5 font-display text-5xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl">
            Faith-rooted software,<br /><span className="text-gold">sent to serve.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sage">
            Yona Enterprises builds and runs software for ministries and the marketplace — event
            platforms, church tools, learning systems, and financial apps that carry a mission
            further than a spreadsheet ever could.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn-gold">See our work <ArrowRight size={16} /></a>
            <a href="#contact" className="btn-line">Start a project</a>
          </div>
        </div>
        <div className="relative grid place-items-center">
          <div className="absolute inset-0 rounded-full border border-gold/20" />
          <div className="absolute inset-8 rounded-full border border-gold/10" />
          <Dove size={220} className="relative text-gold" />
        </div>
      </div>
    </section>
  )
}

function Story() {
  return (
    <section className="border-y border-ivory/10 bg-pine/40">
      <div className="wrap grid gap-10 py-16 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <p className="eyebrow"><span className="h-px w-6 bg-gold" /> Who we are</p>
        <div>
          <h2 className="font-display text-3xl font-medium leading-snug sm:text-4xl">
            A software company with a ministry’s heart and a builder’s hands.
          </h2>
          <div className="mt-6 grid gap-6 text-sage sm:grid-cols-2">
            <p>Yona Enterprises owns and operates a growing family of applications used by churches,
              schools, nonprofits, and businesses. We build the tools ourselves, run them on modern
              infrastructure, and keep each organization’s people, giving, and records where they belong.</p>
            <p>The name Yona means dove — the one sent out and returning with a sign that the waters
              have receded. That’s how we think about what we make: built with care, sent into the
              world to do good work, and answerable for what it brings back.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="wrap py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow"><span className="h-px w-6 bg-gold" /> The work</p>
          <h2 className="mt-4 font-display text-4xl font-medium">What we’ve sent out</h2>
        </div>
        <p className="max-w-sm text-sage">A portfolio of live applications, each built for a real need across ministry and the marketplace.</p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {APPS.map((a) => {
          const Tag = a.url ? 'a' : 'div'
          return (
            <Tag key={a.name} {...(a.url ? { href: a.url, target: '_blank', rel: 'noreferrer' } : {})} className="card group flex flex-col">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-[10px]">{a.tag}</span>
                {a.url ? <ArrowUpRight size={16} className="text-sage transition group-hover:text-gold" /> : <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-semibold text-gold">Coming soon</span>}
              </div>
              <h3 className="mt-3 font-display text-xl font-medium">{a.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sage">{a.desc}</p>
            </Tag>
          )
        })}
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="border-y border-ivory/10 bg-pine/40">
      <div className="wrap py-20">
        <p className="eyebrow"><span className="h-px w-6 bg-gold" /> Services</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium">We build for others, too.</h2>
        <p className="mt-3 max-w-2xl text-sage">If your ministry or business needs software that doesn’t exist yet, we can design, build, and launch it with you.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {SERVICES.map((s) => (
            <div key={s.title} className="card">
              <h3 className="font-display text-xl font-medium">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sage">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Courses() {
  return (
    <section id="courses" className="wrap py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow"><span className="h-px w-6 bg-gold" /> Courses</p>
          <h2 className="mt-4 font-display text-4xl font-medium">Learn to build it yourself</h2>
        </div>
        <p className="max-w-sm text-sage">Practical teaching for leaders who want to create and run their own tools.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {COURSES.map((c, i) => (
          <div key={c.title} className="card flex flex-col">
            <span className="font-display text-3xl text-gold/70">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-3 font-display text-xl font-medium">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-sage">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="border-y border-ivory/10 bg-pine/40">
      <div className="wrap py-20">
        <p className="eyebrow"><span className="h-px w-6 bg-gold" /> Pricing</p>
        <h2 className="mt-4 font-display text-4xl font-medium">Ways to work together</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {PRICING.map((p) => (
            <div key={p.name} className={`card flex flex-col ${p.best ? 'border-gold/60 bg-pine' : ''}`}>
              {p.best && <span className="mb-3 inline-flex w-fit rounded-full bg-gold px-3 py-1 text-[11px] font-semibold text-forest">Most popular</span>}
              <h3 className="font-display text-2xl font-medium">{p.name}</h3>
              <p className="mt-1 text-sm text-sage">{p.blurb}</p>
              <div className="mt-5 flex items-end gap-1.5">
                <span className="font-display text-4xl font-medium text-gold">{p.price}</span>
                <span className="pb-1 text-sm text-sage">/ {p.cadence}</span>
              </div>
              <ul className="mt-5 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0 text-gold" /> <span className="text-ivory/90">{f}</span></li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 ${p.best ? 'btn-gold' : 'btn-line'}`}>Get started</a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-sage">Every project is a little different. Tell us what you need and we’ll send a clear quote.</p>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', org: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')
  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }))

  async function submit() {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) { setError('Please add your name, email, and a short message.'); return }
    setStatus('sending'); setError('')
    try {
      const resp = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await resp.json()
      if (!resp.ok) { setError(data.error || 'Something went wrong. Please email us directly.'); setStatus('error'); return }
      setStatus('sent')
    } catch { setError('Could not reach the server. Please email us directly.'); setStatus('error') }
  }

  return (
    <section id="contact" className="wrap py-20">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="eyebrow"><span className="h-px w-6 bg-gold" /> Contact</p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight">Tell us what you’re building.</h2>
          <p className="mt-4 max-w-md text-sage">Whether it’s a single tool or a full platform, share a little about your ministry or business and we’ll get back to you with next steps.</p>
          <div className="mt-8 flex items-center gap-2 text-sage">
            <Mail size={17} className="text-gold" /> hello@yona-enterprises.com
          </div>
        </div>
        <div className="card">
          {status === 'sent' ? (
            <div className="py-10 text-center">
              <Dove size={54} className="mx-auto text-gold" />
              <h3 className="mt-4 font-display text-2xl">Message sent</h3>
              <p className="mt-2 text-sage">Thank you — we’ll be in touch soon.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="field" placeholder="Your name" value={form.name} onChange={(e) => set('name', e.target.value)} />
                <input className="field" placeholder="Email" value={form.email} onChange={(e) => set('email', e.target.value)} />
              </div>
              <input className="field" placeholder="Ministry or business (optional)" value={form.org} onChange={(e) => set('org', e.target.value)} />
              <textarea className="field min-h-[130px]" placeholder="What are you hoping to build?" value={form.message} onChange={(e) => set('message', e.target.value)} />
              {error && <p className="text-sm text-red-300">{error}</p>}
              <button onClick={submit} disabled={status === 'sending'} className="btn-gold w-full">
                {status === 'sending' ? 'Sending…' : 'Send message'} <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-ivory/10">
      <div className="wrap flex flex-col items-center justify-between gap-4 py-10 text-sm text-sage sm:flex-row">
        <div className="flex items-center gap-2.5">
          <Dove size={22} className="text-gold" />
          <span className="font-display text-ivory">Yona Enterprises LLC</span>
        </div>
        <p>Faith-rooted software, sent to serve.</p>
        <p>&copy; {new Date().getFullYear()} Yona Enterprises LLC</p>
      </div>
    </footer>
  )
}
