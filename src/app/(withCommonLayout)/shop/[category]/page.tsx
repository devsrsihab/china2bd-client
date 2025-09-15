import ShopPageSingle from "@/components/pages/ShopPageSingle";
import { categorySubCategoryItems } from "@/utils/categorySubCategory";
import { notFound } from "next/navigation"; // ✅ better than returning <div>

type TParams = Promise<{ category: string }>;

// 🔹 Dynamic page
export default async function Page({ params }: { params: TParams }) {
  const { category } = await params; // slug from URL

  if (!category) {
    notFound(); // ✅ tells Next.js to render 404 page
  }

  return (
    <ShopPageSingle
      categoryName={category} // e.g. "Women's Shoes"
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
