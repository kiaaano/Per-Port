import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";

function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 text-white">
        <Hero />
      </main>
    </>
  );
}

export default Home;