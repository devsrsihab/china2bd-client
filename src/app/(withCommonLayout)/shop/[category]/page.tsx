import ShopPageSingle from "@/components/pages/ShopPageSingle";

interface PageProps {
  params: { category: string }; // comes from [category]
  searchParams: { name?: string }; // query string
}

export default function Page({ params, searchParams }: PageProps) {
  const categoryId = params.category; // abb-122338008
  const categoryName = searchParams.name || "Unknown"; // Wigs

  return <ShopPageSingle categoryId={categoryId} categoryName={categoryName} />;
}
