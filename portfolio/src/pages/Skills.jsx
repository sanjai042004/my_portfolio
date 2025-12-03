import { motion } from "framer-motion";

export const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "SASS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Redux - Toolkit",
    "Git & GitHub",
    "REST APIs",
    "JWT Authentication",
    "Firebase",
    "Postman",
    "Responsive Design",
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    float: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-gray-950 text-white px-8 py-20 flex justify-center"
    >
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
        >
          My <span className="text-blue-400">Skills</span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              animate="float"
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 20px rgba(96,165,250,0.4)",
              }}
              className="relative group p-4 text-center rounded-xl border border-white/10 bg-gray-900/40 backdrop-blur-xl text-gray-300 transition overflow-hidden cursor-pointer"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl bg-gradient-to-r from-blue-500/30 to-purple-500/30"
              ></div>

              <p className="relative z-30 font-medium text-lg">{skill}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
