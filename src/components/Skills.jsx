import SectionHeading from './SectionHeading'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-white/5 bg-cloud-900/50">
      <SectionHeading
        label="02 — Skills"
        title="Full stack, cloud-first"
        subtitle="Technologies I use daily to design, build, and operate production systems."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            className="glass rounded-2xl p-6 transition hover:border-cloud-accent/20"
          >
            <h3 className="font-mono text-sm text-cloud-accent">{group.category}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-cloud-800/80 px-3 py-1.5 text-sm text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
