import BlurText from "../reactbits/BlurText";
import Scanner from "../reactbits/Scanner";
import ProfileCard from "../reactbits/ProfileCard";
import SpecularButton from "../reactbits/SpecularButton";

function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden bg-slate-950">
      {/* Animated background */}
      <div className="absolute inset-0 h-full w-full opacity-50">
          <Scanner
            color1="#1D4ED8"
            color2="#3B82F6"
            color3="#93C5FD"
            speed={0.5}
            sweepSpeed={0.3}
            sweepWidth={1.6}
            sweepFalloff={6}
            scale={1.5}
            frequency={2}
            ripple={0.22}
            bandDensity={11}
            lineSharpness={5.5}
            glow={0.22}
            scanDirection="vertical"
            colorSpread={0.7}
            brightness={2}
            contrast={1.15}
            softness={1.4}
            vignette={0.45}
            scanline
            grain
            grainIntensity={0.05}
            opacity={1}
            mouseInteraction
            mouseRadius={0.5}
            mouseStrength={1.5}
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
              gradientWords={["modernity", "creativity", "purpose"]}
              gradientColors={["#3B82F6", "#6366F1", "#22D3EE"]}
              gradientAnimationSpeed={6}
              className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            />

          

          <div className="mt-8 flex flex-wrap gap-4">
              <SpecularButton
                href="#projects"
                size="md"
                radius={10}
                tint="#1D4ED8"
                tintOpacity={0.35}
                textColor="#ffffff"
                lineColor="#60A5FA"
                baseColor="#1E3A8A"
                intensity={1.4}
                shineSize={14}
                shineFade={35}
                thickness={1}
                speed={0.35}
                followMouse
                proximity={250}
              >
                View Projects
              </SpecularButton>

              <SpecularButton
                href="/ATIENZA, K._RESUME.pdf"
                download
                size="md"
                radius={10}
                tint="#0F172A"
                tintOpacity={0.65}
                textColor="#E2E8F0"
                lineColor="#64748B"
                baseColor="#1E293B"
                intensity={1.2}
                shineSize={12}
                shineFade={35}
                thickness={1}
                speed={0.35}
                followMouse
                proximity={250}
              >
                Download Resume
              </SpecularButton>
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