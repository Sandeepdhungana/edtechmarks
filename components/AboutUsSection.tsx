"use client";
import { Typography, Row, Col, Card, Button } from "antd";
import CountUp from "react-countup";
const { Title, Paragraph } = Typography;

const AboutUsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <Title level={2} className="text-center mb-8 text-gray-800">
          About Us
        </Title>
        <Paragraph className="text-center mb-16 text-gray-600">
          Discover our mission, vision, and values that drive our success.
        </Paragraph>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} md={8}>
            <Card className="h-full shadow-lg">
              <Title level={4} className="mb-4 text-gray-800">
                Our Mission
              </Title>
              <Paragraph className="text-gray-600">
                To innovate and excel in providing top-notch IT services and
                solutions to educational institutions worldwide.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="h-full shadow-lg">
              <Title level={4} className="mb-4 text-gray-800">
                Our Vision
              </Title>
              <Paragraph className="text-gray-600">
                To be the leading IT service provider in the education sector,
                empowering institutions with cutting-edge technology.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="h-full shadow-lg">
              <Title level={4} className="mb-4 text-gray-800">
                Our Values
              </Title>
              <Paragraph className="text-gray-600">
                Integrity, innovation, and excellence are at the core of
                everything we do.
              </Paragraph>
            </Card>
          </Col>
        </Row>
        <div className="mt-16 text-center">
          <Button
            type="primary"
            size="large"
            className="bg-green-500 border-none"
          >
            Learn More About Us
          </Button>
        </div>
        <div className="mt-16">
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} md={10}>
              <Card className="text-center py-10 bg-green-100 shadow-lg">
                <Title level={3} className="text-green-600">
                  <CountUp start={0} end={100} />+
                </Title>
                <Paragraph>Educational Institutions Served</Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={10}>
              <Card className="text-center py-10 bg-blue-100 shadow-lg">
                <Title level={3} className="text-blue-600">
                  <CountUp start={0} end={95} />%
                </Title>
                <Paragraph>Customer Satisfaction Rate</Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
