"use client";

import AnimatedSection from "../AnimatedSection";

// ── data ──────────────────────────────────────────────────────────────────────
const experience = [
  {
    company:  "Kinesso",
    position: "UI Engineer",
    location: "Bogotá / Remote",
    period:   "Jul 2024 — Present",
    achievements: [
      "Architecting and deploying an AI-powered trend detection SaaS platform with React, Next.js, and TypeScript",
      "Implemented server-side rendering (SSR) and dynamic API integrations, reducing report generation time",
      "Built proof-of-concept data visualisation dashboards with AG Grid and statistical computation pipelines",
      "Improved unit and integration test coverage by 80% with Jest and Cypress, ensuring release confidence",
      "Collaborated with cross-functional teams (designers, backend, data engineers) to deliver scalable features",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Cypress", "Jest", "AG Grid", "SSR", "WebSockets", "Dagster"],
  },
  {
    company:  "Huge Inc — Google Projects",
    position: "UI Engineer",
    location: "Bogotá / Remote",
    period:   "Apr 2021 — Jul 2024",
    achievements: [
      "Developed and maintained scalable CMS and analytics platforms for Google marketing teams",
      "Created reusable web components and integrated third-party APIs to accelerate feature delivery",
      "Delivered WCAG-compliant, internationalised interfaces across multiple markets and languages",
      "Monitored performance with GA4 and optimised UX for large-scale user traffic",
      "Reviewed code and mentored junior engineers, fostering best practices in accessibility and testing",
    ],
    tech: ["React", "TypeScript", "CMS", "REST APIs", "WCAG", "GA4", "Localisation", "Jest"],
  },
  {
    company:  "Globant",
    position: "Web UI Developer",
    location: "Bogotá",
    period:   "Apr 2019 — Mar 2021",
    achievements: [
      "Implemented modern user interfaces with React and JavaScript for enterprise clients",
      "Collaborated with backend teams to consume RESTful APIs and ensure seamless integrations",
      "Optimised app performance, accessibility, and cross-browser compatibility",
    ],
    tech: ["React", "JavaScript", "HTML5", "CSS3", "REST APIs"],
  },
  {
    company:  "Stefanini",
    position: "Frontend Developer",
    location: "Barranquilla",
    period:   "Oct 2018 — Dec 2018",
    achievements: [
      "Developed a responsive admin dashboard using React and Redux",
      "Integrated APIs and implemented dynamic state management to enhance UX",
    ],
    tech: ["React", "Redux", "Admin Dashboard", "APIs"],
  },
  {
    company:  "CrowdSwap",
    position: "Frontend Developer",
    location: "Bogotá",
    period:   "Jul 2018 — Oct 2018",
    achievements: [
      "Built MVP mobile app using React Native and GraphQL for real-time trading features",
      "Implemented Swift native modules for hybrid mobile functionality",
    ],
    tech: ["React Native", "GraphQL", "Swift"],
  },
  {
    company:  "Nativapps",
    position: "Frontend Developer",
    location: "Barranquilla",
    period:   "May 2017 — Jul 2018",
    achievements: [
      "Maintained and enhanced a full-stack CRM application with PHP, JavaScript, and AWS",
      "Improved workflows, fixed bugs, and contributed to cloud deployments",
    ],
    tech: ["PHP", "JavaScript", "AWS", "CRM"],
  },
];

// ── component ─────────────────────────────────────────────────────────────────
export function Work() {
  return (
    <section
      id="work"
      aria-label="Work experience"
      className="py-28 px-6"
    >
      <div className="max-w-3xl mx-auto">

        {/* Section header */}
        <AnimatedSection delay={0.1}>
          <p className="text-xs tracking-[0.22em] uppercase text-[#c8869a] mb-3 font-poppins">
            Experience
          </p>
          <h2 className="text-4xl font-playfair font-semibold text-[#2d2420] mb-12">
            Work History
          </h2>
          <hr className="border-[#e8e0d6] mb-16" />
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical rail */}
          <div
            className="absolute left-0 top-2 bottom-2 w-px bg-[#e8e0d6]"
            aria-hidden="true"
          />

          <ol className="space-y-16 list-none">
            {experience.map((job, i) => (
              <AnimatedSection key={`${job.company}-${i}`} delay={0.1 + i * 0.06}>
                <li className="pl-8 relative">
                  {/* Timeline dot */}
                  <span
                    className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-[#c8869a] ring-2 ring-[#fdfbf8]"
                    aria-hidden="true"
                  />

                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-[#2d2420] leading-snug">
                        {job.position}
                      </h3>
                      <p className="font-poppins text-sm font-medium text-[#8f5a6e] mt-0.5">
                        {job.company}
                      </p>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <p className="font-poppins text-xs text-[#c4b5a2] tracking-wide">
                        {job.period}
                      </p>
                      <p className="font-poppins text-xs text-[#c4b5a2] mt-0.5">
                        {job.location}
                      </p>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-5">
                    {job.achievements.map((a) => (
                      <li
                        key={a}
                        className="font-poppins font-light text-sm text-[#5c4a42] leading-relaxed flex gap-3"
                      >
                        <span className="text-[#c8869a] shrink-0 mt-0.5 text-[10px]">◆</span>
                        {a}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full text-[10px] font-poppins font-medium tracking-wide bg-[#f7eff2] text-[#8f5a6e] border border-[#e8d0d8]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </li>
              </AnimatedSection>
            ))}
          </ol>
        </div>

      </div>
    </section>
  );
}
