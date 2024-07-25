"use client";

import { Row, Col, Typography, Space } from "antd";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";
import Link from "next/link";
const { Title, Paragraph } = Typography;

const products = [
  { name: "Product 1", link: "/product-1" },
  { name: "Product 2", link: "/product-2" },
  { name: "Product 3", link: "/product-3" },
  { name: "Product 4", link: "/product-4" },
  { name: "Product 5", link: "/product-5" },
];

const help = [
  { name: "About us", link: "/about-us" },
  { name: "FAQs", link: "/faqs" },
  { name: "How it works", link: "/how-it-works" },
  { name: "Privacy policy", link: "/privacy-policy" },
  { name: "Payment policy", link: "/payment-policy" },
];

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black text-white">
      <div className="container mx-auto px-4">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={6}>
            <div className="flex flex-col items-start">
              <Title level={3} className="text-white">
                EdTechMarks
              </Title>
              <Paragraph className="text-white text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores accusamus doloremque sunt natus, cumque consequuntur suscipit est. Neque tenetur labore porro ad iure error veritatis molestiae quo, alias totam voluptas.
              </Paragraph>
              <Space size="middle">
                <FacebookOutlined className="text-xl" />
                <TwitterOutlined className="text-xl" />
                <InstagramOutlined className="text-xl" />
              </Space>
            </div>
          </Col>
          <Col xs={24} md={6}>
            <Title level={4} className="text-white">Products</Title>
            <ul className="list-none p-0 text-lg">
              {products.map((product, index) => (
                <li key={index}>
                  <Link href={product.link} className="text-white hover:text-gray-400">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col xs={24} md={6}>
            <Title level={4} className="text-white">Help</Title>
            <ul className="list-none p-0 text-lg">
              {help.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} className="text-white hover:text-gray-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col xs={24} md={6}>
            <Title level={4} className="text-white">Get in touch</Title>
            <Paragraph className="text-white text-lg">
              customer@edtechmarks.com
            </Paragraph>
            <Paragraph className="text-white text-lg">
              +1234567890
            </Paragraph>
          </Col>
        </Row>
        <Row className="mt-8 border-t border-white pt-4">
          <Col xs={24} className="text-center">
            <Paragraph className="text-white text-lg">
              &copy; 2024 EdTechMarks. All rights reserved.
            </Paragraph>
            <Link href="/terms-and-conditions" className="text-white text-lg">
              Terms & Conditions
            </Link>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
