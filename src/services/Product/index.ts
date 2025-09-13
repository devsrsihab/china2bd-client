"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/lib/AxiosInstance";

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
export const getProductsBySubcategory = async (
  subCategoryId: string | number,
  { framePosition, frameSize }: { framePosition: number, frameSize: number }
) => {
  try {
    const { data } = await axiosInstance.get(
      `/products/subcategories/${subCategoryId}/products?framePosition=${framePosition}&frameSize=${frameSize}`
    );

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// 4. Get single product info
export const getProductById = async (id: string | number) => {
  try {
    const { data } = await axiosInstance.get(`/products/single/${id}`);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
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
