function Hero() {
  return (
   <section className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden bg-slate-950">
      {/* Background decoration */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />
     
      {/* Content */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2">
        
        {/* Text */}
        <div className="order-2 lg:order-1">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Junior Software Developer
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">            Crafting modernity with{" "}
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
              className="rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-400"
            >
              View Projects
           </a>

           <a
            href="/resume.pdf"
            className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors duration-300 hover:border-slate-500 hover:bg-slate-900"
          >
            Download Resume
          </a>
          
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Building with purpose. Learning without limits.
          </p>
        </div>

                    {/* Profile */}
              <div className="order-1 flex justify-center pb-16 lg:order-2 lg:pb-0">
                <div className="relative">

                  {/* Subtle glow */}
                  <div className="absolute -inset-6 rounded-full bg-blue-500/10 blur-3xl" />

                  {/* Photo */}
                  <img
                    src="/images/1x1_icon.png"
                    alt="Kian Terrence Atienza"
                    className="relative h-72 w-72 rounded-full border border-slate-700/80 object-cover shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
                  />

                  {/* Name */}
                  <div className="absolute -bottom-16 left-1/2 w-max -translate-x-1/2 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white">
                      Kian Terrence Atienza
                    </p>

                    <p className="mt-2 text-sm text-blue-400">
                      Junior Software Developer
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Web Developer · AI Enthusiast
                    </p>
                  </div>

                </div>
              </div>
      </div>
    </section>
  );
}

export default Hero;