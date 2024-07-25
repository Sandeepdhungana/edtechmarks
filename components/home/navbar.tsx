"use client";
import Link from "next/link";
import { useState } from "react";
import { Navigation } from "./shadcn-navigation";

// Define the MenuItems type
type MenuItems = {
  [key: string]: null | string[] | { [key: string]: string[] };
};

// Define the menu items
const menuItems: MenuItems = {
  "IT Services": {
    "Outsourcing and Leadership": [
      "Comprehensive IT Outsourcing",
      "CIO Services",
      "CISO Services",
    ],
    "Infrastructure & Cloud": [
      "Managed Infrastructure Services",
      "Network Operations Center",
      "Cloud Services",
      "Disaster Recovery",
    ],
    "Enterprise Applications": [
      "Managed Application Services",
      "Banner® Managed Services",
      "Banner® Professional Services",
      "Colleague® Managed Services",
      "PowerCampus Managed Services",
      "PowerFAIDS Managed Services",
      "Slate Managed Service",
      "Reporting",
      "Database Management",
    ],
    Security: [
      "Managed Security Services",
      "OculusIT EYE (SOCaaS)",
      "OculusIT Easy Access (IDAM)",
      "Risk & Compliance Assessments",
    ],
    "User Experience": ["IT Service Desk", "Chatbot"],
  },
  Company: ["About Us", "Leadership Team", "Advisory Board", "Careers"],
  Resources: ["Blog"],
  Contact: null,
};

// Define the Navbar component
export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              EdTechMarks
            </Link>
            <div className="ml-10 flex items-baseline space-x-4">
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
