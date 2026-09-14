import { useEffect, useRef, useState } from "react";
import navigation from "../../data/navigation";
import GradientText from "../reactbits/GradientText";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  const isNavigating = useRef(false);
  const navigationTimeout = useRef<number | null>(null);

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
            top:
              section.getBoundingClientRect().top +
              window.scrollY,
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
      const viewportBottom =
        window.scrollY + window.innerHeight;

      const documentHeight =
        document.documentElement.scrollHeight;

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

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
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

    // Smooth scroll
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Wait for the smooth scrolling to finish
    navigationTimeout.current = window.setTimeout(() => {
      isNavigating.current = false;
    }, 1000);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
  href="/"
  className="group font-mono text-lg tracking-tight"
>
  <span className="font-normal text-slate-100">
    &lt;
  </span>

<GradientText
  colors={["#1D4ED8", "#3B82F6", "#60A5FA"]}
  animationSpeed={3}
  showBorder={false}
  className="!text-2xl !font-black"
>
  kian.dev
</GradientText>

  <span className="font-normal text-slate-100">
    /&gt;
  </span>
</a>

        {/* Navigation */}
        <ul className="hidden items-center gap-8 text-slate-300 md:flex">
          {navigation.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                onClick={(event) =>
                  handleNavigation(event, item.href)
                }
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