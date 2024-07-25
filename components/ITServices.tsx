import Link from "next/link";
import React from "react";
const itServicesData = [
  {
    title: "Out Sourcing and Leadership",
    children: ["Comprehensive IT Outsourcing", "CIO Services", "CISO Services"],
  },
  {
    title: "Infrastrucutre & Cloud",
    children: [
      "Managed Infrastructure Services",
      "Network Operations Center",
      "Cloud Services",
      "Disaster Recovery",
    ],
  },
  {
    title: "Enterprise Applications",
    children: [
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
  },
  {
    title: "Security",
    children: [
      "Managed Security Services",
      "OculusIT EYE (SOCaaS)",
      "OculusIT Easy Access (IDAM)",
      "Risk & Compliance Assessments",
    ],
  },
  {
    title: "User Experience",
    children: ["IT Service Desk", "Chatbot"],
  },
];

const ITServices = () => {
  return (
    <div className="flex gap-3 bg-white">
    {itServicesData.map((data) => {
      return (
        <div key={data.title} className="text-black min-w-[12rem] p-2">
          <h3 className="bg-black text-white rounded-lg border-b px-2 py-3">{data.title}</h3>
          <ul className="flex flex-col gap-2 mt-4">
            {data.children.map((l) => {
              return <Link key={l} href={"#"} className="py-1 border-b">{l}</Link>;
            })}
          </ul>
        </div>
      );
    })}
  </div>
  );
};

export default ITServices;
