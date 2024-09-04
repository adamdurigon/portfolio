import About from "./components/About";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import Skills from "./components/Skills";
import Work from "./components/Work";

export default function Home() {
  return (
    <div>
      <HomePage />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}
