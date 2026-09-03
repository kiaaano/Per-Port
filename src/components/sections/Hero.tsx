import BlurText from "../reactbits/BlurText";
import Aurora from "../reactbits/Aurora";
import ProfileCard from "../reactbits/ProfileCard";

function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden bg-slate-950">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-70">
        <Aurora
          colorStops={["#3b82f6", "#6366f1", "#3b82f6"]}
          amplitude={0.8}
          blend={0.5}
          speed={0.6}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2">

        {/* Text */}
        <div className="order-2 lg:order-1">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Junior Software Developer
          </p>

          <BlurText
            text="Crafting modernity with creativity and purpose."
            delay={80}
            animateBy="words"
            direction="top"
            className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          />

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
              href="ATIENZA, K._RESUME.pdf"
              className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors duration-300 hover:border-slate-500 hover:bg-slate-900"
            >
              Download Resume
            </a>
          </div>

          <p className="mt-8 max-w-md text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Building with purpose. Learning without limits.
          </p>
        </div>

        {/* Profile */}
        <div className="order-1 flex justify-center pb-16 lg:order-2 lg:pb-0">
          <ProfileCard
            avatarUrl="/images/1x1_icon.png"
            miniAvatarUrl="/images/1x1_icon.png"
            name="Kian Terrence Atienza"
            title="Junior Software Developer"
            handle="kiandev"
            status="Available for opportunities"
            contactText="Contact Me"
            innerGradient="linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 64, 175, 0.35) 100%)"
            behindGlowEnabled={true}
            behindGlowColor="rgba(59, 130, 246, 0.30)"
            behindGlowSize="40%"
            enableTilt={true}
            enableMobileTilt={false}
            showUserInfo={true}
            className="w-full max-w-[380px]"
            onContactClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;