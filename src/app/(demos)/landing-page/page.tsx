import React from "react";
import Footer from "@/components/Footer";
import Hero from "./components/Hero";
import Partner from "@/components/Partner";
import Closing from "@/components/Closing";
import About from "@/components/About";
import Navigation from "@/components/Navigation";
import Waitlist from "@/components/Waitlist";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import Faqs from "@/components/Faqs";



const page = () => {
  return (
    <>
      <Navigation/>
      <Hero/>
      <About />
      <Features />
      <Waitlist/>
      {/* <HowItWorks /> */}
      <Partner />
      <GetApp />
      <Closing/>
      <Testimonials />
      <Faqs />
      
      <Footer />
    </>
  );
};

export default page;
