"use client";

import AnimatedSection from "../AnimatedSection";

// ── data ──────────────────────────────────────────────────────────────────────
type Level = "expert" | "advanced" | "intermediate" | "beginner";

const skillCategories: {
  category: string;
  skills: { name: string; level: Level }[];
}[] = [
  {
    category: "Frontend & UI",
    skills: [
      { name: "React.js",                         level: "expert"       },
      { name: "Next.js",                           level: "expert"       },
      { name: "TypeScript",                        level: "expert"       },
      { name: "JavaScript (ES6+)",                 level: "expert"       },
      { name: "HTML5 & CSS3",                      level: "expert"       },
      { name: "Tailwind CSS",                      level: "expert"       },
      { name: "UI Components & Design Systems",    level: "advanced"     },
      { name: "Data Visualisation",                level: "intermediate" },
      { name: "Accessibility (A11y)",              level: "advanced"     },
    ],
  },
  {
    category: "Engineering",
    skills: [
      { name: "Jest & React Testing Library",      level: "advanced"     },
      { name: "Git & GitHub / GitLab",             level: "expert"       },
      { name: "Nx Monorepos",                      level: "beginner" },
      { name: "Linting & Pre-commit hooks",        level: "advanced"     },
      { name: "Docker & GitHub Actions",           level: "beginner" },
      { name: "Terraform",                         level: "beginner"     },
    ],
  },
  {
    category: "Architecture",
    skills: [
      { name: "Micro Frontends",                   level: "intermediate" },
      { name: "Performance Optimisation",          level: "advanced"     },
      { name: "REST & GraphQL APIs",               level: "advanced"     },
      { name: "WebSockets",                        level: "intermediate" },
      { name: "SaaS Platforms",                    level: "advanced"     },
      { name: "Bundle Optimisation",               level: "advanced"     },
    ],
  },
  {
    category: "Animation & UX",
    skills: [
      { name: "Framer Motion",                     level: "expert"       },
      { name: "CSS Animations",                    level: "expert"       },
      { name: "Responsive Design",                 level: "expert"       },
      { name: "User Experience Design",            level: "advanced"     },
      { name: "Design Systems",                    level: "advanced"     },
    ],
  },
  {
    category: "Collaboration",
    skills: [
      { name: "Mentorship & Team Leadership",      level: "advanced"     },
      { name: "Cross-functional Collaboration",    level: "expert"       },
      { name: "Agile / Scrum",                     level: "expert"       },
      { name: "Problem Solving",                   level: "expert"       },
      { name: "English & Spanish",                 level: "expert"       },
    ],
  },
];

// ── level styles — warm & muted ───────────────────────────────────────────────
const levelStyle: Record<Level, { tag: string; dot: string; label: string }> = {
  expert:       { tag: "bg-[#f7eff2] text-[#8f5a6e] border-[#e8d0d8]",      dot: "bg-[#c8869a]", label: "Expert"       },
  advanced:     { tag: "bg-[#f5f0ea] text-[#5c4a42] border-[#ddd5c8]",      dot: "bg-[#c4b5a2]", label: "Advanced"     },
  intermediate: { tag: "bg-[#f7f4ef] text-[#7a6a58] border-[#ddd5c8]",      dot: "bg-[#d4c4ae]", label: "Intermediate" },
  beginner:     { tag: "bg-[#f5f5f3] text-[#9c9088] border-[#dddad5]",      dot: "bg-[#d5d0c8]", label: "Learning"     },
};

// ── component ─────────────────────────────────────────────────────────────────
export function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills and expertise"
      className="py-28 px-6 bg-[#f7ede8]/30"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <AnimatedSection delay={0.1}>
          <p className="text-xs tracking-[0.22em] uppercase text-[#c8869a] mb-3 font-poppins">
            Expertise
          </p>
          <h2 className="text-4xl font-playfair font-semibold text-[#2d2420] mb-3">
            Skills
          </h2>
          <p className="font-poppins font-light text-[#5c4a42] text-base mb-12 max-w-lg leading-relaxed">
            A comprehensive overview of my technical skills, engineering practices,
            and professional capabilities.
          </p>
          <hr className="border-[#e8e0d6] mb-16" />
        </AnimatedSection>

        {/* Legend */}
        <AnimatedSection delay={0.15}>
          <div className="flex flex-wrap gap-4 mb-14">
            {(Object.entries(levelStyle) as [Level, typeof levelStyle[Level]][]).map(
              ([, v]) => (
                <div key={v.label} className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${v.dot}`} aria-hidden="true" />
                  <span className="text-xs font-poppins text-[#5c4a42]">{v.label}</span>
                </div>
              )
            )}
          </div>
        </AnimatedSection>

        {/* Categories */}
        <div className="space-y-14">
          {skillCategories.map((cat, i) => (
            <AnimatedSection key={cat.category} delay={0.1 + i * 0.07}>
              <div>
                {/* Category heading */}
                <div className="flex items-center gap-4 mb-5">
                  <h3 className="font-playfair text-lg text-[#2d2420] shrink-0">
                    {cat.category}
                  </h3>
                  <div className="flex-1 h-px bg-[#e8e0d6]" aria-hidden="true" />
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const s = levelStyle[skill.level];
                    return (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-poppins font-medium border ${s.tag}`}
                        title={s.label}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${s.dot}`} aria-hidden="true" />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
