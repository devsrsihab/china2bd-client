/* eslint-disable @typescript-eslint/no-explicit-any */

import { TProduct } from "@/types";

/**
 * Normalize raw product response into TProduct shape
 */
export function normalizeProduct(raw: any): TProduct {
  return {
    id: raw.Id || raw.code || "",
    title: raw.Title || raw.title || "Untitled Product",
    description: raw.Description || "",
    categoryId: raw.CategoryId || null,

    // Price normalization
    price: {
      original: raw.Price?.OriginalPrice ?? null,
      converted: raw.Price?.ConvertedPrice ?? null,
      display: raw.Price?.ConvertedPrice || `${raw.Price?.OriginalPrice ?? 0}`,
      currency: raw.Price?.CurrencyCode || raw.Price?.OriginalCurrencyCode || "",
      sign: raw.Price?.CurrencySign || "",
    },

    // Stock / quantity
    quantity: raw.MasterQuantity ?? 0,

    // Vendor info
    vendor: {
      id: raw.VendorId || "",
      name: raw.VendorName || "",
      displayName: raw.VendorDisplayName || "",
      score: raw.VendorScore ?? 0,
    },

    // Images
    images: raw.Pictures?.map((p: any) => p?.Medium?.Url || p?.Url) || [
      raw.MainPictureUrl || "/placeholder.png",
    ],

    // thumbnail
    thumbnail: raw.MainPictureUrl || "/placeholder.png",

    // Stats (sales, rating, etc.)
    stats: {
      totalSales: Number(
        raw.FeaturedValues?.find((f: any) => f.Name === "TotalSales")?.Value || 0
      ),
      salesLast30Days: Number(
        raw.FeaturedValues?.find((f: any) => f.Name === "SalesInLast30Days")?.Value || 0
      ),
      rating: Number(
        raw.FeaturedValues?.find((f: any) => f.Name === "rating")?.Value || 0
      ),
    },

    // Location
    location: raw.Location?.State || null,
  };
}
