import certifications from "../../data/certifications";

function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-slate-800 bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Certifications & Training
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Continuous learning beyond the classroom.
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-400">
            Training and coursework that have strengthened my foundation in
            networking, security, programming, and modern software technologies.
          </p>
        </div>

        {/* Certifications */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {certifications.map((certification) => (
            <article
              key={certification.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:-translate-y-1 hover:border-blue-400/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    {certification.category}
                  </p>

                  <h3 className="mt-3 text-lg font-semibold leading-7 text-white">
                    {certification.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {certification.provider}
                  </p>
                </div>

                <span className="shrink-0 text-xl text-blue-400">
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;