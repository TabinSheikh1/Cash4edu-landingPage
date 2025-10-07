'use client'
import logo from "../../public/images/Logo.png";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import useScrollEvent from "@/hooks/useScrollEvent";
import Gumshoe from 'gumshoejs'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Navigation = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLUListElement | null>(null);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (navRef.current) new Gumshoe('.navbar-nav a', { offset: 80 });

    // GSAP animation for navbar entrance
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
      );
    }
    // GSAP animation for nav links
    if (linksRef.current) {
      gsap.fromTo(
        linksRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.08,
          delay: 0.3,
          ease: "power2.out"
        }
      );
    }

    // Check initial theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const { scrollY } = useScrollEvent();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        ref={navRef}
        id="navbar"
        className={`navbar ${
          scrollY >= 50 && " is-sticky"
        } fixed top-0 start-0 end-0 z-50 transition-all duration-500 py-5 items-center shadow-md lg:shadow-none 
        [&.is-sticky]:bg-white dark:[&.is-sticky]:bg-gray-900 
        [&.is-sticky]:shadow-md 
        bg-white dark:bg-gray-900 lg:bg-transparent`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#home" className="flex items-center">
                <Image
                  src={logo}
                  className="flex"
                  alt="logo"
                  width={100}
                  height={40}
                />
              </a>
            </div>

            {/* Nav links - Center */}
            <div
              id="navbarCollapse"
              className={`navigation hs-collapse transition-all duration-300 ${
                isOpen ? "flex" : "hidden"
              } lg:flex items-center justify-center absolute lg:relative top-full left-0 right-0 bg-white dark:bg-gray-900 lg:bg-transparent shadow-lg lg:shadow-none py-4 lg:py-0`}
            >
              <ul
                ref={linksRef}
                id="navbar-navlist"
                className="navbar-nav flex-col lg:flex-row gap-y-4 lg:gap-y-0 flex lg:items-center justify-center"
              >
                {[
                  { label: "Home", href: "#home" },
                  { label: "About", href: "#about" },
                  { label: "Features", href: "#features" },
                  { label: "Waitlist", href: "#waitlist" },
                  { label: "GetApp", href: "#getapp" },
                  { label: "Partner", href: "#partner" },
                  { label: "FAQs", href: "#faqs" },
                  { label: "Testimonials", href: "#testimonials" },
                  { label: "Closing", href: "#closing" },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="nav-item mx-1.5 transition-all text-dark dark:text-gray-200 
                      lg:text-black lg:dark:text-gray-200 
                      group-[&.is-sticky]:text-dark dark:group-[&.is-sticky]:text-gray-200
                      duration-300 hover:text-[#014bac] dark:hover:text-[#05d3f7]
                      [&.active]:!text-[#014bac] dark:[&.active]:!text-[#05d3f7]
                      group-[&.is-sticky]:[&.active]:text-[#014bac] 
                      dark:group-[&.is-sticky]:[&.active]:text-[#05d3f7]"
                  >
                    <a
                      className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-2 lg:py-0.5 px-4 lg:px-2 capitalize"
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side - Theme toggle and mobile menu */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 shadow-lg cursor-pointer hover:scale-110 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden hs-collapse-toggle p-2"
                type="button"
                id="hs-unstyled-collapse"
                data-hs-collapse="#navbarCollapse"
                aria-label="Toggle menu"
              >
                <IconifyIcon
                  icon="lucide:menu"
                  className="h-6 w-6 text-black dark:text-white"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;