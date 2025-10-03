"use client";
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import iterior from "@/assets/images/interior.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

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
        }
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
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5,
          ease: "power2.out",
        }
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
          delay: 0.8,
          ease: "back.out(1.7)",
        }
      );
    }
    if (imgRef.current) {
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
      className="relative pt-32 pb-20 bg-gray-200/40 bg-[url(../images/home/bg-3.png)] bg-no-repeat bg-cover overflow-hidden"
      id="home"
      ref={sectionRef}
    >
      {/* Decorative Modern Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#05d3f7] rounded-full opacity-30 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#014bac] rounded-full opacity-30 blur-3xl pointer-events-none"></div>
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 items-center">
          <div className='mt-14 lg:mt-0'>
            <h1
              ref={headlineRef}
              className="text-3xl md:text-5xl/tight lg:text-6xl/tight text-[#014bac] tracking-normal capitalize leading-normal font-bold max-w-2xl"
            >
              Where Learning Meets <span className="bg-gradient-to-r from-[#014bac] to-[#05d3f7] bg-clip-text text-transparent">Opportunity</span>
            </h1>
            <p
              ref={subRef}
              className="text-base font-medium text-muted mt-3 capitalize"
            >
              Cash 4 Edu helps students unlock scholarships, financial resources, and rewards — all in one app
            </p>
            <div
              ref={btnsRef}
              className="flex flex-wrap mt-9 text-center gap-3"
            >
              <button className="bg-gradient-to-r from-[#05d3f7] to-[#014bac] px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
                Join the Waitlist
              </button>
              <button className="py-2 px-6 text-[#014bac] rounded-md border border-[#014bac] text-base hover:border-[#014bac] hover:bg-[#014bac] hover:text-white transition-all duration-500 font-medium">
                Partner with Us
              </button>
            </div>
          </div>
          <div className="relative flex justify-center" ref={imgRef}>
            <Image
              src={iterior}
              className="md:h-[700px] lg:ms-auto mx-auto drop-shadow-2xl rounded-3xl border-white"
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

export default Hero