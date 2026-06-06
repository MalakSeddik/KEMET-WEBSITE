"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getProducts() {
  return prisma.product.findMany({
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });
}

export async function getProduct(id: string) {
  return prisma.product.findUnique({
    where: { id },
    include: { category: true },
  });
}

function parseProductForm(formData: FormData) {
  const imagesRaw  = (formData.get("images") as string).trim();
  const categoryId = (formData.get("categoryId") as string).trim();

  return {
    fields: {
      slug:           (formData.get("slug")         as string).trim().toLowerCase().replace(/\s+/g, "-"),
      nameEn:         (formData.get("nameEn")        as string).trim(),
      nameAr:         (formData.get("nameAr")        as string).trim(),
      descEn:         (formData.get("descEn")        as string).trim() || null,
      descAr:         (formData.get("descAr")        as string).trim() || null,
      price:          parseFloat(formData.get("price") as string),
      stock:          parseInt(formData.get("stock")   as string, 10),
      images:         imagesRaw ? imagesRaw.split("\n").map((u) => u.trim()).filter(Boolean) : [],
      leatherGrade:   (formData.get("leatherGrade")  as string | null) || null,
      personalizable: formData.get("personalizable") === "on",
    },
    categoryId,
  };
}

export async function createProduct(formData: FormData) {
  const { fields, categoryId } = parseProductForm(formData);

  await prisma.product.create({
    data: {
      ...fields,
      category: { connect: { id: categoryId } },
    },
  });

  revalidatePath("/admin/products");
  revalidatePath("/en/shop");
  redirect("/admin/products");
}

export async function updateProduct(id: string, formData: FormData) {
  const { fields, categoryId } = parseProductForm(formData);

  await prisma.product.update({
    where: { id },
    data: {
      ...fields,
      category: { connect: { id: categoryId } },
    },
  });

  revalidatePath("/admin/products");
  revalidatePath("/en/shop");
  redirect("/admin/products");
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({ where: { id } });
  revalidatePath("/admin/products");
  revalidatePath("/en/shop");
}
