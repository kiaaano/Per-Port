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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Projects built with
            <span className="text-slate-400"> purpose.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">
            A selection of projects that showcase my experience in web
            development, software development, and emerging technologies.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40"
            >
              {/* Project number */}
              <p className="text-sm font-medium text-blue-400">
                0{projects.indexOf(project) + 1}
              </p>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-semibold">
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
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-8 flex gap-4">
                <a
                  href={project.github}
                  className="text-sm font-medium text-white transition-colors hover:text-blue-400"
                >
                  GitHub →
                </a>

                <a
                  href={project.demo}
                  className="text-sm font-medium text-slate-400 transition-colors hover:text-blue-400"
                >
                  Live Demo →
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Proj;