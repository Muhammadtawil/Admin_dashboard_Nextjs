"use client";
import {
  EnvelopeIcon,
  BellIcon,
  ChartBarIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const SidebarTest = () => {
  const segment = useSelectedLayoutSegment();
  const sidebarOptions = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: HomeIcon,
      current: !segment ? true : false,
    },
    {
      name: "Analytics",
      href: "/dashboard/analytics",
      icon: ChartBarIcon,
      current: `/${segment}` === "/analytics" ? true : false,
    },
    {
      name: "Notifications",
      href: "/dashboard/notifications",
      icon: BellIcon,
      current: `/${segment}` === "/notifications" ? true : false,
    },
    {
      name: "Messages",
      href: "/dashboard/messages",
      icon: EnvelopeIcon,
      current: `/${segment}` === "/messages" ? true : false,
    },
  ];
  console.log(segment);
  return <></>;
};

export default SidebarTest;
