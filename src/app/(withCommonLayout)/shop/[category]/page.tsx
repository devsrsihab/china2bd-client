import ShopPageSingle from "@/components/pages/ShopPageSingle";
import { categorySubCategoryItems } from "@/utils/categorySubCategory";
import { notFound } from "next/navigation";

type TParams = Promise<{ category: string }>;

// helper: slug -> Title Case (hyphens/underscores -> space, decode, trim)
const slugToTitle = (slug: string) =>
  decodeURIComponent(slug)
    .replace(/[-_]+/g, " ") // replace - and _ with space
    .trim()
    .replace(/\s+/g, " ") // collapse extra spaces
    .split(" ")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : ""))
    .join(" ");

// Dynamic page
export default async function Page({ params }: { params: TParams }) {
  const { category } = await params;

  if (!category) {
    notFound();
  }

  const categoryTitle = slugToTitle(category);

  return <ShopPageSingle categoryName={categoryTitle} />;
}

// Pre-generate all category + subcategory pages (keep slugs as-is)
export async function generateStaticParams() {
  return categorySubCategoryItems.flatMap((cat) => [
    { category: cat.slug },
    ...cat.subcategories.map((sub) => ({ category: sub.slug })),
  ]);
}
