// app/page.tsx or src/app/page.tsx
"use client";

import Link from "next/link";

const TAGS = [
  "Angular 18+",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Angular Signals",
  "NextAuth",
  "SSR & Hydration",
  "Highcharts",
  "Admin CMS",
  "OTT Platforms",
  "Banking Dashboards",
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Page wrapper */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12 md:py-16">
        {/* Hero */}
        <section className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-sky-400">
              Angular · Next.js · React.js
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Shaalya Dixit
            </h1>
            <p className="text-base text-slate-300 sm:text-lg">
              Senior Frontend Engineer with 4.5+ years of experience building
              OTT platforms, banking dashboards, and admin CMS panels using
              Angular 18, Next.js, and modern UI libraries. Focused on secure,
              scalable and performance-driven web applications.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/30 transition hover:translate-y-[1px] hover:bg-sky-400"
              >
                View Projects
              </a>
              <a
                href="mailto:shaalyadixit10@gmail.com"
                className="rounded-full border border-slate-600 px-5 py-2 text-sm font-medium text-slate-100 transition hover:border-sky-400 hover:text-sky-200"
              >
                Contact Me
              </a>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Side card */}
          <div className="mt-6 w-full max-w-sm md:mt-0">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl shadow-slate-950/70 backdrop-blur">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                Currently
              </p>
              <p className="mt-1 text-sm font-semibold text-sky-300">
                Senior Software Engineer · Appinventiv Technologies
              </p>
              <p className="mt-2 text-xs text-slate-300">
                Working on Angular 18 & Next.js based admin panels, OTT
                platforms and CMS dashboards with a focus on SSR, Signals and
                clean architecture.
              </p>

              <div className="mt-4 h-px bg-gradient-to-r from-slate-700 via-sky-500/50 to-slate-700" />

              <div className="mt-4 space-y-1 text-sm text-slate-300">
                <p>📍 Kanpur, India</p>
                <p>📧 shaalyadixit10@gmail.com</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="text-sky-300 hover:text-sky-200"
                >
                  LinkedIn
                </Link>
                <span className="text-slate-600">•</span>
                <Link
                  href="https://github.com"
                  target="_blank"
                  className="text-sky-300 hover:text-sky-200"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-12 border-t border-slate-800 pt-10">
          <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
            About
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            I&apos;m a frontend-focused Software Developer with over 4.5 years
            of experience working on OTT platforms, banking admin dashboards,
            digital invoicing solutions, and CMS-based applications. I
            specialize in Angular 18 and Next.js, using Signals, SSR,
            middleware, and NextAuth to build performant and secure
            applications.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            I enjoy converting complex business flows into clean, intuitive UIs,
            optimizing for performance, and maintaining scalable frontend
            architectures with strong coding standards and tooling.
          </p>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="mt-12 border-t border-slate-800 pt-10"
        >
          <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
            Experience
          </h2>

          <div className="mt-6 space-y-6">
            {/* Job 1 */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-md shadow-slate-950/60">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
                    Senior Software Engineer
                  </h3>
                  <p className="text-sm text-slate-300">
                    Appinventiv Technologies · Noida, India
                  </p>
                </div>
                <p className="text-xs text-slate-400">Apr 2022 – Present</p>
              </div>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.22em] text-sky-300">
                Angular 18 · Next.js · Admin CMS · OTT
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>
                  • Built multiple Admin CMS panels with complex data handling,
                  Highcharts dashboards and support for large file uploads.
                </li>
                <li>
                  • Developed custom standalone Angular components, maintaining
                  Enums, Interfaces and strict typing across the codebase.
                </li>
                <li>
                  • Ensured SSR, hydration and performance optimization in
                  Angular 18 using Signals and modern Angular practices.
                </li>
                <li>
                  • Created Next.js-based admin panels and OTT-like platforms
                  with NextAuth, middleware, secure routing and custom video
                  player configurations.
                </li>
                <li>
                  • Maintained clean code quality using Husky, ESLint and
                  well-defined workflows.
                </li>
              </ul>
            </article>

            {/* Job 2 */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-md shadow-slate-950/60">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
                    Frontend Developer
                  </h3>
                  <p className="text-sm text-slate-300">
                    Karnival Internet Technologies · Bangalore, India
                  </p>
                </div>
                <p className="text-xs text-slate-400">Dec 2020 – Apr 2022</p>
              </div>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.22em] text-sky-300">
                Angular 11+ · Tailwind · Material UI
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>
                  • Delivered live portals for post-sale journey, feedback, NPS
                  improvement, sales analytics and mini-games for global retail
                  brands.
                </li>
                <li>
                  • Built responsive Angular apps using HTML5, CSS3, ES6+, AJAX
                  and jQuery.
                </li>
                <li>
                  • Converted Figma wireframes into pixel-perfect UI using
                  Tailwind, Bootstrap, Material UI and Taiga UI.
                </li>
                <li>
                  • Implemented digital invoices and analytics features with
                  global impact.
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="mt-12 border-t border-slate-800 pt-10"
        >
          <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
            Featured Projects
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* Project 1 */}
            <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-md shadow-slate-950/60">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky-300">
                OTT Streaming Platform
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Next.js · Tailwind CSS · Hero UI · Node.js
              </p>
              <p className="mt-3 text-sm text-slate-300">
                Built a full-featured OTT platform with secure authentication
                using NextAuth and custom middleware, supporting route
                protection and session handling. Configured video players with
                ad tracking and dynamic content rendering, optimized using SSR
                and caching. Designed and developed the Admin CMS for content,
                user and subscription management.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                <li>• Authentication & middleware</li>
                <li>• Custom video player & ads</li>
                <li>• Admin CMS UI & workflows</li>
                <li>• SSR & performance tuning</li>
              </ul>
            </article>

            {/* Project 2 */}
            <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-md shadow-slate-950/60">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky-300">
                Banking Application CMS
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Angular 18 · RxJS · Highcharts · REST APIs
              </p>
              <p className="mt-3 text-sm text-slate-300">
                Developed a secure and scalable admin dashboard for banking
                operations using Angular standalone components and route guards
                for authentication and role-based access control. Integrated
                real-time data visualizations using Highcharts and optimized
                SSR/hydration performance using Angular Signals and best
                practices.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                <li>• Angular architecture & guards</li>
                <li>• Real-time data dashboards</li>
                <li>• Large file uploads</li>
                <li>• Performance optimization</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-12 border-t border-slate-800 pt-10">
          <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
            Skills & Tools
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-slate-100">
                Core Frontend
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>Angular 18+</li>
                <li>Next.js · React</li>
                <li>TypeScript · JavaScript (ES6+)</li>
                <li>HTML5 · CSS3 · SCSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-100">
                UI & Styling
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>Tailwind CSS</li>
                <li>Angular Material · Material UI</li>
                <li>Bootstrap · Taiga UI</li>
                <li>Responsive Web & Wireframes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-100">
                Ecosystem & Others
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>Highcharts · Chart.js</li>
                <li>REST APIs · Node.js · Firebase</li>
                <li>Git · GitHub · GitLab</li>
                <li>Jasmine · Postman</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section
          id="education"
          className="mt-12 border-t border-slate-800 pt-10"
        >
          <div className="grid gap-6 md:grid-cols-[1.2fr_1.5fr]">
            <div>
              <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
                Education
              </h2>
              <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <p className="text-sm font-semibold text-slate-100">
                  B.Tech (Electronics & Communication)
                </p>
                <p className="text-sm text-slate-300">
                  PSIT College of Engineering · Kanpur, India
                </p>
                <p className="mt-2 text-xs text-slate-400">2016 – 2020</p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
                Certifications
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>
                  • Mastering Angular (Basics to Advanced with Angular 18) –
                  Udemy
                </li>
                <li>
                  • Next.js 14 & React – The Complete Guide (App Router & Auth)
                  – Udemy
                </li>
                <li>
                  • HTML, CSS, and JavaScript for Web Developers – Coursera
                </li>
                <li>• TypeScript for Professionals – Udemy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mt-12 border-t border-slate-800 pt-10 pb-12"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
                Let&apos;s work together
              </h2>
              <p className="mt-3 max-w-xl text-sm text-slate-300 sm:text-base">
                I&apos;m open to roles focused on Angular, Next.js, React and
                modern frontend architecture — especially in OTT, fintech, SaaS,
                dashboards and CMS platforms.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:shaalyadixit10@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/30 transition hover:translate-y-[1px] hover:bg-sky-400"
              >
                Email Me
              </a>
              <p className="text-xs text-slate-400">
                Or connect on LinkedIn & GitHub.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
