import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Certifications from "../components/sections/Certifications";

function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 text-white">
        <Hero />
        <About />
        <Skills />
        <Certifications />
      </main>
    </>
  );
}

export default Home;