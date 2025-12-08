import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    visible && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
          fixed bottom-4 right-4
          md:bottom-6 md:right-6
          backdrop-blur-xl bg-white/10
          border border-white/20 shadow-xl
          p-2 md:p-3
          rounded-full text-white
          transition-all duration-300
          hover:bg-white/20 hover:scale-110 hover:shadow-2xl
          cursor-pointer
        "
      >
        <ArrowUp size={18} className="md:size-6" />
      </button>
    )
  );
};
