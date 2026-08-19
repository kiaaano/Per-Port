import { projects } from "../../data/projects";

function Proj() {
  return (
    <section
      id="projects"
      className="relative bg-slate-950 px-6 py-24 text-white lg:px-12"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-blue-400" />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Selected Work
            </p>
          </div>

         <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Projects built with{" "}
          <span className="text-slate-400">purpose.</span>
        </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">
            A selection of projects that showcase my experience in web
            development, software development, and emerging technologies.
          </p>
        </div>

        {/* Project cards */}
        <div className="relative mt-14 grid gap-6 md:grid-cols-2">
          <div className="pointer-events-none absolute -inset-10 -z-10 rounded-3xl bg-blue-500/5 blur-3xl" />
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40"
            >


            {/* Project Image */}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative overflow-hidden border-b border-slate-800 bg-slate-900">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="block h-auto w-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </a>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-6">

                {/* Number */}
                <p className="text-sm font-medium text-blue-400">
                  {String(index + 1).padStart(2, "0")}
                </p>

                {/* Title */}
               <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight">
                {project.title}
              </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                   <span
                    key={technology}
                    className="rounded-full border border-slate-800 bg-slate-950/50 px-3 py-1 text-xs text-slate-400"
                  >
                    {technology}
                  </span>
                  ))}
                </div>

                 {/* Links */}
                    <div className="mt-auto flex gap-3 pt-8">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-200"
                        >
                          Live Demo →
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/50 hover:text-white"
                        >
                          GitHub →
                        </a>
                      )}
                    </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Proj;