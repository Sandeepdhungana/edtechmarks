import React from 'react';
import Image from 'next/image';

const engagements = [
  {
    image: '/images/slide1.jpg',
    title: 'Gonzaga University',
    link: '#',
  },
  {
    image: '/images/slide1.jpg',
    title: 'New England Institute of Technology',
    link: '#',
  },
  {
    image: '/images/slide1.jpg',
    title: 'Susquehanna University',
    link: '#',
  },
  {
    image: '/images/slide1.jpg',
    title: 'Elizabethtown College',
    link: '#',
  },
];

const EngagementSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-400 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-white mb-12">Recent Engagements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {engagements.map((engagement, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src={engagement.image}
                  alt={engagement.title}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{engagement.title}</h3>
                <a
                  href={engagement.link}
                  className="inline-block bg-teal-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-teal-600 transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EngagementSection;
