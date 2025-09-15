'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import { categoryIcons } from "@/lib/categoryIcons";
import {
  getAllCategories,
  getSubcategories,
  getCategoriesWithSubcategories,
  getProductsByTitle,
  getProductById,
  getVendorById,
} from "@/services/Product";
import { TSidebarItem } from "@/types";
import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";

// 1. Categories only
export const useCategories = () => {
  return useQuery({
    queryKey: ["CATEGORIES"],
    queryFn: getAllCategories,
    refetchOnWindowFocus: false,
  });
};

// 2. Subcategories only
export const useSubcategories = (categoryId: string | number) => {
  return useQuery({
    queryKey: ["SUBCATEGORIES", categoryId],
    queryFn: () => getSubcategories(categoryId),
    enabled: !!categoryId,
    refetchOnWindowFocus: false,
  });
};

// 🚀 2.1 Optimized: Categories with Subcategories
export const useCategoriesWithSubcategories = () => {
  return useQuery({
    queryKey: ["CATEGORIES_WITH_SUBS"],
    queryFn: getCategoriesWithSubcategories,
    refetchOnWindowFocus: false,
  });
};

// 3. Products by subcategory
export const useProductsByTitle = (
  title: string | number, { framePosition, frameSize }: { framePosition: number, frameSize: number }
) => {
  return useQuery({
    queryKey: ["PRODUCTS_BY_SUBCATEGORY", title],
    queryFn: () => getProductsByTitle(title, { framePosition, frameSize }),
    enabled: !!title,
    refetchOnWindowFocus: false,
  });
};

// 4. Product details
export const useProductById = (
  id: string | number,
  options?: Omit<UseQueryOptions<any, any, any, QueryKey>, 'queryKey' | 'queryFn'>
) => {
  return useQuery({
    queryKey: ['PRODUCT_DETAILS', id],
    queryFn: () => getProductById(id),
    enabled: !!id,
    refetchOnWindowFocus: false,
    ...options,
  });
};


// 5. Vendor details
export const useVendorById = (id: string | number) => {
  return useQuery({
    queryKey: ["VENDOR_DETAILS", id],
    queryFn: () => getVendorById(id),
    enabled: !!id,
    refetchOnWindowFocus: false,
  });
};

/**
 * Build sidebar items directly from categories + subcategories
 */
export const buildSidebarItems = (categoriesWithSubs: any[]): TSidebarItem[] => {
  return categoriesWithSubs.map((cat: any) => ({
    id: cat.Id,
    title: cat.Name,
    icon: categoryIcons[cat.Name] ?? { src: "" },
    submenu: (cat.subcategories || []).map((sub: any) => ({
      id: sub.Id,
      title: sub.Name,
      url: `/shop/${(sub.Name || "")
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "")}`,
    })),
  }));
};
