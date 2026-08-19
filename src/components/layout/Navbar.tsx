import { useEffect, useState } from "react";
import navigation from "../../data/navigation";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");

       useEffect(() => {
          const handleScroll = () => {
            const scrollPosition = window.scrollY + 120;

            let currentSection = "";

            navigation.forEach((item) => {
              const section = document.querySelector(item.href);

              if (section) {
                const sectionTop =
                  section.getBoundingClientRect().top + window.scrollY;

                if (scrollPosition >= sectionTop) {
                  currentSection = item.href;
                }
              }
            });

            setActiveSection(currentSection);
          };

          window.addEventListener("scroll", handleScroll);
          handleScroll();

          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-bold text-blue-400"
        >
          Kian.dev
        </a>

        {/* Navigation */}
        <ul className="hidden items-center gap-8 text-slate-300 md:flex">
          {navigation.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                className={`relative py-1 transition-colors duration-300 hover:text-blue-400 ${
                  activeSection === item.href
                    ? "text-blue-400"
                    : "text-slate-300"
                }`}
              >
                {item.title}

                <span
                  className={`absolute bottom-0 left-0 h-px bg-blue-400 transition-all duration-300 ${
                    activeSection === item.href
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;