"use client";
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import handshakes from "@/assets/images/handshakes.jpg";

gsap.registerPlugin(ScrollTrigger);

const Partner = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

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
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, x: -60, scale: 0.95, rotate: -6 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotate: 0,
          duration: 1.1,
          delay: 0.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
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
          delay: 0.3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }
    if (btnRef.current) {
      gsap.fromTo(
        btnRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          }
        }
      );
    }
  }, []);

  return (
    <section id='partner' className="py-24" ref={sectionRef}>
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center gap-6">
          <div className="flex items-center" ref={imgRef}>
            <Image
              src={handshakes}
              className="lg:h-[300px] h-[250px] md:mb-3 md:w-[400px] md:h-[300px] rounded-xl mx-auto drop-shadow-2xl"
              alt="partner section"
              width={433}
              height={650}
            />
          </div>
          <div className="lg:ms-5 ms-8">
            <span className="text-sm text-[#014bac] uppercase font-semibold tracking-wider text-default-950">
              Our Partner
            </span>
            <h2
              ref={headlineRef}
              className="text-3xl md:text-4xl/tight font-semibold text-black mt-2"
            >
              Partner With Cash 4 Edu
            </h2>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 text-sm font-medium text-black mt-6"
            >
              Learn More
              <IconifyIcon icon="lucide:move-right" />
            </a>
            <hr className="border-gray-200 mt-3" />
            <div className='mt-3'>
              <p>Employers, brands, and vendors — connect with students directly through education benefits, discounts, and sponsored opportunities.</p>
            </div>
            <button
              ref={btnRef}
              className="mt-6 bg-gradient-to-r from-[#05d3f7] to-[#014bac] px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partner