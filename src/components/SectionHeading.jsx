export default function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="font-mono text-sm uppercase tracking-widest text-cloud-accent">
        {label}
      </p>
      <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-slate-400">{subtitle}</p>
      )}
    </div>
  )
}
