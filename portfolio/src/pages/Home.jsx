import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import resume from "../assets/sanjai.resume.pdf";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen pt-24 bg-gray-950 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,78,216,0.25),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 0.5, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 4 }}
        className="absolute top-10 left-10 w-64 h-64 md:w-96 md:h-96 bg-blue-700/40 rounded-full blur-3xl"
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4 sm:px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="mb-2 sm:mb-3 text-blue-400/80 tracking-widest text-xs sm:text-sm"
        >
          WELCOME TO MY PORTFOLIO
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          Hi, I'm <span className="text-blue-400">Sanjai</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.1 }}
          className="mt-3 sm:mt-4 text-lg sm:text-2xl md:text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent px-2"
        >
          Full Stack Developer - MERN
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.1 }}
          className="mt-8 sm:mt-10 bg-gray-900/40 backdrop-blur-xl p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-white/10 max-w-xl mx-auto"
        >
          <p className="text-gray-300 text-base sm:text-lg">
            I build fast, interactive, and visually stunning web experiences
            using the MERN stack & modern UI animations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition shadow-[0_0_20px_rgba(30,64,175,0.4)] text-center"
          >
            🚀 View Projects
          </a>

          <a
            href={resume}
            download
            className="w-full sm:w-auto px-7 py-3 rounded-xl border border-gray-500 hover:bg-gray-800 transition text-center"
          >
            📄 Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex gap-5 sm:gap-6 mt-10"
        >
          <a href="https://github.com/sanjai042004" target="_blank">
            <Github className="w-6 h-6 sm:w-8 sm:h-8 hover:text-blue-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/sanjai04/" target="_blank">
            <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 hover:text-blue-400 transition" />
          </a>
          <a
            href="https://www.instagram.com/thalapathy__sanjai/"
            target="_blank"
          >
            <Instagram className="w-6 h-6 sm:w-8 sm:h-8 hover:text-blue-400 transition" />
          </a>
          <a
            href="https://wa.me/918124384309?text=Hi%20Sanjai%2C%20I%20visited%20your%20portfolio.%20Let%27s%20connect%21"
            target="_blank"
            className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center 
             bg-green-600 rounded-full hover:bg-green-700 transition"
          >
            <span className="text-white text-xl">💬</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="mt-12 sm:mt-16 text-gray-400 text-xs sm:text-sm"
        >
          Scroll Down ↓
        </motion.div>
      </div>
    </section>
  );
};
