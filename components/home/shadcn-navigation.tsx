"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ITServices from "../ITServices";
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

const company = ["About Us", "Leadership Team", "Advisory Board", "Careers"];

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>IT Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ITServices />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="bg-white text-black grid w-[400px] gap-3 p-4 md:w-fit md:grid-cols-1 lg:w-[200px] ">
              {company.map((data) => {
                return <Link key={data} href={"#"}>{data}</Link>;
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/resources" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Resources
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact US
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
