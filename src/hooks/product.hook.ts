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
import { keepPreviousData, QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";
// tweak these per your product
const STALE_MS = 5 * 60 * 1000;  // 5 minutes = serve from cache on revisits within this window
const GC_MS    = 30 * 60 * 1000; // 30 minutes = keep unused pages around

// 3. Products by subcategory
type UseProductsByTitleOpts = {
  framePosition: number; // offset (or page) you pass to API
  frameSize: number;     // page size / limit
};


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



export const useProductsByTitle = (
  title: string | number,
  { framePosition, frameSize }: UseProductsByTitleOpts
) => {
  return useQuery({
    // Each (title + offset + size) is its own cached page
    queryKey: [
      "PRODUCTS_BY_SUBCATEGORY",
      String(title ?? ""),
      framePosition,
      frameSize,
    ],

    // Pass AbortController signal if your fetcher supports it (recommended)
    queryFn: ({ signal }) =>
      getProductsByTitle(title, { framePosition, frameSize, signal } as any),

    enabled: !!title && frameSize > 0,

    // UX: keep previous page visible while the new one loads
    placeholderData: keepPreviousData,

    // Don’t spam refetches on focus; only refetch on reconnect (useful after offline)
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,

    // Freshness & caching:
    // - Within 5 min, revisiting a page uses cached data (no server call)
    // - After 5 min, data is considered stale and will refetch on mount if viewed again
    staleTime: STALE_MS,

    // Keep unused pages in cache for 30 min so back/forward navigation is instant
    gcTime: GC_MS,

    // Production resilience: retry briefly with exponential backoff
    retry: 2,
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 8000),
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
