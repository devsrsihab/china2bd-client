interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function Page({ params }: PageProps) {
  const category = (await params).category;

  return (
    <div>
      <h2>{category}</h2>
    </div>
  );
}
