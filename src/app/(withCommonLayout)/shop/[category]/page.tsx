import CategoryHeader from "@/components/category-header";

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function Page({ params }: PageProps) {
  const category = (await params).category;

  return (
    <div>
      <CategoryHeader name={category} totalItems={1} />
    </div>
  );
}
