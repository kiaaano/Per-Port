import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Get in touch
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's create something{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              meaningful.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Whether you have an opportunity, a project idea, or simply want
            to talk about technology, I'd be happy to connect.
          </p>
        </div>

        {/* Contact options */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          
          {/* Email */}
          <a
            href="mailto:your-email@example.com"
           className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-500/40 hover:bg-slate-900/70 hover:shadow-2xl hover:shadow-blue-500/5"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-blue-400 shadow-lg shadow-blue-500/5 transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/10 group-hover:shadow-blue-500/10">
                  <Mail
                      size={20}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                </div>

                <p className="text-sm font-medium text-slate-500">
                  Email
                </p>

                <p className="mt-3 text-lg font-medium text-white transition-colors duration-300 group-hover:text-blue-400">
                  kianterrence0616@gmail.com
                </p>
              </div>

              <ArrowUpRight
                size={20}
                strokeWidth={1.8}
                className="text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-400"
              />
            </div>

            <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-500/40 hover:bg-slate-900/70 hover:shadow-2xl hover:shadow-blue-500/5"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-blue-400 shadow-lg shadow-blue-500/5 transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/10 group-hover:shadow-blue-500/10">
                  <FaGithub
                      size={20}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                </div>

                <p className="text-sm font-medium text-slate-500">
                  GitHub
                </p>

                <p className="mt-3 text-lg font-medium text-white transition-colors duration-300 group-hover:text-blue-400">
                  View my projects
                </p>
              </div>

              <ArrowUpRight
                size={20}
                strokeWidth={1.8}
                className="text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-400"
              />
            </div>

            <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-500/40 hover:bg-slate-900/70 hover:shadow-2xl hover:shadow-blue-500/5"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-blue-400 shadow-lg shadow-blue-500/5 transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/10 group-hover:shadow-blue-500/10">
                  <FaLinkedin
                      size={20}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                </div>

                <p className="text-sm font-medium text-slate-500">
                  LinkedIn
                </p>

                <p className="mt-3 text-lg font-medium text-white transition-colors duration-300 group-hover:text-blue-400">
                  Connect with me
                </p>
              </div>

              
            </div>

            <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </a>
        </div>

       
      </div>
    </section>
  );
}

export default Contact;