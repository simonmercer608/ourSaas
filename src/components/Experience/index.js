import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { usePortfolio } from "../../context/PortfolioContext";




const formatDate = (input) => {
  if (!input) return "Present";
  const parts = input.split("/");
  if (parts.length < 3) return input;
  const [, month, year] = parts;
  return new Date(`${month}/01/${year}`).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

const getDuration = (start, end) => {
  if (!end) {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    end = `${dd}/${mm}/${yyyy}`;
  }
  const [, sm, sy] = start.split("/").map(Number);
  const [, em, ey] = end.split("/").map(Number);
  const totalMonths = (ey - sy) * 12 + (em - sm) + 1;
  if (totalMonths < 12) return `${totalMonths}m`;
  const years = Math.floor(totalMonths / 12);
  const rem = totalMonths % 12;
  return rem === 0 ? `${years}y` : `${years}y ${rem}m`;
};

// ── Single role row used both for standalone cards and child sub-roles ──
const RoleCard = ({ exp, isChild = false }) => (
  <div className={`flex items-start gap-4 ${isChild ? "" : ""}`}>
    {/* Company logo (only shown on parent) */}
    {!isChild && (
      <div className="flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden bg-black/40 border border-white/10">
        <img
          src={exp.img}
          alt={exp.company}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>
    )}

    <div className="flex-1 min-w-0">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
        <h3
          className={`font-bold ${isChild
              ? "text-slate-200 text-sm sm:text-base"
              : "text-white text-base sm:text-lg"
            }`}
        >
          {exp.role}
        </h3>
        <span className="text-xs text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded-full whitespace-nowrap">
          {getDuration(exp.startDate, exp.present ? null : exp.endDate)}
        </span>
      </div>

      {!isChild && (
        <p className="text-violet-400 font-semibold text-sm mb-0.5">
          {exp.company}
        </p>
      )}

      <p className="text-slate-500 text-xs mb-3">
        {formatDate(exp.startDate)} –{" "}
        {exp.present ? "Present" : formatDate(exp.endDate)}
        {exp.present && (
          <span className="ml-2 text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full text-xs">
            Current
          </span>
        )}
      </p>

      {exp.desc && (
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {exp.desc}
        </p>
      )}

      {exp.skills && exp.skills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {exp.skills.map((skill, si) => (
            <span
              key={si}
              className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 text-slate-300 rounded-lg hover:border-violet-500/40 hover:text-violet-300 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Experience = () => {
  const { experiences, loading, fetchExperiences } = usePortfolio();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (experiences.length === 0) fetchExperiences();
  }, [experiences.length, fetchExperiences]);


  
const myexperiences = [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3cdD4N-8-CFFsKRQtvNyfrbmnQ4emBVHvRw&s",
    role: "Senior PHP Officer",
    company: "Cozentus",
    startDate: "11/08/2025",
    endDate: "",
    present: true,
    desc: "Working on full-stack web applications using PHP, Laravel, Filament, MySQL and PostgreSQL. Contributing to feature development, performance improvements and debugging across client projects. Collaborating with stakeholders to plan enhancements, deliver stable updates and resolve technical issues.",
    skills: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "Postman", "PHPUnit"],
    // doc: "https://drive.google.com/file/d/1DSnPOVgK4huL4Tw1H51-VKPjx6j1fMWH/view?usp=drivesdk",
  },
  {
    id: 1,
    img: "https://web-assets.hyscaler.com/wp-content/uploads-webpc/uploads/2023/03/hyscaler-square-light-bg.png.webp",
    role: "SDE-I",
    company: "Hyscaler",
    startDate: "01/03/2025",
    endDate: "07/08/2025",
    present: false,
    desc: "Promoted to SDE-I for strong technical expertise and consistent project delivery. Building and maintaining full-stack web applications using PHP, Laravel, Filament, MySQL, and PostgreSQL. Collaborating with clients to develop new features, optimize performance, and resolve complex technical issues.",
    skills: [
      "PHP",
      "Laravel",
      "Filament",
      "Nextjs",
      "MySQL",
      "PostgreSQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    doc: "https://drive.google.com/file/d/1DSnPOVgK4huL4Tw1H51-VKPjx6j1fMWH/view?usp=drivesdk",
  },
  {
    id: 2,
    img: "https://web-assets.hyscaler.com/wp-content/uploads-webpc/uploads/2023/03/hyscaler-square-light-bg.png.webp",
    role: "Junior Software Developer",
    company: "Hyscaler",
    startDate: "01/03/2024",
    endDate: "01/02/2025",
    present: false,
    desc: "Developed and maintained client web applications using PHP Laravel framework and FilamentPHP admin panel builder. Built RESTful APIs for various client projects to ensure seamless integration between front-end and back-end systems. Collaborated with senior developers to implement best practices for code quality and application security. Participated in agile development cycles including daily standups and sprint planning sessions.",
    skills: [
      "PHP",
      "Laravel",
      "Filament",
      "MySQL",
      "PostgreSQL",
      "HTML",
      "CSS",
      "JavaScript",
      "REST APIs",
    ],
    doc: "https://drive.google.com/file/d/1DSnPOVgK4huL4Tw1H51-VKPjx6j1fMWH/view?usp=drivesdk",
  },
  {
    id: 3,
    img: "https://web-assets.hyscaler.com/wp-content/uploads-webpc/uploads/2023/03/hyscaler-square-light-bg.png.webp",
    role: "Full-stack Trainee Intern",
    company: "Hyscaler",
    startDate: "01/09/2023",
    endDate: "01/03/2024",
    present: false,
    desc: "Gained hands-on experience with modern full-stack development technologies while working on real client projects. Assisted senior developers in building and maintaining web applications using PHP, Laravel, and FilamentPHP. Developed and optimized database schemas and queries for MySQL and PostgreSQL databases. Participated in code reviews to improve coding skills and understand industry best practices.",
    skills: [
      "PHP",
      "Laravel",
      "Filament",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    doc: "https://drive.google.com/file/d/1DSnPOVgK4huL4Tw1H51-VKPjx6j1fMWH/view?usp=drivesdk",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYOSnVFC2VDDJ9FUKAB2FBdZaAohgEgjiTPfce0S-C&s",
    role: "Full-stack Intern",
    company: "Digital It Web",
    startDate: "01/02/2023",
    endDate: "01/07/2023",
    present: false,
    desc: "Built a comprehensive hospital management system from scratch, handling both frontend and backend development. Recognized as the top performer among interns due to quick learning ability and high-quality deliverables. Implemented responsive UI designs using HTML, CSS, and JavaScript while building a robust backend with PHP and MySQL. Gained valuable experience with React and Docker containerization technologies.",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Docker", "React"],
    doc: "https://drive.google.com/file/d/1PSn0Ix6Ncop_Ky6m2WE-2J22kqejeVU-/view?usp=drivesdk",
  },
];


  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 text-base">My professional journey so far</p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mx-auto" />
        </motion.div>

        {loading.experiences ? (
          <Loader text="Loading experience..." size="60px" minHeight="400px" />
        ) : myexperiences && myexperiences.length > 0 ? (
          <div className="relative">
            {/* Main timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/80 via-violet-500/30 to-transparent hidden sm:block" />

            <div className="flex flex-col gap-8">
              {myexperiences.slice(0, isHome ? 3 : myexperiences.length).map((exp, index) => (
                <motion.div
                  key={exp._id || index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-6 sm:pl-16"
                >
                  {/* Timeline dot */}
                  <div className="hidden sm:flex absolute left-0 top-6 w-12 justify-center">
                    <div className="w-3 h-3 rounded-full bg-violet-500 border-2 border-violet-300 shadow-lg shadow-violet-500/50 mt-0.5" />
                  </div>

                  {/* Outer card */}
                  <motion.div
                    whileHover={{ scale: 1.005, translateY: -2 }}
                    className="glass rounded-2xl p-5 sm:p-6 w-full hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300"
                  >
                    {/* Parent role */}
                    <RoleCard exp={exp} isChild={false} />

                    {/* ── Children (sub-roles / promotions) ── */}
                    {exp.children && exp.children.length > 0 && (
                      <div className="mt-5 ml-4 sm:ml-16 border-l-2 border-violet-500/30 pl-4 flex flex-col gap-4">
                        {exp.children.map((child, ci) => (
                          <motion.div
                            key={child._id || ci}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: ci * 0.08 }}
                            className="relative"
                          >
                            {/* Horizontal connector */}
                            <div className="absolute -left-4 top-4 w-3 h-px bg-violet-500/40" />
                            {/* Small dot on the vertical line */}
                            <div className="absolute -left-[18px] top-[13px] w-2 h-2 rounded-full bg-violet-400/60 border border-violet-300/40" />

                            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                              <RoleCard exp={child} isChild={true} />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {isHome && myexperiences.length > 3 && (
              <div className="mt-12 flex justify-center relative z-20">
                <Link
                  to="/experience"
                  onClick={() => window.scrollTo(0, 0)}
                  className="px-8 py-3 bg-white/5 border border-violet-500/30 hover:bg-violet-500/10 hover:border-violet-500 text-violet-400 hover:text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                >
                  Show All Experience
                </Link>
              </div>
            )}
          </div>
        ) : (
          <p className="text-slate-400 text-center py-10">No experience found</p>
        )}
      </div>
    </section>
  );
};

export default Experience;