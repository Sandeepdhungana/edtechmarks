import Image from 'next/image';
import React from 'react';

const RecentEngagements = () => {
  const engagements = [
    {
      name: 'Gonzaga University',
      image: '/images/slide1.jpg',
      link: '#'
    },
    {
      name: 'New England Institute of Technology',
      image: '/images/slide1.jpg',
      link: '#'
    },
    {
      name: 'Susquehanna University',
      image: '/images/slide1.jpg',
      link: '#'
    },
    {
      name: 'Elizabethtown College',
      image: '/images/slide1.jpg',
      link: '#'
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Recent Engagements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {engagements.map((engagement, index) => (
          <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <Image
              src={engagement.image}
              alt={engagement.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{engagement.name}</h3>
              <a
                href={engagement.link}
                className="inline-block px-4 py-2 bg-teal-600 text-white font-medium rounded-full shadow-md hover:bg-teal-700 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentEngagements;
