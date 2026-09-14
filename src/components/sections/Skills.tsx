import React, { useState } from "react";
import skills from "../../data/skills";
import { ChevronDown } from "lucide-react";


import { VscVscode } from "react-icons/vsc";
import ShinyText from "../reactbits/ShinyText";
import LogoLoop from "../reactbits/LogoLoop";
import SkillDock from "../reactbits/SkillDock";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiTailwindcss,
  SiNodedotjs,
  SiFirebase,
  SiGit,
  SiGithub,
  SiArduino,
} from "react-icons/si";

const skillLogos: Record<string, React.ReactNode> = {
  HTML: <SiHtml5 />,
  CSS: <SiCss />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  React: <SiReact />,
  Angular: <SiAngular />,
  "Tailwind CSS": <SiTailwindcss />,

  "Node.js": <SiNodedotjs />,
  Firebase: <SiFirebase />,

  Git: <SiGit />,
  GitHub: <SiGithub />,
  "Visual Studio Code": <VscVscode />,
  "Arduino IDE": <SiArduino />,
};

function Skills() {
const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="border-t border-slate-800 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Skills
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Technologies I work with
          </h2>
        </div>

        {/* Skill Categories */}
        <div>
          {skills.map((skillGroup) => {
            const isOpen = openCategory === skillGroup.category;

            const logos = skillGroup.items
              .filter((item) => skillLogos[item])
              .map((item) => ({
                node: skillLogos[item],
                title: item,
                ariaLabel: item,
              }));

            return (
              <div
                key={skillGroup.category}
                className="py-12"
              >
                {/* Category Title / Accordion Button */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenCategory(
                      isOpen ? null : skillGroup.category
                    )
                  }
                  aria-expanded={isOpen}
                  className="group flex w-full items-center gap-8"
                >
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-slate-700 transition-all duration-500 group-hover:via-blue-500/40" />

                  <div className="flex shrink-0 items-center gap-3">
                    <ShinyText
                      text={skillGroup.category}
                      speed={3}
                      color="#cbd5e1"
                      shineColor="#ffffff"
                      className="text-base font-bold uppercase tracking-[0.32em] transition-colors duration-300 group-hover:text-white md:text-lg"
                    />

                    <ChevronDown
                        size={20}
                        strokeWidth={1.8}
                        className={`text-blue-400 transition-transform duration-500 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                  </div>

                  <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-800 to-slate-700 transition-all duration-500 group-hover:via-blue-500/40" />
                </button>

               {/* Expandable Text List */}
                      <div
                        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr]"
                            : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div
                            className={`pt-8 transition-all duration-500 ${
                              isOpen
                                ? "translate-y-0 opacity-100"
                                : "-translate-y-3 opacity-0"
                            }`}
                          >
                            <SkillDock items={skillGroup.items} />
                          </div>
                        </div>
                      </div>

                    {/* Logo Loop */}
                    {logos.length > 0 && (
                      <div className="mx-auto mt-12 w-[100%]">
                        <LogoLoop
                          logos={logos}
                          speed={30}
                          logoHeight={34}
                          gap={120}
                          fadeOut
                          fadeOutColor="#020617"
                          pauseOnHover
                          scaleOnHover
                        />
                      </div>
                    )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;