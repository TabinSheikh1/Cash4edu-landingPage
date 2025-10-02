"use client";
import React, { useRef, useEffect, useState } from "react";
import { LuChevronUp, LuChevronDown, LuShieldQuestion } from "react-icons/lu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "What services do you offer?",
    a: "We offer a wide range of digital services, including website design and development, e-commerce solutions, search engine optimization, social media management, pay-per-click advertising, brand identity."
  },
  {
    q: "How long does it take for you to complete a project?",
    a: "Project timelines vary based on scope, but we always strive for timely delivery and clear communication."
  },
  {
    q: "How much does it cost to work with your agency?",
    a: "Our pricing is flexible and tailored to your needs. Contact us for a custom quote."
  }
];

const stats = [
  {
    icon: (
      <svg className="w-8 h-8 text-[#014bac]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="4" strokeWidth={2} />
        <path d="M7 7h.01M7 11h.01M7 15h.01M11 7h2M11 11h2M11 15h2M15 7h2M15 11h2M15 15h2" strokeWidth={2} />
      </svg>
    ),
    value: "200+",
    label: "Team member"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#05d3f7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="4" strokeWidth={2} />
        <path d="M7 17V7M12 17V12M17 17V9" strokeWidth={2} />
      </svg>
    ),
    value: "10k+",
    label: "Complete project"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#05d3f7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" strokeWidth={2} />
      </svg>
    ),
    value: "20+",
    label: "Winning award"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#014bac]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth={2} />
        <path d="M8 8h8M8 12h4" strokeWidth={2} />
      </svg>
    ),
    value: "900+",
    label: "Student Review"
  }
];

const EduAsk = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(0);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          }
        }
      );
    }
    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }
    if (rightRef.current) {
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-[#f8fbff] flex justify-center"
      id="edu-ask"
    >
      <div className="w-[90vw] max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: FAQ */}
          <div ref={leftRef}>
            <span className="flex items-center gap-2 text-sm font-medium text-[#05d3f7] mb-2">
              <span className="text-xl"><LuShieldQuestion /></span> Ask Question
            </span>
            <h2 className="text-4xl font-extrabold text-[#014bac] mb-4 leading-tight">
              Innovation Moves<br />You Forward
            </h2>
            <p className="text-[#014bac]/80 mb-8 max-w-lg">
              Dictum ultrices porttitor amet nec sollicitudin mi molestie adipiscing netus. Lorem at ac ut morbi ullamcorper molestie lacus lorem ipsum dummy text provide happy
            </p>
            <div className="divide-y divide-[#e5eaf1] border-t border-[#e5eaf1]">
              {faqs.map((faq, idx) => (
                <div key={idx}>
                  <button
                    className={`flex items-center w-full py-4 text-lg font-semibold transition-colors ${open === idx
                      ? "text-[#014bac]"
                      : "text-[#014bac]/90"
                      }`}
                    onClick={() => setOpen(open === idx ? -1 : idx)}
                  >
                    <span className="mr-3">
                      {open === idx ? (
                        <span className="inline-block text-[#05d3f7] bg-[#eafaff] rounded-full p-1">
                          <LuChevronUp className="inline-block" />
                        </span>
                      ) : (
                        <span className="inline-block text-[#05d3f7] bg-[#eafaff] rounded-full p-1">
                          <LuChevronDown className="inline-block" />
                        </span>
                      )}
                    </span>
                    {faq.q}
                  </button>
                  {open === idx && (
                    <div className="py-2 pl-12 pr-2 text-[#014bac]/80 text-base">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Right: Stats */}
          <div ref={rightRef}>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-6 border border-[#e5eaf1] hover:shadow-lg transition"
                >
                  <div className="mb-3">{stat.icon}</div>
                  <div className="text-2xl font-bold text-[#014bac]">{stat.value}</div>
                  <div className="text-[#014bac]/80 text-base">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#014bac] hover:bg-[#05d3f7] text-white font-semibold px-8 py-3 rounded-2xl shadow transition"
              >
                Read More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EduAsk;