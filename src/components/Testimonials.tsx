"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Our Mission",
    text: "Connecting students with opportunities that make education possible.",
    school: "Empowering access for every learner."
  },
{
  name: "Our Vision",
  text: "Making scholarships truly simple, transparent, and deeply rewarding for all.",
  school: "Creating equal chances to achieve dreams."
},
  {
  name: "Our Promise",
  text: "Breaking barriers so dedicated students can reach their fullest potential.",
  school: "Supporting success through every step."
}
];




const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
          }
        }
      );
    }
    if (cardRefs.current.length) {
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.18,
          delay: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  return (
    <section
      className="py-24 bg-gradient-to-b from-[#05d3f7]/10 to-white dark:from-[#014bac]/20 dark:to-gray-900 relative overflow-hidden flex justify-center"
      id="testimonials"
      ref={sectionRef}
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#014bac] opacity-20 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#014bac] opacity-20 rounded-full blur-2xl pointer-events-none"></div>
      
      <div className="w-[90vw] max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#014bac] dark:text-[#05d3f7] mb-4 tracking-tight">
          Our Values
        </h2>
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          While we’re preparing to go live, here’s what drives our mission and vision.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              ref={(el: HTMLDivElement | null) => {
                cardRefs.current[i] = el;
              }}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-t-4 border-[#05d3f7] flex flex-col items-center group hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300"
            >
              <svg
                className="absolute -top-6 left-1/2 -translate-x-1/2 text-[#05d3f7] opacity-30"
                width={48}
                height={48}
                fill="none"
                viewBox="0 0 48 48"
              >
                <text x="0" y="38" fontSize="48" fontFamily="Arial" fill="#05d3f7" opacity="0.3">“</text>
              </svg>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">&ldquo;{t.text}&rdquo;</p>
              <div className="font-semibold text-[#014bac] dark:text-[#05d3f7] text-lg">{t.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{t.school}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
