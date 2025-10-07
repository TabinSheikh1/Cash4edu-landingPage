
"use client";
import React, { useEffect, useRef } from "react";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

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
          },
        }
      );
    }

    if (headlineRef.current) {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }

    if (stepsRef.current) {
      gsap.fromTo(
        stepsRef.current.children,
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.18,
          delay: 0.4,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  const steps = [
    {
      icon: "lucide:user-plus",
      title: "1. Sign Up",
      text: "Sign up in less than a minute and create your student profile.",
      bg: "bg-blue-100 dark:bg-blue-900/30",
      border: "border-blue-200 dark:border-blue-800/50",
      hover: "hover:shadow-blue-400/30 dark:hover:shadow-blue-500/40",
    },
    {
      icon: "lucide:search",
      title: "2. Get Matched",
      text: "Get matched with scholarships and rewards that fit you.",
      bg: "bg-green-100 dark:bg-green-900/30",
      border: "border-green-200 dark:border-green-800/50",
      hover: "hover:shadow-green-400/30 dark:hover:shadow-green-500/40",
    },
    {
      icon: "lucide:check-circle",
      title: "3. Apply & Track",
      text: "Apply, earn, and track your progress in one place.",
      bg: "bg-yellow-100 dark:bg-yellow-900/30",
      border: "border-yellow-200 dark:border-yellow-800/50",
      hover: "hover:shadow-yellow-400/30 dark:hover:shadow-yellow-500/40",
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-24 border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors duration-500 "
    >
      <div className="container text-center">
        <span className="text-sm text-[#014bac] uppercase font-semibold tracking-wider dark:text-[#05d3f7]">
          How It Works
        </span>
        <h2
          ref={headlineRef}
          className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mt-3"
        >
          Your Path to Scholarships & <span className="bg-gradient-to-r from-[#014bac] to-[#05d3f7] bg-clip-text text-transparent">
                Rewards
              </span> 
        </h2>

        <div
          ref={stepsRef}
          className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-12"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center px-6 py-8 rounded-2xl border transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl dark:hover:shadow-lg ${step.bg} ${step.border} ${step.hover}`}
            >
              <div
                className={`flex items-center justify-center ${step.bg} rounded-full h-20 w-20 border ${step.border}`}
              >
                <IconifyIcon
                  icon={step.icon}
                  className="h-8 w-8 text-[#014bac] dark:text-[#05d3f7]"
                />
              </div>
              <h3 className="text-xl font-semibold mt-5 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400 mt-2">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
