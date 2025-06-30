"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/lib/AxiosInstance";

// create
export const createProduct = async (formData: any) => {
  try {
    const { data } = await axiosInstance.post("/properties", formData);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// update
export const updateProduct = async (pageData: any, id: number) => {
  try {
    const { data } = await axiosInstance.patch(`/properties/${id}`, pageData);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// get all
export const getProductList = async (filters: Record<string, string>) => {
  try {
    const queryParams = new URLSearchParams({
      ...filters,
    }).toString();
    const { data } = await axiosInstance.get(`/products/search?${queryParams}`);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// details
export const getProductDetails = async (id: number) => {
  try {
    const { data } = await axiosInstance.get(`/properties/${id}`);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// delete
export const deleteProduct = async (id: any) => {
  try {
    const { data } = await axiosInstance.delete(`/properties/${id}`);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// delete multiple
export const deleteMultipleProduct = async (ids: any) => {
  try {
    const { data } = await axiosInstance.delete(
      "/properties/properties-destroy/destroy-multiple",
      { data: ids }
    );
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
