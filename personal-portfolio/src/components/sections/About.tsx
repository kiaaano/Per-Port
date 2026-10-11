import Reveal from "../animations/Reveal";
import BlurText from "../reactbits/BlurText";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Main content */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          
          {/* Section heading */}
<div>
  <Reveal>
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
      About Me
    </p>
  </Reveal>

  <BlurText
    text="Building with curiosity, purpose, and continuous learning."
    delay={80}
    animateBy="words"
    direction="top"
    gradientWords={["curiosity", "purpose"]}
    gradientColors={["#60A5FA", "#67E8F9"]}
    className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl"
  />
</div>

          {/* Description */}
          <Reveal
            delay={0.15}
            className="space-y-6 text-base leading-8 text-slate-400"
          >
              <Reveal delay={0.1}>
            <p>
              I'm Kian Terrence Atienza, an aspiring Junior Software Developer
              and Web Developer with a strong interest in building practical
              digital experiences.
            </p>
</Reveal>
 <Reveal delay={0.25}>
            <p>
              I enjoy working across the frontend and backend, from designing
              responsive interfaces with React and Tailwind CSS to working with
              APIs, databases, and server-side technologies.
            </p>
</Reveal>
 <Reveal delay={0.4}>
            <p>
              I'm also interested in artificial intelligence and how modern
              software can use AI to solve real-world problems. My goal is to
              continue improving my technical skills while creating software
              that is useful, intuitive, and thoughtfully designed.
            </p>
            </Reveal>
          </Reveal>
        </div>

        {/* Highlights */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          
          {/* Web Development */}
          <Reveal className="h-full">
          <div className="group h-full rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900/70 hover:shadow-lg hover:shadow-blue-500/5">
            <p className="text-3xl font-semibold text-blue-400">
              01
            </p>

            <h3 className="mt-4 font-semibold text-white">
              Web Development
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Building responsive and modern web interfaces.
            </p>
          </div>
          </Reveal>

          {/* Software Development */}
          <Reveal delay={0.15} className="h-full">
          <div className="group h-full rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900/70 hover:shadow-lg hover:shadow-blue-500/5">
            <p className="text-3xl font-semibold text-blue-400">
              02
            </p>

            <h3 className="mt-4 font-semibold text-white">
              Software Development
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Creating practical applications with clean and maintainable
              code.
            </p>
          </div>
          </Reveal>

          {/* AI */}
          <Reveal delay={0.3} className="h-full">
          <div className="group h-full rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900/70 hover:shadow-lg hover:shadow-blue-500/5">
            <p className="text-3xl font-semibold text-blue-400">
              03
            </p>

            <h3 className="mt-4 font-semibold text-white">
              AI Exploration
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Exploring AI technologies and their applications in software.
            </p>
          </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

export default About;