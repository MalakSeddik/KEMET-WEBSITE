import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { prisma } from "@/lib/prisma";
import ProductGallery from "./ProductGallery";
import AddToCartButton from "@/components/shop/AddToCartButton";

export default async function ProductPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const t = await getTranslations("product");

  const product = await prisma.product.findUnique({
    where: { slug },
    include: { category: true },
  });

  if (!product) notFound();

  const name         = locale === "ar" ? product.nameAr : product.nameEn;
  const desc         = locale === "ar" ? product.descAr  : product.descEn;
  const categoryName = locale === "ar" ? product.category.nameAr : product.category.nameEn;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        <ProductGallery images={product.images} name={name} />

        <div className="flex flex-col justify-center">
          <p className="font-ui text-[10px] tracking-widest uppercase text-tan mb-3">{categoryName}</p>
          <h1 className="font-display text-5xl text-ink mb-4">{name}</h1>
          <p className="font-ui text-2xl text-gold mb-8">EGP {Number(product.price).toLocaleString()}</p>

          {desc && (
            <p className="font-serif italic text-tan leading-relaxed mb-8 text-lg" dir={locale === "ar" ? "rtl" : "ltr"}>
              {desc}
            </p>
          )}

          {product.stock > 0 ? (
            <p className="font-ui text-xs text-green-700 mb-6">✓ In stock ({product.stock} available)</p>
          ) : (
            <p className="font-ui text-xs text-red-500 mb-6">{t("outOfStock")}</p>
          )}

          <AddToCartButton
            item={{
              id:     product.id,
              slug:   product.slug,
              nameEn: product.nameEn,
              nameAr: product.nameAr,
              price:  Number(product.price),
              image:  product.images[0] ?? "",
            }}
            label={t("addToCart")}
            outOfStockLabel={t("outOfStock")}
            disabled={product.stock === 0}
          />
        </div>
      </div>
    </div>
  );
}
