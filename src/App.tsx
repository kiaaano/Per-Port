import Home from "./pages/Home";
import Proj from "./components/sections/Proj";
import Contact from "./components/sections/Contact";
import SpecularButton from "./components/reactbits/SpecularButton";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Home />
      <Proj />
      <Contact />

      <footer className="border-t border-slate-800/80 bg-slate-950 px-6 py-6 text-white lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            {/* Copyright */}
            <div>
              <p className="text-xs font-medium text-slate-400">
                © 2026 Kian Terrence Atienza
              </p>

              <p className="mt-0.5 text-[11px] text-slate-600">
                Built with modernity, creativity, and purpose.
              </p>
            </div>

          </div>
        </div>
      </footer>

      {/* Floating Back to Top */}
<div
  className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
    showBackToTop
      ? "translate-y-0 opacity-100"
      : "pointer-events-none translate-y-4 opacity-0"
  }`}
>
      <SpecularButton
        size="sm"
        radius={999}
        baseColor="#172033"
        lineColor="#60A5FA"
        intensity={1.4}
        shineSize={18}
        shineFade={35}
        thickness={1.2}
        speed={0.35}
        followMouse={true}
        proximity={250}
        autoAnimate={false}
        textColor="#E2E8F0"
        onClick={scrollToTop}
      >
        <span className="flex items-center gap-3">
          <span>Back to top</span>

          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-500/80 bg-slate-950/80">
            <ArrowUpRight
              size={14}
              className="-rotate-45 text-slate-200"
            />
          </span>
        </span>
      </SpecularButton>
    </div>
    </>
  );
}

export default App;
