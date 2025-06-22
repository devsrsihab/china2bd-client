"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// Import icons
import { commonSidebarItems } from "@/constans/sidebar-items";

// define the type of common sidebar props
interface CommonSidebarProps {
  setIsOpenSidebar: (open: boolean) => void;
}

export function CommonSidebar({ setIsOpenSidebar }: CommonSidebarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { toggleSidebar } = useSidebar(); // use the same toggle function

  const toggleSubmenu = (title: string) => {
    setOpenMenu((prev) => (prev === title ? null : title));
  };

  return (
    <div className="srs_sidebar">
      <Sidebar
        style={{ width: "20rem", borderRight: "0px", background: "white" }}
        className="bg-white md:bg-white sm:bg-white mt-18 w-[256px] z-50 "
      >
        <SidebarContent className="pt-2">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {commonSidebarItems.map((item) => (
                  <div key={item.title}>
                    <SidebarMenuItem>
                      {Array.isArray(item.submenu) ? (
                        <button
                          onClick={() => toggleSubmenu(item.title)}
                          className="w-full flex items-center gap-[18px] font-medium  !text-black px-[18px] py-[14px]  hover:bg-[#e9f0ee] transition-all"
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
                            href={item.url || "#"}
                            className="flex items-center font-medium  !text-black px-[18px] py-[14px] gap-[18px] "
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
                      {Array.isArray(item.submenu) &&
                        openMenu === item.title && (
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
                                    className="flex font-medium  !text-black items-center gap-2 px-[18px] py-[22px] text-sm "
                                    onClick={() => toggleSidebar()}
                                  >
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
    </div>
  );
}
