import SectionHeading from './SectionHeading'
import { about, education, profile } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-white/5">
      <SectionHeading
        label="01 — About"
        title="Engineering at the edge of the cloud"
        subtitle={`${profile.companyRole} at ${profile.company}, based in ${profile.location}.`}
      />

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          {about.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="leading-relaxed text-slate-400">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="glass h-fit rounded-2xl p-6">
          <h3 className="font-mono text-xs uppercase tracking-wider text-cloud-accent">
            Education
          </h3>
          <p className="mt-4 text-lg font-semibold text-white">
            {education.degree}
          </p>
          <p className="text-slate-400">{education.school}</p>
          <p className="mt-1 font-mono text-sm text-slate-500">{education.period}</p>
          <p className="mt-4 text-sm text-slate-500">{education.note}</p>

          <div className="mt-8 border-t border-white/10 pt-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-cloud-accent">
              Currently
            </h3>
            <p className="mt-3 text-white">{profile.companyRole}</p>
            <p className="text-slate-400">{profile.company}</p>
            <p className="mt-1 text-sm text-slate-500">{profile.availability}</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
