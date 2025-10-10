"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import iterior from "@/assets/images/interior.png";
import bg3 from "@/assets/images/home/bg-3.png";
import Link from "next/link";
import mockup from "../../../../../public/images/mockup.png"

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const sloganRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entry animations
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
    if (headlineRef.current) {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          delay: 0.2,
          ease: "power4.out",
        }
      );
    }
    if (subRef.current) {
      gsap.fromTo(
        subRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
      );
    }
    if (sloganRef.current) {
      gsap.fromTo(
        sloganRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, delay: 0.7, ease: "power2.out" }
      );
    }
    if (btnsRef.current) {
      gsap.fromTo(
        btnsRef.current.children,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.9,
          ease: "back.out(1.7)",
        }
      );
    }
    if (imgRef.current) {
      // Floating subtle animation
      gsap.to(imgRef.current, {
        y: -15,
        duration: 2,
        ease: "easeInOut",
        repeat: -1,
        yoyo: true,
      });

      // Initial entry animation
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, x: 80, scale: 0.92, rotate: 8 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotate: 0,
          duration: 1.2,
          delay: 0.7,
          ease: "expo.out",
        }
      );
    }
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      style={{ backgroundImage: `url(${bg3.src})` }}
      className="relative pt-32 pb-20 bg-gray-200/40 dark:bg-gray-900 bg-no-repeat bg-cover overflow-hidden"
    >
      {/* Dark overlay for dark mode */}
      <div className="absolute inset-0 bg-gray-900 dark:block hidden z-[1]"></div>

      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#05d3f7] rounded-full opacity-30 blur-3xl pointer-events-none z-[2]"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#014bac] rounded-full opacity-30 blur-3xl pointer-events-none z-[2]"></div>

      <div className="relative container z-[3]">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 items-center ">
          {/* Left text section */}
          <div className="mt-14 lg:mt-0">
            <h1
              ref={headlineRef}
              className="text-3xl md:text-5xl/tight lg:text-6xl/tight text-[#014bac] dark:text-white tracking-normal capitalize leading-normal font-bold max-w-2xl"
            >
              Get Paid to Fund Your {" "}
              <span className="bg-gradient-to-r from-[#014bac] to-[#05d3f7] bg-clip-text text-transparent">
                Education
              </span>
            </h1>

            {/* New Slogan Line */}
            {/* <p
              ref={sloganRef}
              className="text-lg mt-4 font-semibold text-[#05d3f7] dark:text-[#aee7fa]"
            >
              Empowering students to learn, earn, and grow together.
            </p> */}

            {/* Original description */}
            <p
              ref={subRef}
              className="text-base font-medium text-gray-700 dark:text-gray-300 mt-3 capitalize"
            >
              Discover scholarships, earn rewards, and build financial skills, all in one app.

            </p>

            {/* Buttons */}
            <div
              ref={btnsRef}
              className="flex flex-wrap mt-9 text-center gap-3 justify-center sm:justify-start"
            >
              <Link
                href="#waitlist"
                className="flex items-center bg-gradient-to-r from-[#05d3f7] to-[#014bac] px-6 py-3  text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
              >
                Join the Waitlist
              </Link>

              <Link
                href="#partner"
                className="py-3 px-6 text-[#014bac] dark:text-white rounded-lg border border-[#014bac] dark:border-gray-200 text-base hover:border-[#014bac] hover:bg-[#014bac] hover:text-white transition-all duration-500 font-medium"
              >
                Partner with Us
              </Link>
            </div>

            
          </div>

          {/* Right image section */}
          <div className="relative flex justify-center" ref={imgRef}>
            <Image
              src={mockup}
              className="md:h-[580px] lg:ms-auto mx-auto drop-shadow-2xl rounded-3xl border-white dark:border-gray-700"
              alt="Education Illustration"
              priority
            />
            {/* Floating animated accent */}
            <div className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-br from-[#05d3f7] to-[#014bac] rounded-full blur-2xl opacity-40 animate-pulse pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
