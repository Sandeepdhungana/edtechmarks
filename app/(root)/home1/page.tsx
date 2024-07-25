import AboutUsSection from "@/components/home1/about-us";
import EngagementSection from "@/components/home1/engagement-section";
import HeroSection from "@/components/home1/herosection";
import React from "react";
import TestimonialCardSection from "./testimonial";
import NewsletterSection from "@/components/home1/newsletter";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <EngagementSection />
      <TestimonialCardSection />
      <NewsletterSection/>
    </>
  );
};

export default Home;
