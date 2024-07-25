import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Company Name</h2>
            <p className="text-gray-400">
              We are committed to providing the best services and solutions to help your business thrive. Our team is dedicated to your success.
            </p>
          </div>
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Navigation</h2>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link href="/" legacyBehavior>
                  <a className="hover:underline">Home</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" legacyBehavior>
                  <a className="hover:underline">About Us</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" legacyBehavior>
                  <a className="hover:underline">Services</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" legacyBehavior>
                  <a className="hover:underline">Contact</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/blog" legacyBehavior>
                  <a className="hover:underline">Blog</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4 text-gray-400">
              <a href="https://facebook.com" className="hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" className="hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" className="hover:text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
