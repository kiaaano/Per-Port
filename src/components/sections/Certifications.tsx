import certifications from "../../data/certifications";
import BorderGlow from "../reactbits/BorderGlow";
import GradientText from "../reactbits/GradientText";
import Reveal from "../animations/Reveal";

const categoryBadgeStyles: Record<string, string> = {
  Networking: "border-blue-400/30 bg-blue-400/10 text-blue-300",
  "Networking & Security": "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
  Programming: "border-violet-400/30 bg-violet-400/10 text-violet-300",
  "Software & Networking":
    "border-indigo-400/30 bg-indigo-400/10 text-indigo-300",
};

const defaultBadgeStyle =
  "border-slate-400/30 bg-slate-400/10 text-slate-300";

function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-slate-800 bg-slate-950 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Certifications & Training
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            <GradientText
              colors={["#60A5FA", "#67E8F9"]}
              animationSpeed={3}
              showBorder={false}
              className="inline"
            >
              Continuous
            </GradientText>{" "}
            learning beyond the classroom.
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base">
            Training and coursework that have strengthened my foundation in
            networking, security, programming, and modern software technologies.
          </p>
        </div>

        {/* Certifications */}
        <div className="mt-10 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-2">
          {certifications.map((certification) => (
              <Reveal
                key={certification.title}
                 className="group relative h-full"
              >
                {/* Certification Card */}
                <BorderGlow
                  backgroundColor="#0f172a"
                  edgeSensitivity={5}
                  glowColor="210 90 65"
                  glowRadius={15}
                  colors={["#3b82f6", "#38bdf8", "#22d3ee"]}
                  fillOpacity={0}
                  className="h-full min-h-[130px] p-4 transition-transform duration-300 group-hover:-translate-y-1 sm:min-h-[145px] sm:p-6"
                >
                  <div className="flex h-full items-start justify-between gap-6">
                    {/* Certification Information */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-semibold leading-6 text-white sm:text-lg sm:leading-7">
                        {certification.title}
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">
                        {certification.provider}
                      </p>

                      {/* Category */}
                      <div className="mt-4 grid w-fit">
                        <span className="col-start-1 row-start-1 hidden h-7 items-center text-sm text-blue-400 transition-all duration-300 group-hover:scale-75 group-hover:opacity-0 md:flex">
                          ◈
                        </span>

                        <span
                          className={`col-start-1 row-start-1 flex h-7 w-fit scale-100 items-center whitespace-nowrap rounded-full border px-2.5 text-[10px] font-medium uppercase tracking-wide opacity-100 transition-all duration-300 md:scale-90 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100 ${
                            categoryBadgeStyles[certification.category] ??
                            defaultBadgeStyle
                          }`}
                        >
                          {certification.category}
                        </span>
                      </div>
                    </div>
                    <img
                      src={certification.image}
                      alt={`${certification.title} badge`}
                      className="h-14 w-14 shrink-0 self-center rounded-lg border border-slate-700/70 bg-slate-950/60 object-contain p-1 md:hidden"
                    />
                  </div>
                </BorderGlow>

                {/* Badge Preview */}
                <div className="pointer-events-none absolute right-2 -top-20 z-50 hidden md:block">
                  <div className="origin-bottom-right scale-75 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100">
                    <div className="rounded-2xl border border-blue-400/30 bg-slate-950/95 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                      <img
                        src={certification.image}
                        alt={`${certification.title} badge`}
                        className="h-32 w-32 rounded-xl object-contain"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;