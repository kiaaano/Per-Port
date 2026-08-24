function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-slate-800 bg-slate-950 py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          
          {/* Main message */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Contact
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let's create something{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                meaningful.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
              Whether it's a new opportunity, a project idea, or simply a
              conversation about technology, I'd be happy to connect.
            </p>
          </div>

          {/* Contact options */}
          <div className="space-y-4">
            <a
              href="mailto:your-email@example.com"
              className="group block rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900/70"
            >
              <p className="text-sm font-medium text-slate-500">
                Email
              </p>

              <p className="mt-2 text-lg font-medium text-white transition-colors group-hover:text-blue-400">
                your-email@example.com
              </p>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900/70"
            >
              <p className="text-sm font-medium text-slate-500">
                GitHub
              </p>

              <p className="mt-2 text-lg font-medium text-white transition-colors group-hover:text-blue-400">
                View my projects
              </p>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900/70"
            >
              <p className="text-sm font-medium text-slate-500">
                LinkedIn
              </p>

              <p className="mt-2 text-lg font-medium text-white transition-colors group-hover:text-blue-400">
                Connect with me
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;