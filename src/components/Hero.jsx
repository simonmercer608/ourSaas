import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cloud-500/20 blur-[120px]" />
        <div className="absolute -right-24 bottom-32 h-80 w-80 rounded-full bg-cloud-accent/15 blur-[100px]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="section-pad relative flex min-h-[calc(100vh-6rem)] flex-col justify-center">
        <p
          className="animate-fade-up font-mono text-sm text-cloud-accent opacity-0"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
        >
          {profile.company} · {profile.location}
        </p>

        <h1
          className="animate-fade-up mt-4 text-5xl font-bold tracking-tight text-white opacity-0 md:text-7xl"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          {profile.name}
        </h1>

        <p
          className="animate-fade-up mt-2 text-2xl font-medium text-gradient opacity-0 md:text-3xl"
          style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
        >
          {profile.title}
        </p>

        <p
          className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 opacity-0"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          {profile.tagline}
        </p>

        <div
          className="animate-fade-up mt-8 flex flex-wrap items-center gap-4 opacity-0"
          style={{ animationDelay: '0.65s', animationFillMode: 'forwards' }}
        >
          <a
            href={`#contact`}
            className="rounded-lg bg-cloud-accent px-6 py-3 text-sm font-semibold text-cloud-950 transition hover:bg-cyan-300"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="glass rounded-lg px-6 py-3 text-sm font-medium text-white transition hover:border-cloud-accent/40 hover:bg-white/10"
          >
            View projects
          </a>
        </div>

        <div
          className="animate-fade-up mt-12 flex flex-wrap gap-6 text-sm text-slate-500 opacity-0"
          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
        >
          <span className="flex items-center gap-2">
            <HiOutlineLocationMarker className="text-cloud-accent" />
            {profile.location}
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 transition hover:text-cloud-accent"
          >
            <HiOutlineMail />
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-cloud-accent"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-cloud-accent"
          >
            <FaLinkedinIn />
            LinkedIn
          </a>
        </div>

        <div
          className="animate-float absolute right-8 top-1/3 hidden h-32 w-32 rounded-2xl glass p-4 lg:block"
          aria-hidden
        >
          <pre className="font-mono text-[10px] leading-relaxed text-cloud-accent/80">
            {`const dev = {
  name: "Simon",
  stack: "full",
  region: "us-east-1",
  status: "shipping"
}`}
          </pre>
        </div>
      </div>
    </section>
  )
}
