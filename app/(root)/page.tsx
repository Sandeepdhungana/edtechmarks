import AboutUsSection from "@/components/AboutUsSection";
import CarouselComponent from "@/components/Carousel";
import Footer from "@/components/Footer";
import TopNavigation from "@/components/NavBar";
import NewsletterSection from "@/components/NewsLetterSection";
import OurStorySection from "@/components/OurStorySelection";
import RecentSection from "@/components/RecentSection";
import TestimonialsSection from "@/components/TestimonialSection";
import React from "react";

const Home = () => {
  const recentEngagements = [
    { imageSrc: "/images/slide1.jpg", universityName: "Gonzaga University" },
    {
      imageSrc: "/images/slide2.jpg",
      universityName: "New England Institute of Technology",
    },
    {
      imageSrc: "/images/slide3.jpg",
      universityName: "Susquehanna University",
    },
    { imageSrc: "/images/slide4.jpg", universityName: "Elizabethtown College" },
    { imageSrc: "/images/slide4.jpg", universityName: "Elizabethtown College" },
    { imageSrc: "/images/slide4.jpg", universityName: "Elizabethtown College" },
  ];
  return (
    <>
      {/*  */}
      {/* Slider with some information */}
      {/*  */}
      <TopNavigation />
      <main className="w-full">
        <CarouselComponent />

        <RecentSection items={recentEngagements} />
        <AboutUsSection />
        <OurStorySection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
