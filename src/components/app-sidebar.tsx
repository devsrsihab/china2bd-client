"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// Import icons
import bagIcon from "@/assets/icons/handbag.svg";
import necklaceIcon from "@/assets/icons/necklace.svg";

const items = [
  {
    title: "Handbag",
    url: "/handbag",
    icon: bagIcon,
  },
  {
    title: "Necklace",
    url: "/necklace",
    icon: necklaceIcon,
    submenu: [
      {
        title: "Necklace 01",
        url: "/necklace-01",
        icon: bagIcon,
      },
      {
        title: "Necklace 02",
        url: "/necklace-02",
        icon: bagIcon,
      },
    ],
  },
  {
    title: "Necklace 123",
    url: "/necklace-123",
    icon: necklaceIcon,
    submenu: [
      {
        title: "Necklace 03",
        url: "/necklace-03",
        icon: bagIcon,
      },
      {
        title: "Necklace 04",
        url: "/necklace-04",
        icon: bagIcon,
      },
    ],
  },
];

export function AppSidebar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleSubmenu = (title: string) => {
    setOpenMenu((prev) => (prev === title ? null : title));
  };

  return (
    <Sidebar className="bg-red-500 mt-20">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <div key={item.title}>
                  <SidebarMenuItem>
                    {item.submenu ? (
                      <button
                        onClick={() => toggleSubmenu(item.title)}
                        className="w-full flex items-center gap-2 px-[18px] py-3.5 text-black hover:bg-[#e9f0ee] transition-all"
                      >
                        <img
                          src={item.icon.src}
                          alt={item.title}
                          className="w-6 h-6"
                        />
                        <span>{item.title}</span>
                        {openMenu === item.title ? (
                          <ChevronUp className="ml-auto w-4 h-4" />
                        ) : (
                          <ChevronDown className="ml-auto w-4 h-4" />
                        )}
                      </button>
                    ) : (
                      <SidebarMenuButton asChild>
                        <Link
                          href={item.url}
                          className="flex items-center px-[18px] py-3.5 gap-2 text-black"
                        >
                          <img
                            src={item.icon.src}
                            alt={item.title}
                            className="w-6 h-6"
                          />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>

                  {/* Animated Submenu */}
                  <AnimatePresence>
                    {item.submenu && openMenu === item.title && (
                      <motion.div
                        className="ml-6"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {item.submenu.map((sub) => (
                          <SidebarMenuItem key={sub.title}>
                            <SidebarMenuButton asChild>
                              <Link
                                href={sub.url}
                                className="flex items-center gap-2 px-[18px] py-3.5 text-sm text-black"
                              >
                                <img
                                  src={sub.icon.src}
                                  alt={sub.title}
                                  className="w-5 h-5"
                                />
                                <span>{sub.title}</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
