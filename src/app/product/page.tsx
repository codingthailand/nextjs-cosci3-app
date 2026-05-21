import FeaturesProduct from "@/components/features-product";
import prisma from "@/lib/prisma";

// http://localhost:3000/product
export default async function ProductPage() {
  const products = await prisma.product.findMany();

  return (
    <main>
      { products.length> 0 && JSON.stringify(products) }
      <FeaturesProduct />
    </main>
  );
}