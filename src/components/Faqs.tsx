"use client";
import React, { useRef, useEffect, useState } from "react";
import { LuChevronUp, LuChevronDown, LuShieldQuestion } from "react-icons/lu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "What is Cash 4 Edu?",
    a: "Cash 4 Edu is a mobile-first platform that helps students discover scholarships, earn financial literacy rewards, and access verified education funding opportunities — all in one place. Our mission is simple: fuel ambition and fund education.",
  },
  {
    q: "How does Cash 4 Edu work?",
    a: "Once you create a profile, our AI matches you with scholarships that fit your goals, school, and background. You can also watch short videos to earn tokens, explore student perks, and connect with verified education partners who offer funding or rewards.",
  },
  {
    q: "Who can use Cash 4 Edu?",
    a: "Cash 4 Edu is built for students of all levels — high school, college, trade school, and graduate programs — as well as vendors and organizations that want to support students through verified scholarships, discounts, or learning resources.",
  },
  {
    q: "What kind of rewards can I earn?",
    a: "You can earn tokens for completing financial literacy videos, referring friends, or engaging with partner brands. Tokens can be redeemed for perks, giveaways, and exclusive student offers.",
  },
  {
    q: "How do I know the scholarships are real?",
    a: "Every scholarship and vendor listed on Cash 4 Edu goes through a verification process handled by our internal review team to ensure legitimacy and transparency. If it’s on Cash 4 Edu, it’s been checked and verified.",
  },
  {
    q: "Can businesses or schools partner with Cash 4 Edu?",
    a: "Absolutely! We partner with schools, nonprofits, and companies to help them reach students through verified scholarships and sponsored perks. You can apply to become a partner directly through our Vendor Portal.",
  },
  {
    q: "When will the app officially launch?",
    a: "We’re currently in development and plan to launch in early 2026. Waitlist members will get exclusive early access and bonus rewards once the app is live.",
  },
  {
    q: "How can I stay updated on new opportunities?",
    a: "Join our LinkedIn community and follow us on social media for updates, giveaways, and scholarship highlights.",
  },
];

const stats = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#014bac] transition-all duration-500 group-hover:text-[#05d3f7] group-hover:rotate-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <rect x="3" y="3" width="18" height="18" rx="4" strokeWidth={2} />
        <path
          d="M7 7h.01M7 11h.01M7 15h.01M11 7h2M11 11h2M11 15h2M15 7h2M15 11h2M15 15h2"
          strokeWidth={2}
        />
      </svg>
    ),
    value: "2,000+",
    label: "Students Joined",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#05d3f7] transition-all duration-500 group-hover:text-[#014bac] group-hover:rotate-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <rect x="3" y="3" width="18" height="18" rx="4" strokeWidth={2} />
        <path d="M7 17V7M12 17V12M17 17V9" strokeWidth={2} />
      </svg>
    ),
    value: "$50K+",
    label: "Scholarship Funds Connected",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#05d3f7] transition-all duration-500 group-hover:text-[#014bac] group-hover:-rotate-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          strokeWidth={2}
        />
      </svg>
    ),
    value: "20+",
    label: "Verified Partners",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#014bac] transition-all duration-500 group-hover:text-[#05d3f7] group-hover:-rotate-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth={2} />
        <path d="M8 8h8M8 12h4" strokeWidth={2} />
      </svg>
    ),
    value: "900+",
    label: "Positive Reviews",
  },
];

const EduAsk = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [open, setOpen] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-[#f8fbff] dark:bg-gray-900 transition-colors duration-300 flex justify-center"
      id="faqs"
    >
      <div className="w-[90vw] max-w-6xl mx-auto flex flex-col items-center text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div ref={leftRef}>
            <span className="flex items-center gap-2 text-sm font-medium text-[#014bac] dark:text-[#05d3f7] mb-2">
              <LuShieldQuestion className="text-lg" /> Frequently Asked Questions
            </span>
            <h2 className="text-4xl font-extrabold text-[#014bac] dark:text-white mb-4 leading-tight">
              Learn More About{" "}
              <span className="bg-gradient-to-r from-[#014bac] to-[#05d3f7] bg-clip-text text-transparent">
                Cash 4 Edu
              </span>
            </h2>

            <div className="divide-y divide-[#e5eaf1] dark:divide-gray-700 border-t border-[#e5eaf1] dark:border-gray-700">
              {faqs.map((faq, idx) => (
                <div key={idx}>
                  <button
                    className={`flex items-center w-full py-4 text-lg font-semibold transition-colors ${
                      open === idx
                        ? "text-[#014bac] dark:text-[#05d3f7]"
                        : "text-[#014bac]/90 dark:text-gray-300"
                    }`}
                    onClick={() => setOpen(open === idx ? -1 : idx)}
                  >
                    <span className="mr-3">
                      {open === idx ? (
                        <LuChevronUp className="text-[#05d3f7]" />
                      ) : (
                        <LuChevronDown className="text-[#05d3f7]" />
                      )}
                    </span>
                    {faq.q}
                  </button>
                  {open === idx && (
                    <div className="py-2 pl-10 pr-2 text-black/80 dark:text-gray-300 text-base">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section (Stats) */}
          <div ref={rightRef} className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-md mx-auto text-center">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#05d3f7]/30 dark:hover:shadow-[#014bac]/40"
                >
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <h3 className="text-2xl font-bold text-[#014bac] dark:text-[#05d3f7]">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EduAsk;
