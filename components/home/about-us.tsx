import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-5xl font-bold text-center mb-12">Who We Are</h2>
      <p className="text-xl text-center max-w-3xl mx-auto mb-12">
        Driven by our niche expertise in higher education IT, we at EdTechMarks are
        the leading provider of comprehensive, end-to-end technology services.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-600 mb-6">
            By daring to do things differently, EdTechMarks provides higher
            education with the strategic and operational IT support needed to
            achieve success.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-2 bg-teal-600 text-white font-medium rounded-full shadow-md hover:bg-teal-700 transition-all"
          >
            Learn More..
          </a>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="text-gray-600 mb-6">
            We aspire to be higher education’s IT service provider of choice,
            delivering transformative IT experiences and tech-enabled services
            that drive student and institutional success.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-2 bg-teal-600 text-white font-medium rounded-full shadow-md hover:bg-teal-700 transition-all"
          >
            Learn More..
          </a>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4">Our Promise</h3>
          <p className="text-gray-600 mb-6">
            We are committed to delivering high-touch IT services, so that you
            can operate securely and with confidence.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-2 bg-teal-600 text-white font-medium rounded-full shadow-md hover:bg-teal-700 transition-all"
          >
            Learn More..
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center p-6 bg-teal-50 rounded-lg shadow-lg">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-teal-600 mb-2">75+</h3>
            <p className="text-gray-600">New Clients</p>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 bg-teal-50 rounded-lg shadow-lg">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-teal-600 mb-2">98%</h3>
            <p className="text-gray-600">Our Customer Feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
