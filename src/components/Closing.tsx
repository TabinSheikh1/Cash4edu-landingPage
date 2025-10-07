"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Closing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

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
  }, []);

  return (
    <section
      id="closing"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <div className="container text-center">
        <h2
          ref={headlineRef}
          className="text-3xl md:text-4xl font-bold text-[#014bac] dark:text-[#05d3f7] mb-4"
        >
          Start Funding Your Future Today
        </h2>
        <p
          ref={subRef}
          className="text-lg text-gray-700 dark:text-gray-300 mb-7"
        >
          Be among the first to access scholarships, rewards, and financial tools with Cash 4 Edu.
        </p>

        <div className="flex justify-center gap-4">
      {/* <a
        href="/contact"
        className="px-6 py-3 bg-[#014bac] text-white font-medium rounded-xl shadow hover:bg-[#013b8a] transition duration-300"
      >
        Contact Us
      </a> */}

      <Link
                href="#waitlist"
                className="bg-gradient-to-r from-[#05d3f7] to-[#014bac] px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
              >
                Join the Waitlist
              </Link>
    </div>
      </div>
    </section>
  );
};

export default Closing;
