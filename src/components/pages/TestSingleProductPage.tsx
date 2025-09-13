import React from "react";

type TestSingleProductPageProps = {
  productId: string;
};

const TestSingleProductPage: React.FC<TestSingleProductPageProps> = ({
  productId,
}) => {
  console.log("Test single page component:", productId);

  return (
    <div>
      <h1>Single Product Page</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
};

export default TestSingleProductPage;
