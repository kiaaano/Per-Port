import Home from "./pages/Home";
import Proj from "./components/sections/Proj";
import Contact from "./components/sections/Contact";
import StarBorder from "./components/reactbits/StarBorder";
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
      <StarBorder
          color="#60A5FA"
          speed="5s"
          thickness={1}
          backgroundColor="#0B1220"
          textColor="#E2E8F0"
          borderColor="rgba(96, 165, 250, 0.15)"
          className="rounded-full"
          onClick={scrollToTop}
        >
          <span className="flex items-center gap-3 px-1">
            <span>Back to top</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-500/50 bg-slate-950/70">
              <ArrowUpRight
                size={14}
                className="-rotate-45 text-slate-200"
              />
            </span>
          </span>
        </StarBorder>

    </div>
    </>
  );
}

export default App;
