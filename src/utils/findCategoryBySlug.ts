import { categorySubCategoryItems } from "./categorySubCategory";


export function findCategoryBySlug(slug: string) {
  for (const cat of categorySubCategoryItems) {
    if (cat.slug === slug) {
      return { id: cat.Id, externalId: cat.ExternalId, name: cat.Name };
    }

    for (const sub of cat.subcategories) {
      if (sub.slug === slug) {
        return { id: sub.Id, externalId: sub.ExternalId, name: sub.Name };
      }
    }
  }
  return null;
}
