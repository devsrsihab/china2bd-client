import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { getProductById } from "@/services/Product";
import ProductSinglePage from "@/components/pages/ProductSinglePage";

type TParams = Promise<{ productid: string }>;

// ✅ Dynamic SEO + OG metadata
export async function generateMetadata({ params }: { params: TParams }) {
  const { productid } = await params;

  try {
    const product = await getProductById(productid);

    return {
      title: product?.data?.Title ?? "Product Details",
      description:
        product?.data?.ShortDescription ??
        "Check out this product on our store.",
      openGraph: {
        title: product?.data?.Title ?? "Product Details",
        description:
          product?.data?.ShortDescription ??
          "Check out this product on our store.",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/product/${productid}`,
        images: [
          {
            url:
              product?.data?.Pictures?.[0]?.Url ??
              `${process.env.NEXT_PUBLIC_SITE_URL}/placeholder.png`,
            width: 800,
            height: 600,
            alt: product?.data?.Title ?? "Product Image",
          },
        ],
        type: "website", // 🔥 FIXED (Next.js only accepts "website" | "article")
      },

      twitter: {
        card: "summary_large_image",
        title: product?.data?.Title ?? "Product Details",
        description:
          product?.data?.ShortDescription ??
          "Check out this product on our store.",
        images: [
          product?.data?.Pictures?.[0]?.Url ??
            `${process.env.NEXT_PUBLIC_SITE_URL}/placeholder.png`,
        ],
      },
    };
  } catch (e) {
    return {
      title: "Product Not Found",
      description: "This product could not be found.",
    };
  }
}

// ✅ Hydrate product page
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
