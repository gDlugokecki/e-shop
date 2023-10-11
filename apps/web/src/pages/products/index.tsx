import { trpc } from "@/src/utils/trpc";
import React from "react";

export default function ProductPage() {
  const products = trpc.product.getProducts.useQuery();

  if (products.isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{products.data?.map((item) => item.name)}</div>;
}
