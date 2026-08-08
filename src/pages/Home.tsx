import Navbar from "../components/layout/Navbar";

function Home() {
  return (
    <>
      <Navbar />

     <main className="min-h-screen bg-slate-950 text-white">
 

  <section className="flex flex-col items-center justify-start pt-12 pb-24 px-6 md:px-12">
    <div className="w-full max-w-4xl space-y-6">
      
      {/* Main Catchphrase */}
      <h2 className="text-4xl md:text-5xl font-medium tracking-tight bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
        Crafting modernity with creativity and purpose.
      </h2>
      
      {/* Biography */}
      <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
        I'm <span className="text-indigo-400 font-semibold">Kian Terrence Atienza</span> — an aspiring Junior Software Developer, Web Developer, and AI Enthusiast passionate about building modern digital experiences that are both functional and intuitive. I enjoy developing scalable software, crafting responsive websites, and exploring AI-driven solutions that solve real-world problems through clean code and thoughtful design.
      </p>
      
      {/* Subtext / Motto */}
      <p className="text-xs md:text-sm font-semibold tracking-wide text-indigo-400 uppercase">
        Building with purpose. Learning without limits.
      </p>

    </div>
  </section>
</main>
    </>
  );
}

export default Home;