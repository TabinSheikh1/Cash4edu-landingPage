"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ceo from "../../public/images/CEO.png";
import cmo from "../../public/images/CMO.png";
import cpm from "../../public/images/CPM.png";
import cso from "../../public/images/CSO.png";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Henry Villanueva",
    title: "CEO",
    email: "henry@cash4edu.com",
    image: ceo,
    bio: `Twenty-Five years of senior leadership in finance and operations. Managed operations with +$30 million in annual budgets and over 350 employees, contractors and vendors. MBA holder and Six Sigma certified. Oversees strategic direction and financial management.`,
  },
  {
    name: "Yolanda Wright",
    title: "CSO",
    email: "Yolanda@cash4edu.com",
    image: cso,
    bio: `Regional Manager of Field Sales at Oracle with experience in vendor management, enterprise partnerships, and operational efficiency. Responsible for sales strategy, vendor relations, and partnership growth. Manages over $700M+ ARR product portfolio.  Expected start: one month prior to funding`,
  },
  {
    name: "Krystian Rutledge",
    title: "CPM",
    email: "krystian.rutledge@cash4edu.com",
    image: cpm,
    bio: `Founder of KC Designs. 7 years' experience in multidisciplinary UX/UI design with a strong foundation in education, product design, and digital strategy. Background in Communication Arts from the Savannah College of Art and Design.`,
  },
  {
    name: "Austin Wright",
    title: "CMO",
    email: "austin@cash4edu.com",
    image: cmo,
    bio: `Former senior executive at Salesforce with deep expertise in SaaS marketing, customer acquisition, and user growth strategies. Oversees marketing, platform development alignment, and brand management. Manages over $25 million in revenue.`,
  },
];

export default function TeamSection() {
  const [activeMember, setActiveMember] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header
      gsap.from(".team-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Animate cards on scroll
      gsap.from(cardsRef.current, {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 dark:from-gray-900 dark:via-blue-950/20 dark:to-cyan-950/10 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-40 h-40 sm:-top-32 sm:-left-32 sm:w-60 sm:h-60 md:-top-40 md:-left-40 md:w-80 md:h-80 bg-gradient-to-r from-[#014bac]/10 to-[#05d3f7]/10 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-48 h-48 sm:-bottom-32 sm:-right-32 sm:w-72 sm:h-72 md:-bottom-40 md:-right-40 md:w-96 md:h-96 bg-gradient-to-r from-[#05d3f7]/10 to-[#014bac]/10 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-r from-[#014bac]/5 to-[#05d3f7]/5 rounded-full blur-lg sm:blur-xl md:blur-2xl animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(1,75,172,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(1,75,172,0.03)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:48px_48px] md:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="team-header text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-3 sm:mb-4 tracking-tight">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-[#014bac] to-[#05d3f7] bg-clip-text text-transparent">
              Leadership Team
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 sm:mb-12 md:mb-14 max-w-2xl mx-auto px-2 sm:px-0">
            Experienced professionals driving innovation, strategy, and growth.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 relative">
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-3/4 bg-gradient-to-b from-transparent via-[#05d3f7]/30 to-transparent"></div>

          {teamMembers.map((member, index) => (
            <div
              key={member.email}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`group relative ${index % 2 === 0 ? 'lg:pr-4' : 'lg:pl-4'}`}
              onMouseEnter={() => setActiveMember(index)}
              onMouseLeave={() => setActiveMember(null)}
            >
              {/* Card */}
              <div
                className={`relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md 
                border border-gray-200/50 dark:border-gray-700/50
                rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 transition-all duration-300 ease-out
                hover:shadow-xl hover:scale-[1.03] hover:border-[#05d3f7]/40
                ${activeMember === index ? 'scale-[1.02] sm:scale-105 border-[#05d3f7]/40 shadow-xl' : ''}
                ${activeMember !== null && activeMember !== index ? 'opacity-80 scale-95' : ''}`}
              >
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/50 to-blue-50/30 dark:from-gray-800/50 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex flex-col items-center text-center sm:items-start sm:text-left gap-4 sm:gap-6">
                  <div className="relative">
                    <div className="absolute -inset-3 bg-gradient-to-r from-[#014bac] to-[#05d3f7] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-md"></div>
                    <div className="relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover shadow-lg border-4 border-white dark:border-gray-800 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute -bottom-3 -right-3 px-3 py-1 bg-gradient-to-r from-[#014bac] to-[#05d3f7] text-white text-xs font-bold rounded-full shadow-md">
                        {member.title}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 w-full">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#05d3f7] mb-2 transition-colors duration-300">
                      {member.name}
                    </h3>

                    <p className="text-[#05d3f7] font-semibold mb-3 flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base">
                      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                      <span className="break-all">{member.email}</span>
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
