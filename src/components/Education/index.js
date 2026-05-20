import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { usePortfolio } from "../../context/PortfolioContext";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const { education, fetchEducation } = usePortfolio();

  useEffect(() => {
    if (education.length === 0) fetchEducation();
  }, [education.length, fetchEducation]);

  const myeducation = [
  {
    id: 0,
    img: require("../../Image/trident.png"),
    school: "Trident Academy of Technology",
    date: "Aug 2019 - July 2023",
    grade: "8.02 CGPA",
    percentage: "80.2%",
    desc: "Completed my Bachelor's degree in Computer Science and Engineering with a strong academic record of 8.02 CGPA (80.2%). Took advanced courses in Object-Oriented Programming, Database Management Systems, Operating Systems, and web development technologies including JavaScript and PHP. Active member of the Cisco Developers Student Club (CiscoDSC), where I collaborated on innovative projects with fellow tech enthusiasts and expanded my practical coding skills beyond the classroom curriculum.",
    degree: "Bachelor of Technology-BTech, Computer Science and Engineering"
  },
  {
    id: 1,
    img: require("../../Image/rcst.jpeg"),
    school: "Royal College of Science and Technology, Bhubaneswar",
    date: "Apr 2017 - Apr 2019",
    grade: "A",
    percentage: "69.0%",
    desc: "Completed my higher secondary education (12th) with Science and Computer specialization, securing an A grade. Developed strong analytical and problem-solving skills through rigorous coursework in mathematics, physics, and computer science. Participated in several technical workshops and coding competitions that sparked my interest in software development and laid the foundation for my future academic pursuits.",
    degree: "CHSE(XII), Science with Computer"
  },
  {
    id: 2,
    img: require("../../Image/ssvm.jpeg"),
    school: "Saraswati Shisu Vidya Mandir, Jajpur",
    date: "Apr 2016 - Apr 2017",
    grade: "A",
    percentage: "77.0%",
    desc: "Completed my secondary education (10th) with an A grade, establishing a solid academic foundation. Developed essential skills in critical thinking, time management, and effective communication. Participated actively in extracurricular activities including science exhibitions and mathematics competitions, which helped nurture my analytical abilities and passion for technology.",
    degree: "BSE(X)",
  },
];
  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-slate-400 text-base">Academic background & qualifications</p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mx-auto" />
        </motion.div>

        {
         myeducation && myeducation.length > 0 ? (
          <div className="flex flex-col gap-6">
            {myeducation.map((edu, index) => (
              <motion.div
                key={edu.id || index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="glass rounded-2xl p-5 sm:p-6 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Institution logo */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
                    {edu.img ? (
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.innerHTML = `<span class="text-violet-400 text-2xl">🎓</span>`;
                        }}
                      />
                    ) : (
                      <FaGraduationCap className="text-violet-400 text-2xl" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="text-white font-bold text-base sm:text-lg leading-snug">
                        {edu.school}
                      </h3>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {edu.grade && (
                          <span className="text-xs text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                            {edu.grade}
                          </span>
                        )}
                        {edu.percentage && (
                          <span className="text-xs text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded-full">
                            {edu.percentage}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-violet-400 font-medium text-sm mb-0.5">{edu.degree}</p>
                    <p className="text-slate-500 text-xs mb-3">{edu.date}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{edu.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-slate-400 text-center py-10">No education data found</p>
        )}
      </div>
    </section>
  );
};

export default Education;