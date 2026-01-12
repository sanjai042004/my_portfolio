import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import ecommerce from "../assets/ecommerce.webp";
import planit from "../assets/planit.webp";
import talksy from "../assets/talksy.webp";
import blog from "../assets/blog.webp";
import weather from "../assets/weather.webp";
export const Projects = () => {
  const projectData = [
    {
      title: "Blog Website (MERN)",
      description:
        "A full-featured blog platform with authentication, image upload, post editor, and clean responsive UI. Built using MERN Stack.",
      img: blog,
      github: "https://github.com/sanjai042004/Blog_Website/tree/main",
      live: "https://codeverse-b.netlify.app",
    },

    {
      title: "planIt Web (Live)",
      description:
        "Task Manager Web App – A MERN stack application with Firebase Google authentication for managing user-specific tasks with full CRUD functionality.",
      img: planit,
      github: "https://github.com/sanjai042004/plantitt",
      live: "https://plansit.vercel.app/",
    },

    {
      title: "Talksy Chat Website",
      description:
        "A modern real-time chat application with typing indicators, message delivery, online status, and clean UI. (In development)",
      img: talksy,
      github: "https://github.com/sanjai042004/Talksy",
      live: "#",
    },
    {
      title: "Weather Website",
      description:
        "A React-based Weather App that displays real-time weather data using the OpenWeatherMap API with city search and unit conversion support.(Live)",
      img: weather,
      github: "https://github.com/sanjai042004/weather",
      live: "https://weather-web-a.vercel.app/",
    },

    {
      title: "E-Commerce Website (Upcoming)",
      description:
        "A full-stack e-commerce website with product management, cart, payment gateway and admin dashboard. (Coming soon)",
      img: ecommerce,
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-gray-950 text-white px-6 py-20 flex justify-center"
    >
      <div className="max-w-6xl w-full">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
        >
          My <span className="text-blue-400">Projects</span>
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-lg group hover:border-blue-500/30 transition "
            >
              {/* Image */}
              <div className="w-full h-50 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-100 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-3">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/60 border border-white/10 hover:bg-gray-700 transition"
                  >
                    <Github size={18} /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition shadow-[0_0_15px_rgba(30,64,175,0.4)]"
                  >
                    <ExternalLink size={18} /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
