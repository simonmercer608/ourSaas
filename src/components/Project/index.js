import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { usePortfolio } from "../../context/PortfolioContext";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5 }}
    className="glass rounded-2xl overflow-hidden cursor-pointer group hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300"
    onClick={onClick}
  >
    {/* Project image */}
    <div className="relative overflow-hidden h-48">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        onError={(e) => {
          e.target.style.background = "linear-gradient(135deg, #7c3aed22, #06b6d422)";
          e.target.style.display = "none";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-transparent to-transparent" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white font-semibold text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
          View Details
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-violet-300 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags?.slice(0, 4).map((tag, i) => (
          <span
            key={i}
            className="text-xs px-2 py-0.5 bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-md"
          >
            {tag}
          </span>
        ))}
        {project.tags?.length > 4 && (
          <span className="text-xs px-2 py-0.5 bg-white/5 border border-white/10 text-slate-400 rounded-md">
            +{project.tags.length - 4}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <FaGithub size={14} /> Code
          </a>
        )}
        {project.webapp && (
          <a
            href={project.webapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 transition-colors"
          >
            <FaExternalLinkAlt size={12} /> Live Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Project = ({ openModal, setOpenModal }) => {
  const { projects, loading, fetchProjects } = usePortfolio();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (projects.length === 0) fetchProjects();
  }, [projects.length, fetchProjects]);


 const myprojects = [
  {
    id: 0,
    title: "E-Commerce Platform",
    date: "June 2023 - Aug 2023",
    description: `Built a fully functional e-commerce platform with intuitive UI/UX using React and Tailwind CSS for the frontend, coupled with Express.js backend for robust data management. Implemented MongoDB for efficient product and user data storage, along with JWT authentication for secure login and registration.

Integrated multiple payment gateways (Stripe and Razorpay) to provide users with flexible payment options including Cash on Delivery. Developed a comprehensive shopping experience featuring product browsing, cart management, order placement, and payment processing.

Created a powerful admin panel enabling store managers to easily add/edit products, manage inventory, and oversee the complete order fulfillment process from payment to shipping.`,
    image: require("../../Image/e-commerce.png"),
    tags: [
      "React",
      "MongoDB",
      "Express",
      "Node.js",
      "Tailwind CSS",
      "REST APIs",
      "bcrypt",
      "Axios",
      "Stripe",
      "Razorpay",
      "JWT",
    ],
    category: "web app",
    github: "https://github.com/abhi051002/Forever-Ecommerce-FullStack",
    webapp: "https://forever-frontend-wine.vercel.app/",
    isDone: true,
  },
  {
    id: 1,
    title: "Hospital Management System",
    date: "March 2023 - April 2023",
    description: `Developed a comprehensive hospital management solution using the MERN stack (MongoDB, Express.js, React, Node.js) with Tailwind CSS for responsive design. Created a patient-centric interface allowing users to easily search for doctors by specialty and book appointments based on availability.

Implemented secure JWT authentication with role-based access control for patients, doctors, and administrators. Built a specialized doctor portal where healthcare providers can manage their schedules, adjust consultation fees, and view upcoming appointments.

Designed an administrative dashboard for hospital staff to manage doctor listings, monitor appointment bookings, and ensure smooth operation of the facility. Integrated Stripe payment processing to handle appointment bookings securely and efficiently.`,
    image: require("../../Image/home1.png"),
    tags: [
      "React",
      "MongoDB",
      "Express",
      "Node.js",
      "Tailwind CSS",
      "REST APIs",
      "JWT",
      "bcrypt",
      "Axios",
    ],
    category: "web app",
    github: "https://github.com/abhi051002/hms-fullstack",
    webapp: "https://hms-frontend-umber.vercel.app",
    isDone: true,
  },
  {
    id: 2,
    title: "Job Portal Platform",
    date: "Nov 2024 - Feb 2025",
    description: `Created a full-featured job marketplace using the MERN stack that connects job seekers with employers. Built separate interfaces for recruiters to post positions, manage applications, and communicate with candidates.

Implemented advanced job search functionality with filters for location, experience level, salary range, and keywords. Designed an intuitive job seeker dashboard for profile management, application tracking, and saved job listings.

Featured real-time notifications for application status updates, interview invitations, and recruiter messages. Ensured data security through JWT authentication and role-based access controls for different user types.`,
    image: require("../../Image/jobportal.png"),
    tags: [
      "React",
      "MongoDB",
      "Express",
      "Node.js",
      "Tailwind CSS",
      "REST APIs",
      "JWT",
      "bcrypt",
      "Axios",
    ],
    category: "web app",
    github: "https://github.com/abhi051002/JobPortal",
    webapp: "https://job-portal-frontend-ochre-delta.vercel.app/",
    isDone: true,
  },
  {
    id: 3,
    title: "Construction Company Website",
    date: "Feb 2025 - Apr 2025",
    description: `Designed and developed a modern, professional website for a construction company using React frontend with Laravel backend and PostgreSQL database. Created an elegant showcase of the company's services, completed projects, and customer testimonials.

Implemented a responsive design using TailwindCSS to ensure optimal viewing experiences across all devices. Built a secure contact and quote request system that integrates with the company's internal workflow.

Developed a client portal where customers can track project progress, view documents, and communicate with project managers. Utilized Laravel Sanctum for secure API authentication between frontend and backend systems.`,
    image: require("../../Image/construction.png"),
    tags: [
      "React",
      "PostgreSQL",
      "Laravel",
      "TailwindCSS",
      "Sanctum",
      "REST APIs",
    ],
    category: "web app",
    github: "https://github.com/abhi051002/construction-website",
    webapp: "https://construction-website-kmoa.vercel.app/",
    isDone: true,
  },
  {
    id: 4,
    title: "SnapCast",
    date: "May 2025 - June 2025",
    description: `Built with Next.js and Bunny.net, this Full Stack Screen Recording & Video Sharing Platform includes user authentication with "Better Auth", screen recording, video uploads, and the ability to share videos via link. Users can set videos as public or private, view AI-generated transcripts, and access metadata like video ID and URL. A built-in search bar makes finding content fast and simple.`,
    image: require("../../Image/SnapCast.png"),
    tags: [
      "Nextjs",
      "Postgres",
      "Arject",
      "Bunny.net",
      "Better Auth",
      "Drizzle ORM",
      "Tailwind CSS",
      "Typescript",
      "Xata",
    ],
    category: "web app",
    github: "https://github.com/abhi051002/snapcast",
    webapp: "https://snapcast-mauve.vercel.app/",
    isDone: true,
  },
  //   {
  //     id: 4,
  //     title: "Edemy - Online Learning Platform",
  //     date: "Apr 2025 - Present",
  //     description: `Developing a comprehensive online learning platform using the MERN stack, featuring a user-friendly interface for students and instructors. Implemented a robust course management system allowing educators to create, manage, and sell courses.
  // Designed an interactive student dashboard for course enrollment, progress tracking, and assignment submissions. Integrated real-time chat functionality for seamless communication between students and instructors.
  // Implemented secure payment processing using Stripe for course purchases and subscriptions. Ensured data integrity and security through JWT authentication and role-based access controls.`,
  //     image: require("../Image/Edemy.png"),
  //     tags: ["React", "Mongodb", "Nodejs", "TailwindCSS", "Express", "REST APIs", 'JWT', "bcrypt",
  //       "Axios", "Clerk Auth"],
  //     category: "web app",
  //     github: "https://github.com/abhi051002/Edemy-Learning-Management-System",
  //     // webapp: "",
  //     isDone: false,
  //   },
];

  return (
    <section id="apps" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg mx-auto">
            A showcase of the things I've built
          </p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mx-auto" />
        </motion.div>

        { myprojects && myprojects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...myprojects]
                .sort((a, b) => b.id - a.id)
                .slice(0, isHome ? 3 : myprojects.length)
                .map((project, index) => (
                <ProjectCard
                  key={project._id || index}
                  project={project}
                  onClick={() => setOpenModal({ state: true, project })}
                />
              ))}
            </div>
            {isHome && projects.length > 3 && (
              <div className="mt-12 flex justify-center">
                <Link
                  to="/projects"
                  onClick={() => window.scrollTo(0, 0)}
                  className="px-8 py-3 bg-white/5 border border-violet-500/30 hover:bg-violet-500/10 hover:border-violet-500 text-violet-400 hover:text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                >
                  Show All Projects
                </Link>
              </div>
            )}
          </>
        ) : (
          <p className="text-slate-400 text-center py-10">No projects found</p>
        )}
      </div>
    </section>
  );
};

export default Project;