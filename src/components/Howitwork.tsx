"use client";
import React, { useEffect, useRef, useState } from "react";

// --- Simple Lucide Icon Component ---
const LucideIcon = ({ icon, className }: { icon: string; className: string }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case "lucide:user-plus":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            viewBox="0 0 24 24" className={className}>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <line x1="19" y1="8" x2="19" y2="14"/>
            <line x1="22" y1="11" x2="16" y2="11"/>
          </svg>
        );
      case "lucide:search":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            viewBox="0 0 24 24" className={className}>
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
          </svg>
        );
      case "lucide:check-circle":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            viewBox="0 0 24 24" className={className}>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <path d="m9 11 2 2 4-4"/>
          </svg>
        );
      default:
        return <div className={className}>?</div>;
    }
  };
  return getIcon(icon);
};

// --- Intersection Fade-In Hook ---
const useIntersectionFadeIn = (ref: React.RefObject<HTMLElement>) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const current = ref.current;
    if (!current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(current);
      }
    }, { threshold: 0.1 });
    observer.observe(current);
    return () => observer.unobserve(current);
  }, [ref]);
  return isVisible;
};

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionVisible = useIntersectionFadeIn(sectionRef);

  const steps = [
    {
      icon: "lucide:user-plus",
      title: "1. Sign Up",
      text: "Sign up in less than a minute and create your student profile.",
      href: "#waitlist", 
      cardBg: "bg-white dark:bg-[#101934]",
      cardBorder: "border-blue-200 dark:border-[#1c2a52]",
      cardText: "text-gray-900 dark:text-white",
      iconBg: "bg-blue-100 dark:bg-[#1c2a52]",
      iconColor: "text-[#014bac] dark:text-[#05d3f7]",
      hover: "hover:shadow-xl hover:shadow-blue-300/50 dark:hover:shadow-blue-700/50",
    },
    {
      icon: "lucide:search",
      title: "2. Get Matched",
      text: "Get matched with scholarships and rewards that fit you.",
      href: "#waitlist", 
      cardBg: "bg-white dark:bg-[#18341e]",
      cardBorder: "border-green-200 dark:border-[#25522f]",
      cardText: "text-gray-900 dark:text-white",
      iconBg: "bg-green-100 dark:bg-[#25522f]",
      iconColor: "text-green-600 dark:text-green-400",
      hover: "hover:shadow-xl hover:shadow-green-300/50 dark:hover:shadow-green-700/50",
    },
    {
      icon: "lucide:check-circle",
      title: "3. Apply & Track",
      text: "Apply, earn, and track your progress in one place.",
      href: "#waitlist",
      cardBg: "bg-white dark:bg-[#342710]",
      cardBorder: "border-amber-200 dark:border-[#52441c]",
      cardText: "text-gray-900 dark:text-white",
      iconBg: "bg-amber-100 dark:bg-[#52441c]",
      iconColor: "text-amber-600 dark:text-amber-400",
      hover: "hover:shadow-xl hover:shadow-amber-300/50 dark:hover:shadow-amber-700/50",
    },
  ];

  const fadeClass = isSectionVisible
    ? "opacity-100 translate-y-0 scale-100"
    : "opacity-0 translate-y-10 scale-95";

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className={`py-24 bg-white dark:bg-[#0a1128] transition-all duration-1000 ease-out ${fadeClass}`}
    >
      <div className="container mx-auto px-4 text-center">
        <span className="text-sm text-[#014bac] dark:text-[#05d3f7] uppercase font-semibold tracking-wider">
          How It Works
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mt-3">
          Your Path to Scholarships{" "}
          <span className="bg-gradient-to-r from-[#014bac] to-[#05d3f7] bg-clip-text text-transparent">
            & Rewards
          </span>
        </h2>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-12">
          {steps.map((step, index) => (
            <a
              key={index}
              href={step.href}
              className={`flex flex-col items-center text-center px-6 py-8 rounded-2xl border-2 transition-all duration-200 ease-out 
              ${step.cardBg} ${step.cardBorder} ${step.hover} 
              hover:-translate-y-1 hover:scale-[1.01] cursor-pointer ${fadeClass}`}
              style={{ transitionDelay: isSectionVisible ? `${300 + index * 150}ms` : "0ms" }}
            >
              <div
                className={`flex items-center justify-center ${step.iconBg} rounded-full h-20 w-20 border border-current`}
              >
                <LucideIcon icon={step.icon} className={`h-8 w-8 ${step.iconColor}`} />
              </div>
              <h3 className={`text-xl font-semibold mt-5 ${step.cardText}`}>
                {step.title}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400 mt-2">
                {step.text}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
