import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <div className="mb-4">
            <Image src="/images/slide1.jpg" alt="edtechmarks" width={100} height={50} />
          </div>
          <p>
            edtechmarks is the higher education industry’s customer-centric, high-touch IT services partner of choice. We help institutions drive competitive advantage by empowering them with cost leadership, responsive and flexible IT solutions, managed ERP, security and infrastructure services, and 24x7x365 support.
          </p>
        </div>
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Our Core Competencies</h3>
          <ul className="list-disc list-inside">
            <li>IT Outsourcing</li>
            <li>Enterprise Applications</li>
            <li>IT Infrastructure & Cloud</li>
            <li>Cybersecurity</li>
            <li>24×7 Service Desk</li>
          </ul>
        </div>
        <div className="md:w-1/3">
          <h3 className="text-xl font-bold mb-4">Talk to Us</h3>
          <p>Reach us at:</p>
          <a href="mailto:Engagements@edtechmarks.com" className="text-teal-400">Engagements@edtechmarks.com</a>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p>&copy; {new Date().getFullYear()} edtechmarks. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
