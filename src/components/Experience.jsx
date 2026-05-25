import SectionHeading from './SectionHeading'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section-pad border-t border-white/5">
      <SectionHeading
        label="03 — Experience"
        title="Where I have shipped"
        subtitle="From startups to enterprise cloud — building products end to end."
      />

      <div className="relative space-y-0">
        <div
          className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cloud-accent/60 via-cloud-500/30 to-transparent md:block"
          aria-hidden
        />

        {experience.map((job, index) => (
          <article
            key={job.company + job.period}
            className="relative grid gap-4 pb-12 md:grid-cols-[1fr_2fr] md:gap-10 md:pb-14"
          >
            <div className="flex gap-4 md:block">
              <span
                className="mt-1.5 hidden h-3.5 w-3.5 shrink-0 rounded-full border-2 border-cloud-accent bg-cloud-950 md:block"
                aria-hidden
              />
              <div>
                <p className="font-mono text-sm text-cloud-accent">{job.period}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{job.role}</h3>
                <p className="text-slate-300">{job.company}</p>
                <p className="text-sm text-slate-500">{job.location}</p>
              </div>
            </div>

            <ul className="space-y-3 border-l border-white/10 pl-6 md:border-0 md:pl-0">
              {job.highlights.map((item) => (
                <li
                  key={item}
                  className="relative text-slate-400 leading-relaxed before:absolute before:-left-6 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-cloud-500/60 md:before:hidden"
                >
                  {item}
                </li>
              ))}
            </ul>

            {index < experience.length - 1 && (
              <hr className="col-span-full border-white/5 md:hidden" />
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
