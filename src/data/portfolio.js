export const profile = {
  name: 'Simon Mercer',
  title: 'Full Stack Developer',
  tagline:
    'Building reliable, cloud-native products from APIs to interfaces — with a focus on performance at scale.',
  location: 'Ashburn, Virginia, USA',
  company: 'Tier10 Cloud',
  companyRole: 'Full Stack Developer',
  email: 'simon.mercer@email.com',
  github: 'https://github.com/simonmercer',
  linkedin: 'https://linkedin.com/in/simonmercer',
  availability: 'Open to interesting collaborations',
}

export const about = [
  'I am a Full Stack Developer at Tier10 Cloud, a US cloud infrastructure company headquartered in Ashburn — the heart of Data Center Alley. I ship features across distributed systems, internal platforms, and customer-facing dashboards.',
  'My work spans React and TypeScript on the front end, Node.js and Go on services, and AWS-native patterns for deployment, observability, and resilience. I care about clean APIs, thoughtful UX, and code that teams can maintain for years.',
  'When I am not in the IDE, I contribute to internal developer tooling, mentor junior engineers, and stay current on cloud-native standards.',
]

export const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'WebSockets'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Go', 'Python', 'REST & GraphQL', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Prometheus'],
  },
  {
    category: 'Practices',
    items: ['System Design', 'TDD', 'Agile', 'Code Review', 'Technical Writing'],
  },
]

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Tier10 Cloud',
    location: 'Ashburn, VA',
    period: '2022 — Present',
    highlights: [
      'Led migration of customer control plane to React + TypeScript, cutting page load time by 40%.',
      'Designed event-driven billing microservice handling 2M+ daily transactions on AWS.',
      'Built internal CLI and dashboard for multi-region deployment visibility.',
      'Partnered with SRE on SLI/SLO dashboards and incident runbooks.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'NovaStack Solutions',
    location: 'Reston, VA',
    period: '2019 — 2022',
    highlights: [
      'Developed B2B SaaS analytics platform used by 120+ enterprise clients.',
      'Implemented role-based access control and audit logging for compliance workloads.',
      'Reduced API latency 35% through query optimization and caching layers.',
    ],
  },
  {
    role: 'Junior Developer',
    company: 'Capitol Digital',
    location: 'Washington, DC',
    period: '2017 — 2019',
    highlights: [
      'Maintained client portals and CMS integrations for government contractors.',
      'Introduced automated testing pipeline, improving release confidence.',
    ],
  },
]

export const projects = [
  {
    title: 'RegionWatch',
    description:
      'Real-time multi-region health dashboard for cloud operations teams. Aggregates metrics from Prometheus and custom agents with drill-down per availability zone.',
    tech: ['React', 'Go', 'WebSockets', 'AWS', 'Grafana'],
    link: '#',
    github: '#',
  },
  {
    title: 'DeployFlow',
    description:
      'GitOps-style deployment orchestrator with approval gates, rollback automation, and Slack notifications for Tier10 internal services.',
    tech: ['Node.js', 'Docker', 'Kubernetes', 'GitHub Actions'],
    link: '#',
    github: '#',
  },
  {
    title: 'EdgeCache Configurator',
    description:
      'Self-service UI for CDN cache rules and purge workflows. Cuts support tickets by letting customers manage edge behavior without tickets.',
    tech: ['TypeScript', 'Next.js', 'Redis', 'CloudFront'],
    link: '#',
    github: '#',
  },
  {
    title: 'Open Metrics Kit',
    description:
      'Lightweight OSS library for standardized application metrics in Node and Go services. Adopted by three internal platform teams.',
    tech: ['Go', 'Node.js', 'OpenTelemetry'],
    link: '#',
    github: '#',
  },
]

export const education = {
  degree: 'B.S. Computer Science',
  school: 'Virginia Tech',
  period: '2013 — 2017',
  note: 'Focus on distributed systems and software engineering.',
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
