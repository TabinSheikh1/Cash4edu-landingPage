import React from "react";
import Footer from "@/components/Footer";
import 'swiper/css'
import Swiperslider from "@/components/Swiperslider";
import Hero from "./components/Hero";
import Services from "@/components/Services";
import Partner from "@/components/Partner";
import Closing from "@/components/Closing";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Faqs from "@/components/Faqs";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
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
