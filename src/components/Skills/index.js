import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Loader from "../Loader/Loader";
import { usePortfolio } from "../../context/PortfolioContext";

 

const Skills = () => {
  const { skills, loading, fetchSkills } = usePortfolio();
  const totalYears = localStorage.getItem("totalYearofExperience");

  const myskills = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "HTML5",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS3",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "PHP",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJO6dYQFqGX2TEJxyB-6mIfkoK0LdGLVy6ew&s",
      },
      {
        name: "Python",
        image:
          "https://www.citypng.com/public/uploads/preview/hd-python-logo-symbol-transparent-png-735811696257415dbkifcuokn.png",
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      {
        name: "React",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "NextJs",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1evld7nIl8_izeQdDR9XyPTkaLIcnRZGn9w&s",
      },
      {
        name: "NestJs",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrAhOlc5mfP52_Oi0uOKGgHniRqaQFBWsePg&s",
      },
      {
        name: "Astro",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5KhCojo9MAD9u7-vbHjYYFzD69By9d-PWcw&s",
      },
      {
        name: "Laravel",
        image: "https://laravel.com/img/logomark.min.svg",
      },
      {
        name: "Express",
        image:
          "https://external-preview.redd.it/learn-express-js-a-beginner-friendly-step-by-step-guide-v0-hE7Pn4a6ZRCe82cUQnRhXPmvzcp12NG5m8qnWsOpsGI.jpg?auto=webp&s=ac7405a8046d97bae600b10cf191279e612984e7",
      },
      {
        name: "Node.js",
        image:
          "https://w7.pngwing.com/pngs/558/166/png-transparent-node-js-javascript-react-express-js-linux-foundation-mongodb-icons-angle-text-rectangle-thumbnail.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "FilamentPHP",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFaUlEQVR4Ab2XY5QlSRCFa8e2pzFmu8c227ZtjG3btj3z2tbatm20Rq/uVsSZPKfmab0/vs6ujBtxb2a9PyU5xaczcm5wa1QtjlZ4WqFGAf8ui+pRueB55f9kFMa1F74Sm+dHdEPlolMkUlb8x9xTuIzKhRbkTSdvgYoFJxTwP3OZbkJCxfxQhXoF/GmqFuhiSmdsDnkmSyjPLFLAH0FNckUmvtck47ljEbi9JYAp3RuEN89E4tfcFKqTltevbiWy7tWT4agvTOV+3Zn0m5BQlvGdAkxBYhpydpUXPGaOxghHO9jaWDP2drYYNdweaUFTOARpKdjsSSNIx7W1CXOon2o6s9NqJfqjAFNQ89bUuWw4ePAQWFkNVcN7FEBbkoZPr8aSuVpHIeiWDM7mAChNhTFIlL/DD8JcMHDQILEyF1e7A1Xp/EpEKMFIBysRQG++hJLkGgXoItNamoz6/EREeYxFv/79wWYDB/DANTHTcHaFG3ZnzEGK/wS8ey4MqEind0511guovzongefRXAEUJLkkqUYBAvDKUAMNVg/kACeXOIPrZazB3fwEPChKpF5a+TaCnUYSHPSDC+Gsox5dJLk4oUYuToQaCBQDzWYPNu7Tpw8zaaQ1vrgawWYQOp1eGlyfF0fQHmlpNYgkF8XVyEXxeIzCONTlRPOATfFTYWlpSea8Bs52xE+3o7guUPfez+deXlEcR3sm4QBkKIyp6YXDvvCdaQ/PaXYYZjOAjQUOVv1pn3GfYovFIePIkPuqNVH0zL0vHfEDSnimmK0Qw6uAniW5MLqW/hGgOAZH5s9Ajx49GTMzMz1ErWu37kj2GiH68PPtcL6hPpbmOJA+9VEwmmscDoCCaAjk/Age2qlzFzbRhUzVkBGZUO+3VwJwbulMTHDsy0Fpzg/Xg6lmFEkxrFGA4H5OGA9dEDASLuMHoVvXrsKMTxbn5sA1wRtHvYDCSGZv8ng2tjDrAauBlpg9ZhA+OuvPNZ6vj34AAgUR3LQ8dBTdBIeglU5GJ6K6QN1DYfymWbE+bI4NP2vzwrluPEBeaA3ywqBLnSYEHhP6o337DmxOKw2lGzKkp+tPdLflkBSA9JtjRlMwqhuFA8i5oVCDvBB8ds4H9gPNeFDHju3Rrl07HkhNhvQUgF4Z6alvTdgIvLjfmWqkMYok5wQpAYKhhpoqd8xBz26d2JigELdWT+OaIf0HJz34N2DVtwtr6TZ+u+4r9EbhAMgJghpqOpo+Dm3atBagj1lnvHXEiWt6+twgLA9yYB2ZUwh6fV9f8KIaaYwiydl+NXJ2AHRJcbdC8+bNeSit46y64ccr3txkSE/X7TS6N+vDZg7Eu8dcRM0UIoA/1NDVTXc0Q5OmzdicVhr6UOMHXS1y/fHhcWc+MZ28VYvm3LM3YQTVSGMSSdb41MhZvhAgx5cHDjBr91iAbVH2PJA0uvpPT7mIwByCtPy6ckhjGg6gAAE15a6ZyCdp3LgxQ//THtW0ikZAehry0p6ZWBVkDbPOrThw7Jz+qL7mzjUxV2sESXvHs0Z7xwsCZHvzCRo0aEDmvNLgdw7P4ppaK9/xxN2bHnAfYy50fHMBkyzxy2VXMiadSSjAN49t3nZH2LReNFDAP0AaSIZqLTSe+OT4bPTp1op5autkfHfOiU5P9T+EDi9pb7nkkangwU03lG+cgIvzhwv4WXvLTWgEHIgMry0aiYI147gXdzx4nzV/zFOSMthPCVFNBgJo3HURNT3k20JPA1n3J3GpU9YY/jRTHvY/2vwfcT1FH8T8cUrfaBSCb+KmM/5L6OTKeoI+iMXXMcM3cdPJj38TN5y+U6j5i9Sa3ueZxYpHCJ1c+P4OcBC5mQx7K4EAAAAASUVORK5CYII=",
      },
      {
        name: "TailwindCSS",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s",
      },
      {
        name: "GraphQl",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/512px-GraphQL_Logo.svg.png",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MongoDB",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9BVeiXAMU-SsGkVehbpBV1pOlUClyxhC2bg&s",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "PostgreSQL",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      {
        name: "Git",
        image: "https://avatars.githubusercontent.com/u/18133?s=280&v=4",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://kinlane-productions2.s3.amazonaws.com/postman/logo-glyph.png",
      },
      {
        name: "Figma",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGS2AgRLgYbCiPFfpcI0QkIem5iCWSVYADnZ9mrgJOhg&s",
      },
    ],
  },
  ];


  useEffect(() => {
    if (skills.length === 0) fetchSkills();
  }, [skills.length, fetchSkills]);

  //skills = fetchSkills(Myskills)

  return (
    <section id="skills" className="py-20 px-4 relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg mx-auto">
            {totalYears
              ? `Technologies I've worked with over the past ${totalYears} years`
              : "Technology stack I work with"}
          </p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mx-auto" />
        </motion.div>

        
        { myskills && myskills.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {myskills.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10"
              >
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-violet-500 rounded-full" />
                  {category.title || category.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills &&
                    category.skills.map((skill, i) => (
                      
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.08, y: -2 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-violet-600/20 border border-white/8 hover:border-violet-500/40 rounded-xl text-sm text-slate-300 hover:text-white transition-all duration-200 cursor-default"
                      >
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="w-5 h-5 object-contain"
                          onError={(e) => { e.target.style.display = "none"; }}
                        />
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-slate-400 text-center py-10">No skills found</p>
        )}
      </div>
    </section>
  );
};

export default Skills;
