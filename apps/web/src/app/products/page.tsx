"use client"

import React from "react";
import { trpc } from "../../utils/trpc";

export default function Page() {
  const products = trpc.product.getProducts.useQuery();
  return <div>{products.data?.map((item) => item.name)}</div>;
}
