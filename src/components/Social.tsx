"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const SocialProof = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

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
        { opacity: 0, y: 30 },
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
    if (subRef.current) {
      gsap.fromTo(
        subRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.6,
          ease: "back.out(1.7)",
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
      id="social-proof"
      ref={sectionRef}
      className="py-24 bg-gray-100 dark:bg-gray-900 text-center transition-colors duration-300"
    >
      <div className="container">
        <h2
          ref={headlineRef}
          className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white max-w-3xl mx-auto"
        >
          Over{" "}
          <span className="bg-gradient-to-r from-[#014bac] to-[#05d3f7] bg-clip-text text-transparent">
            2,000 students
          </span>{" "}
          have already joined the waitlist.
        </h2>
        <p
          ref={subRef}
          className="text-base md:text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto"
        >
          Our beta program has helped connect students with more than{" "}
          <span className="font-semibold text-[#014bac] dark:text-[#05d3f7]">
            $50,000 in scholarships.
          </span>{" "}
        </p>
        <Link href="#waitlist">
          <button
            ref={ctaRef}
            className="mt-8 bg-gradient-to-r from-[#05d3f7] to-[#014bac] px-8 py-3 rounded-lg text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
          >
            Join today and be part of the movement to make higher education more affordable.
          </button>
          </Link>
      </div>
    </section>
  );
};

export default SocialProof;
