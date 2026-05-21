import FeaturesProduct from "@/components/features-product";
import prisma from "@/lib/prisma";
import { connection } from "next/server";

// http://localhost:3000/product
export default async function ProductPage() {
  await connection(); // signals this is a dynamic route
  const products = await prisma.product.findMany();

  return (
    <main>
      { products.length> 0 && JSON.stringify(products) }
      <FeaturesProduct />
    </main>
  );
}