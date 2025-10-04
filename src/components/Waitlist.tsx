"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Waitlist = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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
            start: "top 80%",
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
          duration: 1,
          delay: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }
    if (subRef.current) {
      gsap.fromTo(
        subRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        }
      );
    }
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          delay: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="waitlist"
      ref={sectionRef}
      className="w-full py-24 
      bg-gradient-to-b from-blue-200 via-white to-white 
      dark:from-gray-900 dark:via-gray-950 dark:to-black
      flex justify-center items-center overflow-hidden relative"
    >
      {/* Decorative blob */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-100 dark:bg-blue-900 rounded-full opacity-30 blur-3xl pointer-events-none"></div>

      <div className="max-w-xl w-full mx-auto text-center px-4 relative z-10">
        <h2
          ref={headlineRef}
          className="text-3xl md:text-4xl/tight font-bold 
          text-[#014bac] dark:text-[#05d3f7] mb-3"
        >
          Be the First to Know{" "}
          <span className="bg-gradient-to-r from-[#014bac] to-[#05d3f7] bg-clip-text text-transparent">
             When We Launch
          </span>{" "}
          🚀
        </h2>

        <p
          ref={subRef}
          className="text-lg text-gray-700 dark:text-gray-300 mb-7"
        >
          Join the waitlist and secure early access to exclusive scholarships
          and perks.
        </p>

        <form
          ref={formRef}
          className="flex flex-col sm:flex-row items-center gap-3 justify-center mb-2"
        >
          <input
            type="email"
            required
            placeholder="Enter your email…"
            className="w-full sm:w-auto flex-1 px-4 py-3 rounded-md 
            border border-gray-300 dark:border-gray-600 
            bg-white dark:bg-gray-800 
            text-gray-900 dark:text-gray-200
            placeholder-gray-500 dark:placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#05d3f7] to-[#014bac] 
            px-6 py-3 text-white font-semibold rounded-lg shadow-md 
            hover:shadow-lg transition duration-300"
          >
            <span role="img" aria-label="Join">
              👉
            </span>{" "}
            Join the Waitlist
          </button>
        </form>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          No spam. Just early access to perks & scholarships.
        </p>
      </div>
    </section>
  );
};

export default Waitlist;
