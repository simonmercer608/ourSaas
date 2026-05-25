import { HiOutlineMail } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-white/5">
      <SectionHeading
        label="05 — Contact"
        title="Let's build something"
        subtitle="Whether it's a role, a contract, or an open-source idea — I'd like to hear from you."
      />

      <div className="glass max-w-2xl rounded-2xl p-8 md:p-10">
        <p className="text-slate-400">
          Based in <span className="text-white">{profile.location}</span>, working
          with teams across US time zones. Typical response within 48 hours.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-3 rounded-lg bg-cloud-accent px-8 py-4 text-lg font-semibold text-cloud-950 transition hover:bg-cyan-300"
        >
          <HiOutlineMail className="text-xl" />
          {profile.email}
        </a>

        <div className="mt-8 flex gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-slate-500 transition hover:text-cloud-accent"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-slate-500 transition hover:text-cloud-accent"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  )
}
