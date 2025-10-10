"use client";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import study from "@/assets/images/study.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fade-in animations
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
            start: "top 70%",
          },
        }
      );
    }

    // ❌ Removed floating animation on image
    // The image will now stay static in place
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center gap-6">
          {/* Left Side */}
          <div className="lg:ms-5 ms-8">
            <div>
              <span className="text-sm text-[#014bac] uppercase font-semibold tracking-wider dark:text-[#05d3f7]">
                About Us
              </span>
            </div>
            <h1
              ref={headlineRef}
              className="text-3xl md:text-4xl/tight font-semibold text-black dark:text-white mt-4"
            >
              What is{" "}
              <span className="bg-gradient-to-r from-[#014bac] to-[#05d3f7] bg-clip-text text-transparent">
                Cash 4 Edu?
              </span>
            </h1>
            <p className="text-base font-normal text-muted dark:text-gray-300 mt-6">
              Cash 4 Edu is a mobile-first app designed to reduce student debt
              and increase access to education. We connect students to
              scholarships, grants, tuition benefits, and financial literacy
              resources in a fun, easy-to-use way.
            </p>

            {/* Steps */}
            <div
              ref={stepsRef}
              className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-9"
            >
              {/* Step 1 */}
              <div className="group transition-transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg rounded-xl p-2">
                <div className="flex items-center justify-start">
                  <div className="items-center justify-center flex bg-green-50 dark:bg-green-900/30 rounded-full h-20 w-20 border border-dashed border-green-50 dark:border-green-800/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                    <IconifyIcon
                      icon="lucide:smartphone"
                      className="h-8 w-8 text-black dark:text-white transition-transform duration-300 group-hover:rotate-12"
                    />
                  </div>
                </div>
                <h1 className="text-xl font-semibold pt-6 text-gray-900 dark:text-white">
                  1. Download
                </h1>
                <p className="text-base text-gray-600 dark:text-gray-400 font-normal mt-2">
                  Get the app and access opportunities anytime, anywhere.
                </p>
              </div>

              {/* Step 2 */}
              <div className="group transition-transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg rounded-xl p-2">
                <div className="flex items-center justify-start">
                  <div className="items-center justify-center flex bg-red-50 dark:bg-red-900/30 rounded-full h-20 w-20 border border-dashed border-red-50 dark:border-red-800/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                    <IconifyIcon
                      icon="lucide:file-text"
                      className="h-8 w-8 text-black dark:text-white transition-transform duration-300 group-hover:-rotate-12"
                    />
                  </div>
                </div>
                <h1 className="text-xl font-semibold pt-6 text-gray-900 dark:text-white">
                  2. Set Profile
                </h1>
                <p className="text-base text-gray-600 dark:text-gray-400 font-normal mt-2">
                  Tell us about your goals to unlock tailored scholarships and
                  resources.
                </p>
              </div>

              {/* Step 3 */}
              <div className="group transition-transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg rounded-xl p-2">
                <div className="flex items-center justify-start">
                  <div className="items-center justify-center flex bg-primary/10 dark:bg-blue-900/30 rounded-full h-20 w-20 border border-dashed border-primary/10 dark:border-blue-800/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                    <IconifyIcon
                      icon="lucide:rocket"
                      className="h-8 w-8 text-black dark:text-white transition-transform duration-300 group-hover:rotate-6"
                    />
                  </div>
                </div>
                <h1 className="text-xl font-semibold pt-6 text-gray-900 dark:text-white">
                  3. Apply
                </h1>
                <p className="text-base text-gray-600 dark:text-gray-400 font-normal mt-2">
                  Explore scholarships, grants, and tools to reduce student
                  debt.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex items-center relative" ref={imgRef}>
            <Image
              src={study}
              className="lg:h-[500px] lg:w-[500px] md:w-[600px] md:h-[500px] h-[300px] w-[330px] rounded-xl mx-auto drop-shadow-2xl border border-gray-200 dark:border-gray-700 transition-transform duration-700"
              alt="study"
              width={538}
              height={200}
            />
            <div className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-br from-[#05d3f7] to-[#014bac] rounded-full blur-2xl opacity-40 animate-pulse pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
