import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import navigation from "../../data/navigation";
import GradientText from "../reactbits/GradientText";
import { getLenis } from "../../lib/lenis";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isNavigating = useRef(false);
  const navigationTimeout = useRef<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Don't let the scroll listener override
      // the section selected by the user
      if (isNavigating.current) {
        return;
      }

      const scrollPosition = window.scrollY + 150;

      const sections = navigation
        .map((item) => {
          const section = document.querySelector(item.href);

          if (!section) return null;

          return {
            href: item.href,
            top: section.getBoundingClientRect().top + window.scrollY,
          };
        })
        .filter(Boolean) as {
        href: string;
        top: number;
      }[];

      if (sections.length === 0) return;

      let currentSection = sections[0].href;

      for (const section of sections) {
        if (scrollPosition >= section.top) {
          currentSection = section.href;
        }
      }

      // Make Contact active at the bottom of the page
      const viewportBottom = window.scrollY + window.innerHeight;

      const documentHeight = document.documentElement.scrollHeight;

      if (viewportBottom >= documentHeight - 50) {
        currentSection = "#contact";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;

    event.preventDefault();

    const section = document.querySelector(href);

    if (!section) return;

    // Tell the scroll listener to temporarily stop
    // changing the active section
    isNavigating.current = true;

    // Immediately activate the clicked section
    setActiveSection(href);

    // Clear any previous timeout
    if (navigationTimeout.current) {
      window.clearTimeout(navigationTimeout.current);
    }

    const lenis = getLenis();

    if (lenis) {
      lenis.scrollTo(section as HTMLElement, {
        offset: -80,
        duration: 1,
      });
    } else {
      section.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
        block: "start",
      });
    }

    // Wait for the smooth scrolling to finish
    navigationTimeout.current = window.setTimeout(() => {
      isNavigating.current = false;
    }, 1000);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-3 transition-all duration-500 sm:px-4 ${
        isScrolled ? "pt-2 sm:pt-4" : "pt-0"
      }`}
    >
      <nav
        onKeyDown={(event) => {
          if (event.key === "Escape" && isMenuOpen) {
            setIsMenuOpen(false);
            menuButtonRef.current?.focus();
          }
        }}
        className={`relative mx-auto flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 md:rounded-full md:px-6 md:py-4 ${
          isScrolled || isMenuOpen
            ? "max-w-5xl border-slate-700/60 bg-slate-900/80 shadow-lg shadow-black/20 backdrop-blur-md"
            : "max-w-7xl border-transparent bg-slate-950/30 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none"
        }`}
      >
        {/* Logo */}
        <a href="/" className="group font-mono text-lg tracking-tight" onClick={() => setIsMenuOpen(false)}>
          <span className="font-normal text-slate-100">&lt;</span>

          <GradientText
            colors={["#1D4ED8", "#3B82F6", "#60A5FA"]}
            animationSpeed={3}
            showBorder={false}
            className="!text-xl !font-black sm:!text-2xl"
          >
            kian.dev
          </GradientText>

          <span className="font-normal text-slate-100">/&gt;</span>
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/70 text-slate-200 transition-colors hover:border-blue-400/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 md:hidden"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Navigation */}
        <ul
          id="primary-navigation"
          className={`${isMenuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full mt-2 flex-col gap-1 rounded-2xl border border-slate-700/70 bg-slate-900/95 p-2 text-slate-300 shadow-xl shadow-black/30 backdrop-blur-xl md:static md:mt-0 md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none`}
        >
          {navigation.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                onClick={(event) => {
                  handleNavigation(event, item.href);
                  setIsMenuOpen(false);
                }}
                className={`relative block rounded-xl px-4 py-3 transition-colors duration-300 hover:bg-slate-800/70 hover:text-blue-400 md:px-0 md:py-1 md:hover:bg-transparent ${
                  activeSection === item.href
                    ? "text-blue-400"
                    : "text-slate-300"
                }`}
              >
                {item.title}

                <span
                  className={`absolute bottom-0 left-0 h-px bg-blue-400 transition-all duration-300 ${
                    activeSection === item.href ? "w-full" : "w-0"
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
