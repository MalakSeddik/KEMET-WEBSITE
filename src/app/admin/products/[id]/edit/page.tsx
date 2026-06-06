import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, updateProduct } from "@/lib/actions/products";
import { getCategories } from "@/lib/actions/categories";
import ProductForm from "../../ProductForm";

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [product, categories] = await Promise.all([getProduct(id), getCategories()]);

  if (!product) notFound();

  const action = async (formData: FormData) => {
    "use server";
    await updateProduct(id, formData);
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <Link href="/admin/products" className="text-tan hover:text-gold text-sm transition-colors">
          ← Products
        </Link>
        <span className="text-tan/40">/</span>
        <h1 className="font-display text-3xl text-ink">Edit Product</h1>
      </div>

      <ProductForm
        action={action}
        categories={categories}
        defaultValues={{
          slug:           product.slug,
          nameEn:         product.nameEn,
          nameAr:         product.nameAr,
          descEn:         product.descEn,
          descAr:         product.descAr,
          price:          Number(product.price),
          stock:          product.stock,
          categoryId:     product.categoryId,
          images:         product.images,
          leatherGrade:   product.leatherGrade,
          personalizable: product.personalizable,
        }}
      />
    </div>
  );
}
