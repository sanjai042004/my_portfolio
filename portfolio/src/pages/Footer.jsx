import { Github, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 text-gray-300 ">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-6">
        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://github.com/sanjai042004"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/sanjai04/"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/thalapathy__sanjai/"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-1 bg-white/10"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Sanjai. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
