import React from 'react';

const NewsletterSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-400 py-20">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-white mb-4">Stay Updated!</h2>
            <p className="text-lg text-gray-200 mb-6">
              Subscribe to our newsletter to get the latest updates and insights.
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col md:flex-row items-center justify-center md:justify-end">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-auto px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-teal-300 text-gray-900"
            />
            <button className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-800 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
