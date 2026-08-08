import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";

function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 text-white">
        <Hero />
        <About />
      </main>
    </>
  );
}

export default Home;