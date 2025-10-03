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
  }, []);

  const { scrollY } = useScrollEvent()
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar ${scrollY >= 50 && " is-sticky"
          } fixed top-0 start-0 end-0 z-999 transition-all duration-500 py-5 items-center shadow-md lg:shadow-none [&.is-sticky]:bg-white group [&.is-sticky]:shadow-md bg-white lg:bg-transparent`}
        id="navbar"
      >
        <div className="container">
          <div className="flex lg:flex-nowrap flex-wrap items-center">
            <a href="#home" className="flex items-center">
              <Image
                src={logo}
                className="flex"
                alt="logo"
                width={100}
                height={40}
              />
              
            </a>
            <div className="lg:hidden flex items-center ms-auto px-2.5">
              <button onClick={toggleMenu}
                className="hs-collapse-toggle"
                type="button"
                id="hs-unstyled-collapse"
                data-hs-collapse="#navbarCollapse"
              >
                <IconifyIcon
                  icon="lucide:menu"
                  className="h-8 w-8 text-black"
                />
              </button>
            </div>
            <div
              className={`navigation hs-collapse transition-all duration-300 lg:basis-auto basis-full grow ${isOpen ? "flex" : "hidden"} items-center justify-center lg:flex mx-auto overflow-hidden mt-6 lg:mt-0 nav-light`}
              id="navbarCollapse"
            >
              <ul
                ref={linksRef}
                className="navbar-nav flex-col lg:flex-row gap-y-2 flex lg:items-center justify-center"
                id="navbar-navlist"
              >
                <li className="nav-item mx-1.5 transition-all text-dark lg:text-black group-[&.is-sticky]:text-dark all duration-300 hover:text-[#014bac] [&.active]:!text-[#014bac] group-[&.is-sticky]:[&.active]:text-[#014bac]">
                  <a
                    className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item mx-1.5 transition-all text-dark lg:text-black group-[&.is-sticky]:text-dark duration-300 hover:text-[#014bac] [&.active]:!text-[#014bac] group-[&.is-sticky]:[&.active]:text-[#014bac]">
                  <a
                    className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item mx-1.5 transition-all text-dark lg:text-black group-[&.is-sticky]:text-dark duration-300 hover:text-[#014bac] [&.active]:!text-[#014bac] group-[&.is-sticky]:[&.active]:text-[#014bac]">
                  <a
                    className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                    href="#features"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item mx-1.5 transition-all text-dark lg:text-black group-[&.is-sticky]:text-dark duration-300 hover:text-[#014bac] [&.active]:!text-[#014bac] group-[&.is-sticky]:[&.active]:text-[#014bac]">
                  <a
                    className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                    href="#waitlist"
                  >
                    Waitlist
                  </a>
                </li>
                <li className="nav-item mx-1.5 transition-all text-dark lg:text-black group-[&.is-sticky]:text-dark duration-300 hover:text-[#014bac] [&.active]:!text-[#014bac] group-[&.is-sticky]:[&.active]:text-[#014bac]">
                  <a
                    className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                    href="#getapp"
                  >
                    GetApp
                  </a>
                </li>
                <li className="nav-item mx-1.5 transition-all text-dark lg:text-black group-[&.is-sticky]:text-dark duration-300 hover:text-[#014bac] [&.active]:!text-[#014bac] group-[&.is-sticky]:[&.active]:text-[#014bac]">
                  <a
                    className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                    href="#partner"
                  >
                    Partner
                  </a>
                </li>
                <li className="nav-item mx-1.5 transition-all text-dark lg:text-black group-[&.is-sticky]:text-dark duration-300 hover:text-[#014bac] [&.active]:!text-[#014bac] group-[&.is-sticky]:[&.active]:text-[#014bac]">
                  <a
                    className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                    href="#faqs"
                  >
                    FAQs
                  </a>
                </li>
                <li className="nav-item mx-1.5 transition-all text-dark lg:text-black group-[&.is-sticky]:text-dark duration-300 hover:text-[#014bac] [&.active]:!text-[#014bac] group-[&.is-sticky]:[&.active]:text-[#014bac]">
                  <a
                    className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                    href="#testimonials"
                  >
                    Testimonials
                  </a>
                </li>
                <li className="nav-item mx-1.5 transition-all text-dark lg:text-black group-[&.is-sticky]:text-dark duration-300 hover:text-[#014bac] [&.active]:!text-[#014bac] group-[&.is-sticky]:[&.active]:text-[#014bac]">
                  <a
                    className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                    href="#closing"
                  >
                    Closing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;