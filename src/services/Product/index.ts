"use server";
import envConfig from "@/config/envConfig";
/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/lib/AxiosInstance";
const maybeSignal = (signal?: AbortSignal) =>
  typeof window !== "undefined" && signal ? { signal } : undefined;
export type PopularPayload = {
  success: boolean;
  message: string;
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    maximumPageCount: number;
  };
  data: any[];
};

// 1. Get all categories
export const getAllCategories = async () => {
  try {
    const { data } = await axiosInstance.get("/products/categories");
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// 2. Get subcategories by category ID
export const getSubcategories = async (categoryId: string | number) => {
  try {
    const { data } = await axiosInstance.get(`/products/categories/${categoryId}/subcategories`);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// 🚀 2.1 Optimized: Get categories WITH subcategories (new aggregated endpoint)
export const getCategoriesWithSubcategories = async () => {
  try {
    const { data } = await axiosInstance.get("/products/categories-with-subcategories");
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// 3. Get product list under subcategory
export const getProductsByTitle = async (
  categoryName: string | number,
  { framePosition, frameSize }: { framePosition: number, frameSize: number }
) => {
  try {
    console.log('fram position ', framePosition);
    
    const { data } = await axiosInstance.get(
      `/products/search?framePosition=${framePosition}&frameSize=${frameSize}&keyword=${categoryName}`
    );

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
}

// popular 
export const getPopularProducts = async ({
  framePosition,
  frameSize,
  signal,
}: {
  framePosition: number;
  frameSize: number;
  signal?: AbortSignal;
}) => {
  const { data } = await axiosInstance.get<PopularPayload>("/products/popular", {
    params: { framePosition, frameSize },
    ...maybeSignal(signal),
  });
  return data; // { success, message, meta, data }
};

// 4. Get single product info
// export const getProductById = async (id: string | number) => {
//   try {
//     const { data } = await axiosInstance.get(`/products/single/${id}`);
//     return data;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };
export const getProductById = async (id: string | number) => {
  const res = await fetch(`${envConfig.serverApi}/products/single/${id}`, {
    next: { revalidate: 60 }, // optional: ISR (60s)
    cache: "no-store",        // or use force-cache depending on your case
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
};

// 5. Get vendor info
export const getVendorById = async (id: string | number) => {
  try {
    const { data } = await axiosInstance.get(`/products/vendors/${id}`);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
