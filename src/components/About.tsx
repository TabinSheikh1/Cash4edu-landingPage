"use client";
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import study from "@/assets/images/study.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
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
          }
        }
      );
    }
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, x: 60, scale: 0.95, rotate: 6 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotate: 0,
          duration: 1.1,
          delay: 0.6,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }
  }, []);

  return (
    <section id="about" className="py-24 border-2" ref={sectionRef}>
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center gap-6">
          <div className="lg:ms-5 ms-8">
            <div>
              <span className="text-sm text-primary uppercase font-semibold tracking-wider text-default-950">
                About Us
              </span>
            </div>
            <h1
              ref={headlineRef}
              className="text-3xl md:text-4xl/tight font-semibold text-black mt-4"
            >
              What is Cash 4 Edu?
            </h1>
            <p className="text-base font-normal text-muted mt-6">
              Cash 4 Edu is a mobile-first app designed to reduce student debt and increase access to education. We connect students to scholarships, grants, tuition benefits, and financial literacy resources in a fun, easy-to-use way
            </p>
            <div
              ref={stepsRef}
              className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-9"
            >
              <div>
                <div className="flex items-center justify-start">
                  <div className="items-center justify-center flex bg-green-50 rounded-full h-20 w-20 border border-dashed border-green-50">
                    <IconifyIcon
                      icon="lucide:smartphone"
                      className="h-8 w-8 text-black"
                    />
                  </div>
                </div>
                <h1 className="text-xl font-semibold pt-6">1. Download</h1>
                <p className="text-base text-gray-600 font-normal mt-2">
                  Get the app and access opportunities anytime, anywhere.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-start">
                  <div className="items-center justify-center flex bg-red-50 rounded-full h-20 w-20 border border-dashed border-red-50">
                    <IconifyIcon
                      icon="lucide:file-text"
                      className="h-8 w-8 text-black"
                    />
                  </div>
                </div>
                <h1 className="text-xl font-semibold  pt-6">
                  2. Set Profile
                </h1>
                <p className="text-base text-gray-600 font-normal mt-2">
                  Tell us about your goals to unlock tailored scholarships and resources.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-start">
                  <div className="items-center justify-center flex bg-primary/10 rounded-full h-20 w-20 border border-dashed border-primary/10">
                    <IconifyIcon
                      icon="lucide:rocket"
                      className="h-8 w-8 text-black"
                    />
                  </div>
                </div>
                <h1 className="text-xl font-semibold pt-6">3. Start</h1>
                <p className="text-base text-gray-600 font-normal mt-2">
                  Explore scholarships, grants, and tools to reduce student debt.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center" ref={imgRef}>
            <Image
              src={study}
              className="lg:h-[500px] lg:w-[500px] md:w-[600px] md:h-[500px] h-[300px] w-[330px] rounded-xl mx-auto drop-shadow-2xl  "
              alt='study'
              width={538}
              height={200}
            />
            {/* Floating animated accent */}
            <div className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-br from-blue-400 to-pink-400 rounded-full blur-2xl opacity-40 animate-pulse pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About