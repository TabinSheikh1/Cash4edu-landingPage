"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import handshakes from "@/assets/images/HandShake2.jpg";

gsap.registerPlugin(ScrollTrigger);

const Partner = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [showForm, setShowForm] = useState(false);

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

    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, x: -60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
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
          delay: 0.3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
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
          },
        }
      );
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form[0] as HTMLInputElement).value;
    const business = (form[1] as HTMLInputElement).value;
    const email = (form[2] as HTMLInputElement).value;
    const phone = (form[3] as HTMLInputElement).value;

    try {
      const res = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, business, email, phone }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Thank you! We'll contact you soon.");
        form.reset();
        setShowForm(false);
      } else {
        alert("❌ " + data.message);
      }
    } catch (error) {
      alert("⚠️ Something went wrong. Try again later.");
    }
  };

  return (
    <section
      id="partner"
      className="py-24 bg-white dark:bg-dark transition-colors duration-300"
      ref={sectionRef}
    >
      <div className="container w-[95%] mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image (no hover/animation) */}
          <div className="flex items-center md:w-[55%] lg:w-[35%]" ref={imgRef}>
            <Image
              src={handshakes}
              className="lg:h-[260px] h-[230px] md:h-[295px] rounded-xl mx-auto drop-shadow-2xl"
              alt="partner section"
              width={433}
              height={650}
            />
          </div>

          {/* Content */}
          <div className="px-2 md:px-8 mt-8 sm:mt-0">
            <span className="text-sm text-[#014bac] uppercase font-semibold tracking-wider dark:text-[#05d3f7]">
              Our Partners
            </span>

            <h2
              ref={headlineRef}
              className="text-3xl md:text-4xl/tight font-semibold text-black dark:text-white mt-2"
            >
              Reach and Support{" "}
              <span className="bg-gradient-to-r from-[#014bac] to-[#05d3f7] bg-clip-text text-transparent">
                Thousands of Students
              </span>
            </h2>

            {/* Adjusted width to align better with heading */}
            <p className="mt-5 text-black/80 dark:text-gray-300 text-base">
              Showcase your scholarships directly to motivated students who are
              ready to apply. Increase visibility for your organization while
              making a real impact in education. Join our partner network and
              help students reduce their financial burden.
            </p>

            {/* Main CTA */}
            <button
              ref={btnRef}
              onClick={() => setShowForm(true)}
              className="mt-6 bg-gradient-to-r from-[#05d3f7] to-[#014bac] px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
            >
              Become a Partner
            </button>

            {/* Optional CTA — hidden for now */}
            {/*
            <button
              className="mt-3 ml-4 px-5 py-2 border border-[#014bac] text-[#014bac] dark:text-[#05d3f7] rounded-lg text-sm font-medium hover:bg-[#014bac] hover:text-white transition"
            >
              Apply to be a Vendor
            </button>
            */}
          </div>
        </div>

        {/* Interest Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999]">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl w-[90%] max-w-lg relative">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white"
              >
                ✕
              </button>

              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">
                Partner Interest Form
              </h3>

              <form className="grid gap-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 dark:bg-gray-800 dark:text-white"
                />
                <input
                  type="text"
                  placeholder="Business Name"
                  required
                  className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 dark:bg-gray-800 dark:text-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 dark:bg-gray-800 dark:text-white"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 dark:bg-gray-800 dark:text-white"
                />

                <button
                  type="submit"
                  className="mt-2 bg-gradient-to-r from-[#05d3f7] to-[#014bac] px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Partner;
