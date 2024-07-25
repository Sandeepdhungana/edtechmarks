"use client";

import { Card, Typography, Button } from "antd";
import Image from "next/image";

const { Title, Paragraph } = Typography;

interface RecentCardProps {
  imageSrc: string;
  universityName: string;
}

const RecentCard: React.FC<RecentCardProps> = ({ imageSrc, universityName }) => {
  return (
    <Card
      hoverable
      className="w-full max-w-lg mx-auto"
      cover={
        <div className="relative h-64">
          <Image
            src={imageSrc}
            alt={universityName}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      }
    >
      <div className="p-4 max-sm:p-0">
        <Title level={4} className="text-green-500 mb-2">
          {universityName}
        </Title>
        <Paragraph className="text-gray-600 mb-4">
          Discover the beautiful campus and vibrant community of {universityName}.
        </Paragraph>
        <Button type="primary" className="bg-green-500 border-none">
          Visit
        </Button>
      </div>
    </Card>
  );
};

export default RecentCard;
