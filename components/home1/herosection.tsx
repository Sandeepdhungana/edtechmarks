import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-20">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="md:w-2/3 lg:w-1/2 mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Discover the Future of <br />
            <span className="text-yellow-300">Customer Engagement</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Join us and explore innovative ways to enhance customer experience and drive growth.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-yellow-300 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300">
              Get Started
            </button>
            <button className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
