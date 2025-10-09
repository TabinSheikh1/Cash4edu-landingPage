"use client";
import React, { useEffect, useRef, useState } from "react";

// --- Fallback Icon Component (Replaces IconifyIcon) ---
// Using lucide-react SVGs inline to avoid external dependencies/aliases
const LucideIcon = ({ icon, className }: { icon: string, className: string }) => {
    // A simple switch case to map lucide icon names to inline SVG components
    const getIcon = (name: string) => {
        switch (name) {
            case "lucide:user-plus":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/>
                    </svg>
                );
            case "lucide:search":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                    </svg>
                );
            case "lucide:check-circle":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 2 2 4-4"/>
                    </svg>
                );
            default:
                return <div className={className}>?</div>;
        }
    };
    return getIcon(icon);
};
// --- End Fallback Icon Component ---

// --- Simplified Scroll Animation Hook (Replaces GSAP/ScrollTrigger in this context) ---
// Since GSAP failed to resolve, we use a simple Intersection Observer pattern for fade-in animation.
const useIntersectionFadeIn = (ref: React.RefObject<HTMLElement>) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(currentRef);
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [ref]);

    return isVisible;
};
// --- End Animation Hook ---

// --- Modal Component for the Form ---
interface StepFormModalProps {
    isOpen: boolean;
    title: string;
    onClose: () => void;
}

const StepFormModal: React.FC<StepFormModalProps> = ({ isOpen, title, onClose }) => {
    if (!isOpen) return null;

    // Determine form type based on the title (e.g., '1. Sign Up' gets a simple signup form)
    const getFormContent = () => {
        if (title.includes("Sign Up")) {
            return (
                <form className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#0a1128] text-gray-900 dark:text-white focus:ring-[#05d3f7] focus:border-[#05d3f7]"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#0a1128] text-gray-900 dark:text-white focus:ring-[#05d3f7] focus:border-[#05d3f7]"
                    />
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#014bac] to-[#05d3f7] text-white font-semibold py-3 rounded-lg hover:shadow-lg transition duration-200"
                        onClick={(e) => { e.preventDefault(); console.log('Signup Submitted'); onClose(); }}
                    >
                        Start Your Journey
                    </button>
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">By signing up, you agree to our Terms.</p>
                </form>
            );
        }
        
        // Default content for other steps (e.g., Get Matched, Apply & Track)
        return (
            <div className="p-4 text-center text-gray-600 dark:text-gray-300">
                <p>This is where the detailed form for **{title}** would be implemented.</p>
                <p className="mt-2 text-sm text-gray-400 dark:text-gray-500">For example, profile questions for 'Get Matched' or application status for 'Apply & Track'.</p>
            </div>
        );
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 transition-opacity duration-300">
            {/* Modal content background adjusted for light/dark mode */}
            <div className="relative bg-white dark:bg-[#101934] p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-transform duration-300 scale-100">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition duration-150"
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center border-b border-gray-200 dark:border-gray-700 pb-3">
                    {title}
                </h3>
                {getFormContent()}
            </div>
        </div>
    );
};
// --- End Modal Component ---


const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  // Use simple visibility state for animation instead of GSAP setup
  const isSectionVisible = useIntersectionFadeIn(sectionRef);

  /**
   * Handles the click event for a step title.
   */
  const handleStepClick = (title: string) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const steps = [
    {
      icon: "lucide:user-plus",
      title: "1. Sign Up",
      text: "Sign up in less than a minute and create your student profile.",
      // Light Mode Defaults: White/Light Blue
      cardBg: "bg-white dark:bg-[#101934]", 
      cardBorder: "border-blue-200 dark:border-[#1c2a52]",
      cardText: "text-gray-900 dark:text-white",
      iconBg: "bg-blue-100 dark:bg-[#1c2a52]",
      iconColor: "text-[#014bac] dark:text-[#05d3f7]",
      // Updated hover for a more pronounced shadow (glow) effect
      hover: "hover:shadow-xl hover:shadow-blue-300/50 dark:hover:shadow-blue-700/50",
    },
    {
      icon: "lucide:search",
      title: "2. Get Matched",
      text: "Get matched with scholarships and rewards that fit you.",
      // Light Mode Defaults: White/Light Green
      cardBg: "bg-white dark:bg-[#18341e]", 
      cardBorder: "border-green-200 dark:border-[#25522f]",
      cardText: "text-gray-900 dark:text-white",
      iconBg: "bg-green-100 dark:bg-[#25522f]",
      iconColor: "text-green-600 dark:text-green-400",
      // Updated hover for a more pronounced shadow (glow) effect
      hover: "hover:shadow-xl hover:shadow-green-300/50 dark:hover:shadow-green-700/50",
    },
    {
      icon: "lucide:check-circle",
      title: "3. Apply & Track",
      text: "Apply, earn, and track your progress in one place.",
      // Light Mode Defaults: White/Light Amber
      cardBg: "bg-white dark:bg-[#342710]", 
      cardBorder: "border-amber-200 dark:border-[#52441c]",
      cardText: "text-gray-900 dark:text-white",
      iconBg: "bg-amber-100 dark:bg-[#52441c]",
      iconColor: "text-amber-600 dark:text-amber-400",
      // Updated hover for a more pronounced shadow (glow) effect
      hover: "hover:shadow-xl hover:shadow-amber-300/50 dark:hover:shadow-amber-700/50",
    },
  ];

  const fadeClass = isSectionVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95";

  return (
    <>
        <section
          id="how-it-works"
          ref={sectionRef}
          // Set overall background to white in light mode, dark navy blue in dark mode
          className={`py-24 bg-white dark:bg-[#0a1128] transition-all duration-1000 ease-out ${fadeClass}`}
        >
          <div className="container mx-auto px-4 text-center">
            <span className="text-sm text-[#014bac] dark:text-[#05d3f7] uppercase font-semibold tracking-wider">
              How It Works
            </span>
            <h2
              ref={headlineRef}
              className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mt-3 transition-opacity duration-700 delay-200"
            >
              Your Path to Scholarships <span className="bg-gradient-to-r from-[#014bac] to-[#05d3f7] bg-clip-text text-transparent">
                & Rewards
              </span>
            </h2>

            <div
              ref={stepsRef}
              className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-12"
            >
              {steps.map((step, index) => (
                <div
                  key={index}
                  // Card styles now adapt based on theme. Added hover classes for lift and scale.
                  className={`flex flex-col items-center text-center px-6 py-8 rounded-2xl border transition-all duration-200 ease-out 
                    ${step.cardBg} ${step.cardBorder} border-2 ${step.hover} 
                    hover:-translate-y-1 hover:scale-[1.01] cursor-pointer 
                    ${isSectionVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
                  style={{ transitionDelay: isSectionVisible ? `${300 + index * 150}ms` : '0ms' }}
                >
                  <div
                    // Icon wrapper styles
                    className={`flex items-center justify-center ${step.iconBg} rounded-full h-20 w-20 border border-current`}
                  >
                    {/* Using the inline SVG component */}
                    <LucideIcon
                      icon={step.icon}
                      className={`h-8 w-8 ${step.iconColor}`}
                    />
                  </div>
                  {/* Clickable Button Title */}
                  <button 
                    onClick={() => handleStepClick(step.title)}
                    className={`text-xl font-semibold mt-5 ${step.cardText} cursor-pointer hover:underline focus:outline-none focus:ring-2 focus:ring-[#05d3f7] rounded-md transition duration-150`}
                    aria-label={`Click to start ${step.title}`}
                  >
                    {step.title}
                  </button>
                  <p className={`text-base text-gray-600 dark:text-gray-400 mt-2`}>
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Modal is rendered here */}
        <StepFormModal 
            isOpen={isModalOpen} 
            title={modalTitle} 
            onClose={() => setIsModalOpen(false)} 
        />
    </>
  );
};

export default HowItWorks;
