function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden bg-slate-950">
      {/* Background decoration */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        
        {/* Text */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Junior Software Developer
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Crafting modernity with{" "}
            <span className="text-slate-400">
              creativity and purpose.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            I'm Kian Terrence Atienza — an aspiring Junior Software Developer,
            Web Developer, and AI Enthusiast passionate about building modern
            digital experiences that are functional, intuitive, and purposeful.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
            >
              Download Resume
            </a>
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Building with purpose. Learning without limits.
          </p>
        </div>

        {/* Visual */}
        <div className="hidden lg:flex justify-center">
          <div className="relative flex h-80 w-80 items-center justify-center rounded-full border border-slate-800 bg-slate-900/50">
            <div className="absolute inset-6 rounded-full border border-slate-800" />

            <div className="text-center">
              <p className="text-5xl font-bold text-blue-400">
                KA
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Developer
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;