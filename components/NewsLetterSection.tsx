"use client";

import { Row, Col, Typography, Input, Button } from "antd";
const { Title } = Typography;

const NewsletterSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} md={12}>
            <Title level={2} className="text-black">
              Sign Up for <span className="text-green-500">Updates</span> & Newsletter
            </Title>
          </Col>
          <Col xs={24} md={12}>
            <div className="flex items-center">
              <Input
                type="email"
                placeholder="subscribe@example.com"
                className="rounded-full px-4 py-2 border mr-4 flex-grow"
              />
              <Button
                type="primary"
                size="large"
                className="bg-green-500 border-none rounded-full px-8"
              >
                Sign Up
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default NewsletterSection;
