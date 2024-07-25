"use client";
import React from "react";
import { Button } from "antd";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen text-white flex items-center justify-center"
      style={{ backgroundImage: "url('/images/slide2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">
          Transforming Visions into Digital Excellence
        </h1>
        <p className="text-xl mb-8">
          Choose Next as your digital marketing agency and propel your business
          to new heights with our award-winning digital marketing services.
        </p>
        <div className="flex justify-center space-x-4">
          <Button type="primary" size="large">
            Get Started for Free
          </Button>
          <Button size="large">How It Works?</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
