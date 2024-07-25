"use client";

import React, { useState } from "react";
import { MenuProps, Dropdown, Menu, Space } from "antd";
import { DownOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import classNames from "classnames";
import { toKebabCase } from "@/lib/utils";

type MenuItems = {
  [category: string]: {
    [topic: string]: string[];
  } | string[] | null;
};

const menuItems: MenuItems = {
  "IT Services": {
    "Outsourcing and Leadership": ["Comprehensive IT Outsourcing", "CIO Services", "CISO Services"],
    "Infrastructure & Cloud": ["Managed Infrastructure Services", "Network Operations Center", "Cloud Services", "Disaster Recovery"],
    "Enterprise Applications": ["Managed Application Services", "Banner® Managed Services", "Banner® Professional Services", "Colleague® Managed Services", "PowerCampus Managed Services", "PowerFAIDS Managed Services", "Slate Managed Service", "Reporting", "Database Management"],
    "Security": ["Managed Security Services", "OculusIT EYE (SOCaaS)", "OculusIT Easy Access (IDAM)", "Risk & Compliance Assessments"],
    "User Experience": ["IT Service Desk", "Chatbot"],
  },
  "Company": ["About Us", "Leadership Team", "Advisory Board", "Careers"],
  "Resources": ["Blog"],
  Contact: null, // No dropdown menu
};

const onClick: MenuProps['onClick'] = ({ key }) => {
  // message.info(`Click on item ${key}`);
};




const generateMenuItems = (topics: { [key: string]: string[] } | string[]): MenuProps['items'] => {
  if (Array.isArray(topics)) {
    // Handle non-nested menu items
    return topics.map((link, index) => ({
      key: index.toString(),
      label: (
        <Link href={`/${toKebabCase(link)}`}>
          <span className="hover:underline mb-4 text-gray-700 px-2 cursor-pointer  md:text-lg">{link}</span>
        </Link>
      ),
    }));
  }

  // Handle nested menu items
  const topicKeys = Object.keys(topics);
  const columnClass = classNames({
    'sm:grid-cols-1': true,  // Always apply grid-cols-1 for small screens
    'md:grid-cols-1': topicKeys.length === 1,
    'md:grid-cols-2': topicKeys.length === 2,
    'md:grid-cols-3': topicKeys.length >= 3,
  });

  return [
    {
      key: 'menu',
      label: (
        <div className={`grid ${columnClass} gap-8 p-4 bg-white`}>
          {topicKeys.map(topic => (
            <div key={topic} className="flex flex-col">
              <span className="font-semibold mb-2  md:text-lg bg-black text-white p-2 rounded-md">{topic}</span>
              {topics[topic].map(link => (
                <Link href={`/${toKebabCase(link)}`} key={link}>
                  <span className="hover:underline mb-4 text-gray-700 px-2 cursor-pointer  md:text-lg">{link}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      ),
    },
  ];
};



const TopNavigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-white to-pink-200 shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="text-2xl font-bold text-black">
          <Link href="/" legacyBehavior>
            <span className="cursor-pointer">EdTechMarks</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          {Object.keys(menuItems).map((key) => (
            menuItems[key] ? (
              <Dropdown
                key={key}
                dropdownRender={(menu) => <Menu items={generateMenuItems(menuItems[key]!)} onClick={onClick} />}
                trigger={['hover']}
                overlayClassName="mega-menu"
                arrow={true}
              >
                <a className="text-black cursor-pointer transition duration-200  md:text-lg" onClick={e => e.preventDefault()}>
                  <Space>
                    {key} <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            ) : (
              <Link key={key} href={`/${toKebabCase(key)}`} className="text-black hover:text-blue transition duration-200  md:text-lg">
                {key}
              </Link>
            )
          ))}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-black focus:outline-none">
            {mobileMenuOpen ? <CloseOutlined className="text-xl" /> : <MenuOutlined className="text-xl" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-6 py-4">
            {Object.keys(menuItems).map((key) => (
              <div key={key} className="mb-4">
                {menuItems[key] ? (
                  <Dropdown
                    key={key}
                    dropdownRender={(menu) => <Menu items={generateMenuItems(menuItems[key]!)} onClick={onClick} />}
                    trigger={['click']}
                    overlayClassName="mega-menu"
                    arrow={true}
                  >
                    <a className="text-black hover:text-gray-700 transition duration-200  md:text-lg flex items-center justify-between" onClick={e => e.preventDefault()}>
                      <Space>
                        {key} <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                ) : (
                  <Link key={key} href={`/${toKebabCase(key)}`} className="text-black hover:text-gray-700 transition duration-200  md:text-lg">
                    {key}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNavigation;
