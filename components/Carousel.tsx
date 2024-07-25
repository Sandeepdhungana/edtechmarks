"use client";
import { carouselData } from "@/constants/carouseldata";
import { Carousel, Typography, Button } from "antd";
import Image from "next/image";
const { Title, Paragraph } = Typography;

const CarouselComponent: React.FC = () => {
  return (
    <Carousel autoplay>
      {carouselData.map(({ image, title, paragraph }, index) => (
        <div key={index} className="carousel-slide relative">
          <Image
            src={image}
            alt={`slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="carousel-overlay absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="carousel-content absolute inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 md:px-8  h-full">
            <div className="md:flex-1 max-md:max-w-full flex flex-col justify-center">
              <Title level={2} className="carousel-title text-white text-2xl md:text-4xl">
                {title}
              </Title>
              <Paragraph className="carousel-paragraph text-white text-lg max-sm:text-[17px] md:text-xl mb-4">
                {paragraph}
              </Paragraph>
              <Button type="primary" size="large" className="carousel-button bg-green-500 border-none">
                Click Here
              </Button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
