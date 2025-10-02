"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
          }
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
          }
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
          }
        }
      );
    }
  }, []);

  return (
    <section id="closing" className="py-20 bg-gradient-to-b from-white to-blue-50" ref={sectionRef}>
      <div className="container text-center">
        <h2
          ref={headlineRef}
          className="text-3xl md:text-4xl font-bold text-[#002366] mb-4"
        >
          Ready to Start Your Journey?
        </h2>
        <p
          ref={subRef}
          className="text-lg text-gray-700 mb-7"
        >
          Join Cash 4 Edu and unlock a world of scholarships, rewards, and opportunities.
        </p>
      </div>
    </section>
  );
};

export default Closing;