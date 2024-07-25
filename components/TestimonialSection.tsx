"use client";

import { Carousel, Card, Typography, Avatar } from "antd";
import { StarFilled } from "@ant-design/icons";
const { Title, Paragraph } = Typography;

const testimonials = [
  {
    name: "Morich Brown",
    comment: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
    rating: 4.5,
    imageSrc: "/images/people1.jpg"
  },
  {
    name: "Lota Mongeskar",
    comment: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
    rating: 4.5,
    imageSrc: "/images/people1.jpg"
  },
  {
    name: "Lota Mongeskar",
    comment: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
    rating: 4.5,
    imageSrc: "/images/people1.jpg"
  },
  {
    name: "Chris Brown",
    comment: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
    rating: 4.5,
    imageSrc: "/images/people1.jpg"
  },
  {
    name: "John John",
    comment: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
    rating: 4.5,
    imageSrc: "/images/people1.jpg"
  },
  {
    name: "Ram Ram",
    comment: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
    rating: 4.5,
    imageSrc: "/images/people1.jpg"
  },
  {
    name: "Hema Hema",
    comment: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
    rating: 4.5,
    imageSrc: "/images/people1.jpg"
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <Title level={2} className="text-center mb-8 text-gray-800">
          What Our Customers Say?
        </Title>
        <Paragraph className="text-center mb-16 text-gray-600">
          Hear genuine stories from our satisfied customers about their exceptional experiences with us.
        </Paragraph>
        <Carousel
          autoplay={false}
          dots={{ className: 'custom-dots' }}
          draggable={true}
          slidesToShow={3}
          slidesToScroll={1}
          adaptiveHeight={true}
          
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
          ]}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <Card className="w-full max-w-lg mx-auto my-4">
                <div className="flex flex-col items-center text-center">
                  <Avatar size={100} src={testimonial.imageSrc} className="mb-4" />
                  <Paragraph className="text-gray-600 mb-4">{testimonial.comment}</Paragraph>
                  <div className="flex items-center text-gray-600 mb-2">
                    <StarFilled className="text-red-500" />
                    <span className="ml-2">({testimonial.rating})</span>
                  </div>
                  <Title level={4} className="text-gray-800">{testimonial.name}</Title>
                </div>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
