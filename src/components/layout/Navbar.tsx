
function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-blue-400">
          Pokemoanx
        </a>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-slate-300">
          <li>
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-400 transition-colors">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;