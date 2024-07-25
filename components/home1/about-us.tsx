import React from 'react';
import Image from 'next/image';

const AboutUsSection: React.FC = () => {
  return (
    <div className="bg-white py-20 px-6">
      <div className="container mx-auto text-center md:text-left">
        <h2 className="text-5xl font-bold mb-10">About Us</h2>
        <div className="md:flex md:space-x-10">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <p className="text-lg text-gray-700 mb-6">
              Welcome to our company! We are dedicated to providing top-notch services and innovative solutions to help businesses achieve their goals. Our team of experts works tirelessly to ensure our clients receive the best possible support and guidance.
            </p>
            <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is to drive competitive advantage for our clients by empowering them with cost leadership, responsive and flexible IT solutions, managed ERP, security, and infrastructure services, and 24x7x365 support.
            </p>
            <h3 className="text-3xl font-semibold mb-4">What We Offer</h3>
            <ul className="list-disc list-inside text-left text-gray-700 space-y-2 mb-6">
              <li>Innovative Solutions</li>
              <li>Experienced Team</li>
              <li>Customer-Centric Approach</li>
              <li>24/7 Support</li>
              <li>Comprehensive IT Services</li>
              <li>Tailored Business Strategies</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex flex-col space-y-6">
            <div className="relative w-full h-64">
              <Image
                src="/images/slide1.jpg"
                alt="About Us"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <h3 className="text-3xl font-semibold mb-4">Meet Our Team</h3>
            <p className="text-lg text-gray-700 mb-6">
              Our team is composed of experienced professionals who are passionate about delivering exceptional services. With a diverse set of skills and a commitment to excellence, our team members are the backbone of our success.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-2">John Doe</h4>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-2">Jane Smith</h4>
                <p className="text-gray-600">Chief Technology Officer</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-2">Alice Johnson</h4>
                <p className="text-gray-600">Head of Marketing</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-2">Robert Brown</h4>
                <p className="text-gray-600">Lead Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
