function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-slate-800 bg-slate-950 py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              meaningful.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400">
            I'm always open to discussing new opportunities, projects, and
            ideas. If you'd like to work together or simply connect, feel free
            to reach out.
          </p>
        </div>

        {/* Contact cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="mailto:your-email@example.com"
            className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900/70"
          >
            <p className="text-sm font-medium text-slate-500">Email</p>

            <p className="mt-2 text-white transition-colors group-hover:text-blue-400">
              your-email@example.com
            </p>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900/70"
          >
            <p className="text-sm font-medium text-slate-500">GitHub</p>

            <p className="mt-2 text-white transition-colors group-hover:text-blue-400">
              View my projects
            </p>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900/70"
          >
            <p className="text-sm font-medium text-slate-500">LinkedIn</p>

            <p className="mt-2 text-white transition-colors group-hover:text-blue-400">
              Connect with me
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;