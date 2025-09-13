import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { getProductById } from "@/services/Product";
import ProductSinglePage from "@/components/pages/ProductSinglePage";

type TParams = Promise<{ productid: string }>;

export default async function Page({ params }: { params: TParams }) {
  const { productid } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["PRODUCT_DETAILS", productid],
    queryFn: () => getProductById(productid),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductSinglePage productId={productid} />
    </HydrationBoundary>
  );
}
