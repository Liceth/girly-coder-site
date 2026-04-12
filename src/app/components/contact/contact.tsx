"use client";

import AnimatedSection from "../AnimatedSection";

export function Contact() {
  const links = [
    {
      label: "Email",
      href:  "mailto:licethovallesrodriguez@gmail.com",
      note:  "licethovallesrodriguez@gmail.com",
    },
    {
      label: "LinkedIn",
      href:  "https://www.linkedin.com/in/liceth-ovalles-44897591/",
      note:  "liceth-ovalles",
    },
    {
      label: "GitHub",
      href:  "https://github.com/liceth",
      note:  "github.com/liceth",
    },
  ];

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="py-28 px-6"
    >
      <div className="max-w-2xl mx-auto text-center">

        <AnimatedSection delay={0.1}>
          <p className="text-xs tracking-[0.22em] uppercase text-[#c8869a] mb-4 font-poppins">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-[#2d2420] mb-6 leading-tight">
            Let&apos;s build something
            <br />
            <span className="italic font-normal text-[#8f5a6e]">together.</span>
          </h2>
          <p className="font-poppins font-light text-[#5c4a42] text-base leading-relaxed mb-14 max-w-sm mx-auto">
            If you want to talk about projects, technology, or husky dogs —
            I&apos;d love to hear from you.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <ul className="divide-y divide-[#e8e0d6] border-y border-[#e8e0d6]" role="list">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="flex items-center justify-between px-4 py-5 hover:bg-[#faf5f2] transition-colors duration-200 group focus:outline-none focus:bg-[#faf5f2]"
                >
                  <span className="font-playfair text-lg text-[#2d2420] group-hover:text-[#8f5a6e] transition-colors duration-200">
                    {link.label}
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="font-poppins text-xs text-[#c4b5a2] group-hover:text-[#8f5a6e] transition-colors duration-200 hidden sm:block">
                      {link.note}
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#c4b5a2] group-hover:text-[#c8869a] transition-colors duration-200"
                      aria-hidden="true"
                    >
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        {/* Signature */}
        <AnimatedSection delay={0.3}>
          <p className="mt-16 font-playfair text-sm italic text-[#c4b5a2]">
            Liceth Ovalles · Bogotá, Colombia 🌸
          </p>
        </AnimatedSection>

      </div>
    </section>
  );
}
