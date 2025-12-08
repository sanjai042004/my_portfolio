import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Project";
import { Footer } from "./pages/Footer";
import { BackToTop } from "./components/BackToTop";

export const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
};
