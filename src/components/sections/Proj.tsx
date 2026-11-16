import { createPortal } from "react-dom";
import { useState } from "react";
import { projects } from "../../data/projects";
import Reveal from "../animations/Reveal";
import CircularCarousel from "../reactbits/CircularCarousel";
import LightRays from "../reactbits/LightRays";
import TiltedCard from "../reactbits/TiltedCard";

const placeholderItems = [
  {
    src: "/projects/project-placeholder-01.svg",
    alt: "Future project placeholder",
    title: "Future Project 01",
    subtitle: "Coming soon",
  },
  {
    src: "/projects/project-placeholder-02.svg",
    alt: "Future project placeholder",
    title: "Future Project 02",
    subtitle: "Coming soon",
  },
];

function Proj() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [pendingFlipIndex, setPendingFlipIndex] = useState<number | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const selectedProject =
    selectedProjectIndex === null ? null : projects[selectedProjectIndex];
  const carouselItems = [
    ...projects.map((project) => ({
      src: project.image,
      alt: `${project.title} preview`,
      title: project.title,
      subtitle: project.technologies.slice(0, 2).join(" · "),
    })),
    ...placeholderItems,
  ];

  const selectProject = (index: number) => {
    setSelectedProjectIndex(index);
    setPendingFlipIndex(index);
    setIsFlipped(false);
  };

  const handleCarouselSettled = (index: number) => {
    if (pendingFlipIndex === index) {
      setPendingFlipIndex(null);
      setIsFlipped(true);
    }
  };

  const resumeCarousel = () => {
    setSelectedProjectIndex(null);
    setPendingFlipIndex(null);
    setIsFlipped(false);
  };

  return (
    <>
      <section
        id="projects"
        className="relative overflow-x-clip bg-slate-950 px-4 pt-12 pb-24 text-white sm:pb-40 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
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
          </Reveal>

          <Reveal className="mt-12 sm:mt-16">
            <div className="relative h-[380px] min-[480px]:h-[420px] sm:h-[480px]">
              <CircularCarousel
                centerOverlay={
                  <LightRays
                    raysOrigin="bottom-center"
                    raysColor="#60a5fa"
                    raysSpeed={0.3}
                    lightSpread={0.68}
                    rayLength={0.45}
                    rayDensity={1.6}
                    raySharpness={1}
                    glow={0.25}
                    haze={0}
                    atmosphere={0.4}
                    intensity={1.4}
                    followMouse={false}
                    cursorShadow={false}
                    clickPulse={false}
                    opacity={0.7}
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "var(--cc-overlay-width)",
                      height: "var(--cc-overlay-height)",
                      transform:
                        "translate(-50%, -50%) translateY(var(--cc-overlay-offset-y))",
                    }}
                  />
                }
                className="z-10"
                items={carouselItems}
                preset="cylinder"
                cardWidth={520}
                aspectRatio={16 / 9}
                gap={45}
                speed={6}
                direction="right"
                momentum={0.85}
                autoplay={selectedProjectIndex === null ? "drift" : "off"}
                pauseOnHover={false}
                captions
                tilt={-5}
                fadeColor="#020617"
                cornerRadius={20}
                onItemClick={(_, index) => {
                  if (index < projects.length) selectProject(index);
                }}
                onSettled={handleCarouselSettled}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {selectedProject && selectedProjectIndex !== null && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} project details`}
          onClick={resumeCarousel}
          onKeyDown={(event) => {
            if (event.key === "Escape") resumeCarousel();
          }}
        >
          <TiltedCard
            key={selectedProjectIndex}
            imageSrc={selectedProject.image}
            altText={`${selectedProject.title} project preview`}
            captionText={`${selectedProject.title} project details`}
            containerHeight="min(75vw, 520px)"
            containerWidth="min(95vw, 800px)"
            imageHeight="min(75vw, 520px)"
            imageWidth="min(95vw, 800px)"
            scaleOnHover={1.02}
            rotateAmplitude={8}
            showTooltip={false}
            flipOnClick={pendingFlipIndex === null}
            flipped={isFlipped}
            onFlip={setIsFlipped}
            onClick={(event) => event.stopPropagation()}
            radius={20}
            perspective={1000}
            glare={0.25}
            shadow={0.55}
            parallax={0.4}
            gyroscope={false}
            intro
            backContent={
              <div className="flex h-full flex-col overflow-y-auto bg-slate-950/95 p-5 text-left text-white sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Project {String(selectedProjectIndex + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </p>

                <h3 className="mt-3 text-xl font-semibold leading-tight sm:text-2xl">
                  {selectedProject.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {selectedProject.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-950 transition-colors hover:bg-slate-200"
                    >
                      Live Demo →
                    </a>
                  )}

                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-blue-500/50 hover:text-white"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            }
          >
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-transparent p-5 pt-20 text-left text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Selected project
              </p>
              <h3 className="mt-2 text-xl font-semibold leading-tight sm:text-2xl">
                {selectedProject.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Click to reveal project details
              </p>
            </div>
          </TiltedCard>
        </div>,
        document.body,
      )}
    </>
  );
}

export default Proj;