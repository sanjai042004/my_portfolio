import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gray-950 text-white px-6 py-20 flex justify-center"
    >
      <div className="max-w-4xl w-full">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-10"
        >
          About <span className="text-blue-400">Me</span>
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-lg leading-relaxed"
          >
            I'm <span className="text-blue-400 font-semibold">Sanjai</span>, a
            MERN Stack Developer who loves creating fast, clean, and modern web
            applications.  
            <br /><br />
            I focus on building smooth user experiences using React, Node,
            Express, MongoDB, and animation tools like Framer Motion. I enjoy
            solving problems, learning new technologies, and turning ideas into
            real working products.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
