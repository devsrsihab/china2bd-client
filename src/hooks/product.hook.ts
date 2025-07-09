/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createProduct,
  deleteProduct,
  deleteMultipleProduct,
  getProductList,
  updateProduct,
  getProductDetails,
  getTrendingProductList,
  getSimilarProductList,
} from "@/services/Product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

// hooks/Product.hook.ts
export const useProductList = (filters: Record<string, string>) => {
  return useQuery({
    queryKey: ["PRODUCT_LIST", filters],
    queryFn: async () => {
      try {
        const response = await getProductList(filters);
        return response;
      } catch (error: any) {
        throw new Error(error);
      }
    },
    refetchOnWindowFocus: false,
  });
};

// get similar products
export const useSimilarProductList = (filters: Record<string, string>) => {
  return useQuery({
    queryKey: ["PRODUCT_SIMILAR_LIST", filters],
    queryFn: async () => {
      try {
        const response = await getSimilarProductList(filters);
        return response;
      } catch (error: any) {
        throw new Error(error);
      }
    },
    refetchOnWindowFocus: false,
  });
};

// trending product hook
export const useTrendingProductList = (filters: Record<string, string>) => {
  return useQuery({
    queryKey: ["PRODUCT_TRENDING_LIST", filters],
    queryFn: async () => {
      try {
        const response = await getTrendingProductList(filters);
        return response;
      } catch (error: any) {
        throw new Error(error);
      }
    },
    refetchOnWindowFocus: false,
  });
};

// details
export const useProductDetails = (id: number) => {
  return useQuery({
    queryKey: ["PRODUCT_DETAILS", id],
    queryFn: async () => {
      try {
        const response = await getProductDetails(id);
        return response;
      } catch (error: any) {
        throw new Error(error);
      }
    },
    refetchOnWindowFocus: false,
  });
};

// make
export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, any>({
    mutationKey: ["CREATE_PRODUCT"],
    mutationFn: async (catData) => await createProduct(catData),
    onSuccess: () => {
      toast.success("Product make Successfully", { duration: 5000 });
      queryClient.invalidateQueries({ queryKey: ["PRODUCT_LIST"] });
    },
    onError: (error) => {
      try {
        const parsedError = JSON.parse(
          error.message.replace("Error:", "").trim()
        );

        if (parsedError.errors) {
          Object.entries(parsedError.errors).forEach(([field, messages]) => {
            if (Array.isArray(messages)) {
              (messages as string[]).forEach((msg) => {
                toast.error(`${field}: ${msg}`, { duration: 5000 });
              });
            }
          });
        } else {
          toast.error(
            parsedError.message || "An error occurred while updating the data.",
            { duration: 5000 }
          );
        }
      } catch (parseError: any) {
        toast.error(parseError.message, { duration: 5000 });
      }
    },
  });
};

// update
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, any>({
    mutationKey: ["UPDATE_PRODUCT"],
    mutationFn: async ({ updateData, id }) =>
      await updateProduct(updateData, id),
    onSuccess: () => {
      toast.success("Product update Successfully", { duration: 5000 });
      queryClient.invalidateQueries({ queryKey: ["PRODUCT_LIST"] });
    },
    onError: (error: any) => {
      try {
        const parsedError = JSON.parse(
          error.message.replace("Error:", "").trim()
        );

        if (parsedError.errors) {
          Object.entries(parsedError.errors).forEach(([field, messages]) => {
            if (Array.isArray(messages)) {
              (messages as string[]).forEach((msg) => {
                toast.error(`${field}: ${msg}`, { duration: 5000 });
              });
            }
          });
        } else {
          toast.error(
            parsedError.message || "An error occurred while updating the data.",
            { duration: 5000 }
          );
        }
      } catch (parseError: any) {
        toast.error(parseError.message, { duration: 5000 });
      }
    },
  });
};

// delete
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, any>({
    mutationKey: ["DELETE_PRODUCT"],
    mutationFn: async (id) => await deleteProduct(id),
    onSuccess: () => {
      toast.success("Product delete Successfully", { duration: 5000 });
      queryClient.invalidateQueries({ queryKey: ["PRODUCT_LIST"] });
    },
    onError: (error) => {
      try {
        const parsedError = JSON.parse(
          error.message.replace("Error:", "").trim()
        );

        if (parsedError.errors) {
          Object.entries(parsedError.errors).forEach(([field, messages]) => {
            if (Array.isArray(messages)) {
              (messages as string[]).forEach((msg) => {
                toast.error(`${field}: ${msg}`, { duration: 5000 });
              });
            }
          });
        } else {
          toast.error(
            parsedError.message || "An error occurred while updating the data.",
            { duration: 5000 }
          );
        }
      } catch (parseError: any) {
        toast.error(parseError.message, { duration: 5000 });
      }
    },
  });
};

// delete multiple
export const useDeleteMultipleProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, any>({
    mutationKey: ["DELETE_PRODUCT_MULTIPLE"],
    mutationFn: async (ids) => await deleteMultipleProduct(ids),
    onSuccess: () => {
      toast.success("Product delete Successfully", { duration: 5000 });
      queryClient.invalidateQueries({ queryKey: ["PRODUCT_LIST"] });
    },
    onError: (error) => {
      try {
        const parsedError = JSON.parse(
          error.message.replace("Error:", "").trim()
        );

        if (parsedError.errors) {
          Object.entries(parsedError.errors).forEach(([field, messages]) => {
            if (Array.isArray(messages)) {
              (messages as string[]).forEach((msg) => {
                toast.error(`${field}: ${msg}`, { duration: 5000 });
              });
            }
          });
        } else {
          toast.error(
            parsedError.message || "An error occurred while updating the data.",
            { duration: 5000 }
          );
        }
      } catch (parseError: any) {
        toast.error(parseError.message, { duration: 5000 });
      }
    },
  });
};
