import ShopPageSingle from "@/components/pages/ShopPageSingle";
import { categorySubCategoryItems } from "@/utils/categorySubCategory";
import { notFound } from "next/navigation"; // ✅ better than returning <div>

// 🔹 Helper to find category by slug
function findCategoryBySlug(slug: string) {
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

type TParams = Promise<{ category: string }>;

// 🔹 Dynamic page
export default async function Page({ params }: { params: TParams }) {
  const { category } = await params; // slug from URL
  const categoryData = findCategoryBySlug(category);

  if (!categoryData) {
    notFound(); // ✅ tells Next.js to render 404 page
  }

  return (
    <ShopPageSingle
      categoryId={categoryData!.externalId} // abb-xxxxx
      categoryName={categoryData!.name} // e.g. "Women's Shoes"
    />
  );
}

// 🔹 Pre-generate all category + subcategory pages
export async function generateStaticParams() {
  return categorySubCategoryItems.flatMap((cat) => [
    { category: cat.slug },
    ...cat.subcategories.map((sub) => ({ category: sub.slug })),
  ]);
}
