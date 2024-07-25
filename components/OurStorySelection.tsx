"use client";

import { Carousel, Card, Typography, Button } from "antd";
import Image from "next/image";
const { Title, Paragraph } = Typography;

const OurStorySection: React.FC = () => {
  const stories = [
    { imageSrc: "/images/logo-harvard.png", title: "Story 1", description: "Description for story 1." },
    { imageSrc: "/images/logo-harvard.png", title: "Story 2", description: "Description for story 2." },
    { imageSrc: "/images/logo-harvard.png", title: "Story 3", description: "Description for story 3." },
    { imageSrc: "/images/logo-harvard.png", title: "Story 4", description: "Description for story 4." },
    { imageSrc: "/images/logo-harvard.png", title: "Story 5", description: "Description for story 5." },
    { imageSrc: "/images/logo-harvard.png", title: "Story 6", description: "Description for story 6." },
    { imageSrc: "/images/logo-harvard.png", title: "Story 7", description: "Description for story 7." },
    { imageSrc: "/images/logo-harvard.png", title: "Story 8", description: "Description for story 8." },
    { imageSrc: "/images/logo-harvard.png", title: "Story 9", description: "Description for story 9." },
    { imageSrc: "/images/logo-harvard.png", title: "Story 10", description: "Description for story 10." },
    { imageSrc: "/images/logo-harvard.png", title: "Story 11", description: "Description for story 11." },
    { imageSrc: "/images/logo-harvard.png", title: "Story 12", description: "Description for story 12." },
    { imageSrc: "/images/jain.png", title: "Story 13", description: "Description for story 13." },
    { imageSrc: "/images/jain.png", title: "Story 14", description: "Description for story 14." },
    { imageSrc: "/images/jain.png", title: "Story 15", description: "Description for story 15." },
    { imageSrc: "/images/jain.png", title: "Story 16", description: "Description for story 16." },
    { imageSrc: "/images/jain.png", title: "Story 17", description: "Description for story 17." },
    { imageSrc: "/images/jain.png", title: "Story 18", description: "Description for story 18." },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <Title level={1} className="text-center mb-8 !text-white">
          Our Story
        </Title>
        <Carousel {...settings}>
          {stories.map((story, index) => (
            <div key={index} className="px-2 ">
              <Card
                className="w-full max-w-sm mx-auto my-4 border-2 border-white-500"
                cover={
                  <div className="relative h-48">
                    <Image
                      src={story.imageSrc}
                      alt={story.title}
                      fill
                      sizes="10x"
                      style={{ objectFit: 'contain', objectPosition: 'center' }}
                      quality={100}
                    />
                  </div>
                }
              >
                <div className="p-4 text-center">
                  <Title level={4} className="text-gray-800 mb-2">
                    {story.title}
                  </Title>
                  <Paragraph className="text-gray-600 mb-4">
                    {story.description}
                  </Paragraph>
                  <Button onClick={() => console.log("blsdjf")} type="primary" className="bg-green-500 border-none z-10">
                    Learn More
                  </Button>
                </div>
              </Card>
            </div>
            
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default OurStorySection;
