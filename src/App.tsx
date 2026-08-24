import Home from "./pages/Home";
import Proj from "./components/sections/Proj";
import Contact from "./components/sections/Contact";
import { ArrowUpRight } from "lucide-react";

function App() {
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

              {/* Back to top */}
                <a
                    href="#"
                    className="group inline-flex items-center gap-3 rounded-full border border-slate-600/80 bg-gradient-to-r from-slate-700 via-slate-800 to-blue-950/80 py-2 pl-4 pr-2 text-xs font-semibold text-slate-100 shadow-lg shadow-black/20 transition-all duration-300 hover:border-slate-500 hover:from-slate-600 hover:via-slate-700 hover:to-blue-900/80 hover:text-white"
                  >
                    <span>Back to top</span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-500/80 bg-slate-950/80 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-blue-400/50 group-hover:bg-slate-900">
                      <ArrowUpRight
                        size={14}
                        className="-rotate-45 text-slate-200 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-blue-300"
                      />
                    </span>
                  </a>

            </div>
          </div>
        </footer>
    </>
  );
}

export default App;