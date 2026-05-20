import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const Hero = () => {
  // bioData.name = "simon"
  // if (loading.bio) {
  //   return (
  //     <div id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
  //       <Loader text="Loading profile..." size="70px" minHeight="100vh" />
  //     </div>
  //   );
  // }

  // if (!bioData) {
  //   return (
  //     <div id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
  //       <p className="text-white text-center px-8">Profile data not available</p>
  //     </div>
  //   );
  // }

  return (
    <div
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden bg-transparent"
    >

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-28 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left: Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-violet-400 font-semibold text-sm tracking-widest uppercase mb-3"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
            >
              Hi, I'm{" "}
              <span className="gradient-text">{}</span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-3 text-xl sm:text-2xl font-semibold text-slate-300 mb-6 h-8"
            >
              <span>I'm a</span>
              <span className="text-violet-400">
                <Typewriter
                  options={{
                    strings: [],//bioData.roles || [],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              aaaa
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <a
                href={Bio.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                📄 Check My Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-violet-500/50 hover:border-violet-400 text-violet-400 hover:text-violet-300 hover:bg-violet-500/10 font-semibold rounded-xl transition-all duration-300"
              >
                💬 Contact Me
              </a>
            </motion.div>

           
          </motion.div>

          
        </div>
      </div>
    </div>
  );
};

export default Hero;