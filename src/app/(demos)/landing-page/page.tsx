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
import HowItWork from "@/components/Howitwork";
import Faqs from "@/components/Faqs";
import SocialProof from "@/components/Social";
import TeamSection from "@/components/OurTeam";



const page = () => {
  return (
    <div className="overflow-hidden">
      <Navigation/>
      <Hero/>
      <About />
      <HowItWork/>
      <Features />
      {/* <SocialProof/> */}
      <Waitlist/>
      <GetApp />
      <TeamSection/>
      <Partner />
      <Faqs />
      <Testimonials />
      <Closing/>
      <Footer />
    </div>
  );
};

export default page;
