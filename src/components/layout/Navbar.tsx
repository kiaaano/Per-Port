import navigation from "../../data/navigation";

function Navbar() {
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
                className="transition-colors hover:text-blue-400"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;