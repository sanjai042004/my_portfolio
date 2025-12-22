import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";
import contactImg from "../assets/contact.png";
import { useState } from "react";
import axios from "axios";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://my-portfolio-2mlt.onrender.com/api/contact/send",
        form
      );
      alert("Message sent successfully");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to sent message");
      console.log(error);
    }
  };
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gray-950 text-white px-6 py-20 flex justify-center"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex justify-center"
        >
          <img
            src={contactImg}
            alt="Contact"
            className="w-72 sm:w-96 md:w-full max-w-md rounded-2xl shadow-lg opacity-90"
          />
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-10 shadow-lg"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-400 text-left">
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="text-gray-300 flex items-center gap-2 mb-2">
                <User size={18} /> Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-white/10 text-white outline-none
                focus:border-blue-500 transition"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="text-gray-300 flex items-center gap-2 mb-2">
                <Mail size={18} /> Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-white/10 text-white outline-none
                focus:border-blue-500 transition"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-gray-300 flex items-center gap-2 mb-2">
                <MessageSquare size={18} /> Message
              </label>
              <textarea
                value={form.message}
                name="message"
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-white/10 text-white outline-none
                focus:border-blue-500 transition"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition shadow-[0_0_20px_rgba(30,64,175,0.4)] font-medium cursor-pointer"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
