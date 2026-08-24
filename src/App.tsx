import Home from "./pages/Home";
import Proj from "./components/sections/Proj";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <Home />
      <Proj />
      <Contact />

      <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Kian Terrence Atienza. All rights
            reserved.
          </p>

          <p>
            Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;