'use client'
import Image from 'next/image';
import React, { useState } from 'react';

interface Story {
  name: string;
  image: string;
  link: string;
}

interface Stories {
  '4-Year Privates': Story[];
  '4-Year Public': Story[];
  'Community Colleges': Story[];
  HBCU: Story[];
  'Faith-Based': Story[];
}

const SuccessStories: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('4-Year Privates');

  const tabs: string[] = [
    '4-Year Privates',
    '4-Year Public',
    'Community Colleges',
    'HBCU',
    'Faith-Based'
  ];

  const stories: Stories = {
    '4-Year Privates': [
      { name: 'Bowdoin', image: '/images/slide1.jpg', link: '#' },
      { name: 'Morehouse College', image: '/images/slide1.jpg', link: '#' },
      { name: 'Fairfield University', image: '/images/slide1.jpg', link: '#' },
      { name: 'University Heidelberg', image: '/images/slide1.jpg', link: '#' },
      { name: 'New England Conservatory', image: '/images/slide1.jpg', link: '#' },
    ],
    '4-Year Public': [
      { name: 'Public University 1', image: '/images/slide1.jpg', link: '#' },
      { name: 'Public University 2', image: '/images/slide1.jpg', link: '#' },
      { name: 'Public University 3', image: '/images/slide1.jpg', link: '#' },
      { name: 'Public University 4', image: '/images/slide1.jpg', link: '#' },
      { name: 'Public University 5', image: '/images/slide1.jpg', link: '#' },
    ],
    'Community Colleges': [
      { name: 'Community College 1', image: '/images/slide1.jpg', link: '#' },
      { name: 'Community College 2', image: '/images/slide1.jpg', link: '#' },
      { name: 'Community College 3', image: '/images/slide1.jpg', link: '#' },
      { name: 'Community College 4', image: '/images/slide1.jpg', link: '#' },
      { name: 'Community College 5', image: '/images/slide1.jpg', link: '#' },
    ],
    HBCU: [
      { name: 'HBCU 1', image: '/images/slide1.jpg', link: '#' },
      { name: 'HBCU 2', image: '/images/slide1.jpg', link: '#' },
      { name: 'HBCU 3', image: '/images/slide1.jpg', link: '#' },
      { name: 'HBCU 4', image: '/images/slide1.jpg', link: '#' },
      { name: 'HBCU 5', image: '/images/slide1.jpg', link: '#' },
    ],
    'Faith-Based': [
      { name: 'Faith-Based 1', image: '/images/slide1.jpg', link: '#' },
      { name: 'Faith-Based 2', image: '/images/slide1.jpg', link: '#' },
      { name: 'Faith-Based 3', image: '/images/slide1.jpg', link: '#' },
      { name: 'Faith-Based 4', image: '/images/slide1.jpg', link: '#' },
      { name: 'Faith-Based 5', image: '/images/slide1.jpg', link: '#' },
    ]
  };

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Our Success Stories</h2>
      <div className="flex justify-center mb-8">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 mx-2 font-medium rounded-full transition-colors duration-300 ${activeTab === tab ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-600 hover:bg-teal-600 hover:text-white'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {stories[activeTab as keyof Stories].map((story, index) => (
          <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src={story.image}
              alt={story.name}
              className="w-full h-32 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-4">{story.name}</h3>
            <a
              href={story.link}
              className="inline-block px-4 py-2 bg-teal-600 text-white font-medium rounded-full shadow-md hover:bg-teal-700 transition-all"
            >
              Learn More..
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
