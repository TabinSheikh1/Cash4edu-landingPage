import React from "react";
import Footer from "@/components/Footer";
import Hero from "./components/Hero";
import Partner from "@/components/Partner";
import Closing from "@/components/Closing";
import About from "@/components/About";
import Navigation from "@/components/Navigation";
import Waitlist from "@/components/Waitlist";
import Features from "@/components/Features";



const page = () => {
  return (
    <>
      <Navigation/>
      <Hero/>
      <About />
      <Features />
      <Waitlist/>
      
      <Partner />
      <Closing/>
      
      <Footer />
    </>
  );
};

export default page;
