import Link from "next/link";
import { getCategories } from "@/lib/actions/categories";
import { createProduct } from "@/lib/actions/products";
import ProductForm from "../ProductForm";

export default async function NewProductPage() {
  const categories = await getCategories();

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <Link href="/admin/products" className="text-tan hover:text-gold text-sm transition-colors">
          ← Products
        </Link>
        <span className="text-tan/40">/</span>
        <h1 className="font-display text-3xl text-ink">New Product</h1>
      </div>

      {categories.length === 0 ? (
        <div className="p-6 bg-amber-50 border border-amber-200 rounded text-sm text-amber-800">
          You need at least one category before adding products.{" "}
          <Link href="/admin/categories" className="underline font-medium">
            Create a category first →
          </Link>
        </div>
      ) : (
        <ProductForm action={createProduct} categories={categories} />
      )}
    </div>
  );
}
