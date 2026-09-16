import certifications from "../../data/certifications";
import BorderGlow from "../reactbits/BorderGlow";

const categoryBadgeStyles: Record<string, string> = {
  Networking: "border-blue-400/30 bg-blue-400/10 text-blue-300",
  "Networking & Security": "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
  Programming: "border-violet-400/30 bg-violet-400/10 text-violet-300",
  "Software & Networking":
    "border-indigo-400/30 bg-indigo-400/10 text-indigo-300",
};

const defaultBadgeStyle = "border-slate-400/30 bg-slate-400/10 text-slate-300";

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
             <BorderGlow
                key={certification.title}
                backgroundColor="#0f172a"
                glowColor="210 90 65"
                glowRadius={15}
                colors={["#3b82f6", "#38bdf8", "#22d3ee"]}
                fillOpacity={0}
                className="group p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold leading-7 text-white">
                      {certification.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      {certification.provider}
                    </p>
                  </div>

                  <div className="grid shrink-0 justify-items-end">
                    <span className="col-start-1 row-start-1 flex h-7 items-center text-xl text-blue-400 transition-all duration-300 group-hover:scale-75 group-hover:opacity-0">
                      ↗
                    </span>

                    <span
                      className={`col-start-1 row-start-1 flex h-7 scale-90 items-center whitespace-nowrap rounded-full border px-2.5 text-[10px] font-medium uppercase tracking-wide opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 ${
                        categoryBadgeStyles[certification.category] ??
                        defaultBadgeStyle
                      }`}
                    >
                      {certification.category}
                    </span>
                  </div>
                </div>
              </BorderGlow>
            ))}
          </div>
      </div>
    </section>
  );
}

export default Certifications;