import skills from "../../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-slate-800 bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Technologies I work with.
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-400">
            A growing toolkit of technologies I use to design, build, and
            experiment with modern software.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8"
            >
              <h3 className="text-lg font-semibold text-white">
                {skillGroup.category}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-300 transition hover:border-blue-400 hover:text-blue-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;