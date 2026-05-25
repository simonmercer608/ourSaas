import { profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 px-6 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p>
          © {year} {profile.name}. Built with React & Tailwind.
        </p>
        <p className="font-mono text-xs">
          {profile.title} · {profile.company} · Ashburn, VA
        </p>
      </div>
    </footer>
  )
}
