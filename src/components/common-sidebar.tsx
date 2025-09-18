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
import { useState } from "react";
import { ChevronLeft } from "lucide-react";

// Each category from the API has the shape { Id: string, Name: string, subcategories: Array<{ Id: string; Name: string }> }
// We'll import the data from utils instead of defining it here.
import { categorySubCategoryItems } from "@/utils/categorySubCategory";
import Image from "next/image";

// Define TypeScript interfaces for better type checking
type Subcategory = {
  Id: string;
  Name: string;
  order?: number;
  slug?: string;
};

type Category = {
  Id: string;
  Name: string;
  order?: number;
  icon?: any;
  subcategories: Subcategory[];
};

export function CommonSidebar() {
  // Track which category is currently active (null means we're at the top-level category view)
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const { toggleSidebar } = useSidebar();

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategoryId(categoryId);
  };
  const handleBackClick = () => {
    setActiveCategoryId(null);
  };

  // Find the active category object based on activeCategoryId
  const activeCategory: Category | undefined =
    activeCategoryId != null
      ? (categorySubCategoryItems as Category[]).find(
          (c) => c.Id === activeCategoryId
        )
      : undefined;

  // array prevents mutation of the original data.
  const sortedCategories: Category[] = (categorySubCategoryItems as Category[])
    .slice()
    .sort((a, b) => {
      const orderA = a.order ?? Number.MAX_SAFE_INTEGER;
      const orderB = b.order ?? Number.MAX_SAFE_INTEGER;
      return orderA - orderB;
    });

  // If we have an active category, sort its subcategories in a similar manner.
  const sortedSubcategories: Subcategory[] | undefined = activeCategory
    ? activeCategory.subcategories.slice().sort((a, b) => {
        const orderA = a.order ?? Number.MAX_SAFE_INTEGER;
        const orderB = b.order ?? Number.MAX_SAFE_INTEGER;
        return orderA - orderB;
      })
    : undefined;

  return (
    <div className="srs_sidebar">
      <Sidebar
        style={{ borderRight: "0px", background: "white" }}
        className="c2bdSidebar"
      >
        <SidebarContent className="pt-2">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {/* Top-level categories in a 2-column grid */}
                {activeCategory == null && (
                  <div className="grid grid-cols-2 gap-x-3 gap-y-4 px-[16px] pt-[8px] pb-10">
                    {sortedCategories.map((cat) => (
                      <SidebarMenuItem key={cat.Id} className="cursor-pointer">
                        <div>
                          <div
                            className="flex flex-col items-center justify-center"
                            onClick={() => handleCategoryClick(cat.Id)}
                          >
                            {cat.icon && (
                              <div className="w-8 h-[42px] sm:w-9 sm:h-9 flex items-center justify-center">
                                <Image
                                  src={cat.icon}
                                  alt={cat.Name}
                                  width={32}
                                  height={42}
                                  className="object-contain w-[32] h-[42px]"
                                />
                              </div>
                            )}
                            <span className="mt-[4px] text-[11px] sm:text-xs text-center leading-tight">
                              {cat.Name}
                            </span>
                          </div>
                        </div>
                      </SidebarMenuItem>
                    ))}
                  </div>
                )}

                {/* Subcategory view, unchanged */}
                {activeCategory != null && (
                  <>
                    <SidebarMenuItem key={`${activeCategory.Id}-header`}>
                      <SidebarMenuButton asChild>
                        <button
                          onClick={handleBackClick}
                          className="w-full flex items-center gap-[12px] font-medium !text-black px-[18px] py-[14px] hover:bg-[#e9f0ee] transition-all"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span>{activeCategory.Name}</span>
                        </button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    {sortedSubcategories?.map((sub) => (
                      <SidebarMenuItem
                        className=" px-[18px] py-[8px] "
                        key={sub.Id}
                      >
                        <SidebarMenuButton asChild>
                          <Link
                            href={`/shop/${sub.slug}`}
                            className="flex capitalize !text-black items-center gap-2 px-0 py-0 h-auto text-sm"
                            onClick={() => {
                              if (
                                typeof window !== "undefined" &&
                                window.innerWidth < 768
                              ) {
                                toggleSidebar();
                              }
                            }}
                          >
                            <span>{sub.Name}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </>
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
