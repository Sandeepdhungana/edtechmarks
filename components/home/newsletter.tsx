import React from 'react';

const NewsletterSection: React.FC = () => {
  return (
    <div className="bg-teal-500 text-white py-12 px-6 rounded-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl font-bold mb-2">Stay Updated!</h2>
          <p className="text-lg">Subscribe to our newsletter to get the latest updates and insights.</p>
        </div>
        <div className="md:w-1/3 flex flex-col md:flex-row items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg border-0 focus:ring-2 focus:ring-teal-300 text-gray-900"
          />
          <button className="bg-black text-white px-6 py-2 rounded-r-lg hover:bg-gray-800 transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
