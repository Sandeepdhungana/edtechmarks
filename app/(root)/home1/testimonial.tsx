import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    image: '/images/slide1.jpg',
    name: 'John Doe',
    title: 'CEO at Company',
    text: 'This company provided excellent service and support. Highly recommended!',
  },
  {
    image: '/images/slide1.jpg',
    name: 'Jane Smith',
    title: 'Marketing Director',
    text: 'The team was very professional and their expertise is unparalleled.',
  },
  {
    image: '/images/slide1.jpg',
    name: 'Alice Johnson',
    title: 'Product Manager',
    text: 'We saw a significant improvement in our KPIs after working with them.',
  },
  {
    image: '/images/slide1.jpg',
    name: 'Robert Brown',
    title: 'Lead Developer',
    text: 'Their innovative solutions helped us streamline our processes.',
  },
  {
    image: '/images/slide1.jpg',
    name: 'Emily Davis',
    title: 'HR Manager',
    text: 'The support we received was top-notch. Truly exceptional service!',
  },
];

const TestimonialCardSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-gray-500 mb-4">{testimonial.title}</p>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
          {testimonials.slice(3).map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-gray-500 mb-4">{testimonial.title}</p>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCardSection;
