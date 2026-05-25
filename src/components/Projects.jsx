import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="section-pad border-t border-white/5 bg-cloud-900/50">
      <SectionHeading
        label="04 — Projects"
        title="Selected work"
        subtitle="Platforms, tools, and interfaces built for scale and clarity."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group glass flex flex-col rounded-2xl p-6 transition hover:border-cloud-accent/25 hover:bg-white/[0.07]"
          >
            <h3 className="text-xl font-semibold text-white group-hover:text-cloud-accent transition-colors">
              {project.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="font-mono text-xs text-slate-500"
                >
                  #{t}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-4">
              <a
                href={project.link}
                className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-cloud-accent"
              >
                <FaExternalLinkAlt className="text-xs" />
                Live demo
              </a>
              <a
                href={project.github}
                className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-cloud-accent"
              >
                <FaGithub />
                Source
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
