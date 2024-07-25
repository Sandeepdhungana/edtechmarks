import AboutUs from "@/components/home/about-us";
import HeroSection from "@/components/home/hero-section";
import NewsletterSection from "@/components/home/newsletter";
import RecentEngagements from "@/components/home/recent-engagement";
import SuccessStories from "@/components/home/success";
import TestimonialsSlider from "@/components/home/testimonial";
import TestimonialsSection from "@/components/TestimonialSection";
import React from "react";

const Page = () => {
  return (
    <>
      <HeroSection />
      <RecentEngagements />
      <AboutUs />
      <SuccessStories />
      <TestimonialsSection />
      <NewsletterSection/>
    </>
  );
};

export default Page;
