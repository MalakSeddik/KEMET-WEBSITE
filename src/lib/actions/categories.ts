"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getCategories() {
  return prisma.category.findMany({ orderBy: { nameEn: "asc" } });
}

export async function createCategory(formData: FormData) {
  const slug   = (formData.get("slug")   as string).trim().toLowerCase().replace(/\s+/g, "-");
  const nameEn = (formData.get("nameEn") as string).trim();
  const nameAr = (formData.get("nameAr") as string).trim();

  await prisma.category.create({ data: { slug, nameEn, nameAr } });
  revalidatePath("/admin/categories");
}

export async function deleteCategory(id: string) {
  await prisma.category.delete({ where: { id } });
  revalidatePath("/admin/categories");
}
