"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { getCategoriesWithSubcategories } from "@/services/Product";
import { categoryIcons } from "@/lib/categoryIcons";

// Types
type SubmenuItem = {
  id: string;
  title: string;
  url: string;
};

type SidebarItem = {
  id: string;
  title: string;
  icon: { src: string };
  submenu: SubmenuItem[];
};

export function CommonSidebar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { toggleSidebar } = useSidebar();

  const [sidebarItems, setSidebarItems] = useState<SidebarItem[]>([]);
  const [loading, setLoading] = useState(true);

  const toggleSubmenu = useCallback((categoryId: string) => {
    setOpenMenu((prev) => (prev === categoryId ? null : categoryId));
  }, []);

  useEffect(() => {
    const loadSidebarData = async () => {
      try {
        const res = await getCategoriesWithSubcategories();
        const categoriesWithSubs = Array.isArray(res?.data) ? res.data : [];

        const sidebarData: SidebarItem[] = categoriesWithSubs.map(
          (cat: any) => ({
            id: cat.Id,
            title: cat.Name,
            icon: categoryIcons[cat.Name] || { src: "" },
            submenu: (cat.subcategories || []).map((sub: any) => {
              return {
                id: sub.Id,
                title: sub.Name,
                // ✅ Id + Name together in the URL
                url: `/shop/${sub.Id}?name=${encodeURIComponent(sub.Name)}`,
              };
            }),
          })
        );

        setSidebarItems(sidebarData);
      } catch (err) {
        console.error("Failed to load sidebar:", err);
      } finally {
        setLoading(false);
      }
    };

    loadSidebarData();
  }, []);

  // 🔥 Skeleton Loader
  if (loading) {
    return (
      <div className="srs_sidebar">
        <Sidebar
          style={{ width: "18rem", borderRight: "0px", background: "white" }}
          className="bg-white mt-18 w-[256px] z-50"
        >
          <SidebarContent className="pt-2">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {Array.from({ length: 12 }).map((_, idx) => (
                    <SidebarMenuItem key={idx}>
                      <div className="flex items-center gap-[18px] px-[18px] py-[14px] animate-pulse">
                        <div className="w-6 h-6 bg-gray-200 rounded" />
                        <div className="flex-1 h-4 bg-gray-200 rounded" />
                      </div>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>
    );
  }

  return (
    <div className="srs_sidebar">
      <Sidebar
        style={{ width: "18rem", borderRight: "0px", background: "white" }}
        className="bg-white md:bg-white sm:bg-white mt-18 w-[256px] z-50"
      >
        <SidebarContent className="pt-2">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarItems.map((item) => (
                  <div key={item.id}>
                    <SidebarMenuItem>
                      {item.submenu.length > 0 ? (
                        <button
                          onClick={() => toggleSubmenu(item.id)}
                          className="w-full flex items-center gap-[18px] font-medium !text-black px-[18px] py-[14px] hover:bg-[#e9f0ee] transition-all"
                        >
                          {/* {item.icon?.src && (
                            <img
                              src={item.icon.src}
                              alt={item.title}
                              className="w-6 h-6"
                            />
                          )} */}
                          <span>{item.title}</span>
                          {openMenu === item.id ? (
                            <ChevronUp className="ml-auto w-4 h-4" />
                          ) : (
                            <ChevronDown className="ml-auto w-4 h-4" />
                          )}
                        </button>
                      ) : (
                        <SidebarMenuButton asChild>
                          <Link
                            href={item.submenu[0]?.url || "#"}
                            className="flex items-center font-medium !text-black px-[18px] py-[14px] gap-[18px]"
                          >
                            {/* {item.icon?.src && (
                              <img
                                src={item.icon.src}
                                alt={item.title}
                                className="w-6 h-6"
                              />
                            )} */}
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      )}
                    </SidebarMenuItem>

                    {/* Submenu */}
                    <AnimatePresence>
                      {openMenu === item.id && item.submenu.length > 0 && (
                        <motion.div
                          className="ml-6"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          {item.submenu.map((sub) => (
                            <SidebarMenuItem key={sub.id}>
                              <SidebarMenuButton asChild>
                                <Link
                                  href={sub.url}
                                  className="flex font-medium !text-black items-center gap-2 px-[18px] py-[22px] text-sm"
                                  onClick={() => {
                                    if (window.innerWidth < 768) {
                                      toggleSidebar();
                                    }
                                  }}
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
