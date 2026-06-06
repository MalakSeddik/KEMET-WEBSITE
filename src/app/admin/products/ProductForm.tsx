"use client";

import { useState } from "react";
import { Category } from "@/generated/prisma/client";
import ImageUploader from "@/components/admin/ImageUploader";

type ProductData = {
  slug:           string;
  nameEn:         string;
  nameAr:         string;
  descEn:         string | null;
  descAr:         string | null;
  price:          unknown;
  stock:          number;
  categoryId:     string;
  images:         string[];
  leatherGrade:   string | null;
  personalizable: boolean;
};

export default function ProductForm({
  action,
  categories,
  defaultValues,
}: {
  action: (formData: FormData) => Promise<void>;
  categories: Category[];
  defaultValues?: Partial<ProductData>;
}) {
  const [images, setImages] = useState<string[]>(defaultValues?.images ?? []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Replace images field with the managed state
    formData.delete("images");
    formData.append("images", images.join("\n"));
    await action(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">

      {/* Slug */}
      <Field label="Slug (URL)" name="slug" placeholder="e.g. classic-bifold-wallet" defaultValue={defaultValues?.slug} required />

      {/* Names */}
      <div className="grid grid-cols-2 gap-4">
        <Field label="Name (English)" name="nameEn" placeholder="Classic Bifold Wallet" defaultValue={defaultValues?.nameEn} required />
        <Field label="Name (Arabic)" name="nameAr" placeholder="محفظة كلاسيك" dir="rtl" defaultValue={defaultValues?.nameAr} required />
      </div>

      {/* Descriptions */}
      <div className="grid grid-cols-2 gap-4">
        <Textarea label="Description (English)" name="descEn" placeholder="Full-grain leather, hand-stitched…" defaultValue={defaultValues?.descEn ?? ""} />
        <Textarea label="Description (Arabic)" name="descAr" placeholder="جلد حبوب كاملة، مخيط يدوياً…" dir="rtl" defaultValue={defaultValues?.descAr ?? ""} />
      </div>

      {/* Price & Stock */}
      <div className="grid grid-cols-2 gap-4">
        <Field label="Price (EGP)" name="price" type="number" step="0.01" min="0" placeholder="0.00" defaultValue={defaultValues?.price != null ? String(defaultValues.price) : ""} required />
        <Field label="Stock" name="stock" type="number" min="0" placeholder="0" defaultValue={String(defaultValues?.stock ?? 0)} required />
      </div>

      {/* Category */}
      <div>
        <label className="block text-xs font-ui tracking-widest uppercase text-tan mb-1">
          Category <span className="text-red-400">*</span>
        </label>
        <select
          name="categoryId"
          defaultValue={defaultValues?.categoryId ?? ""}
          required
          className="w-full border border-gray-200 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-tan"
        >
          <option value="" disabled>Select a category…</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>{c.nameEn}</option>
          ))}
        </select>
      </div>

      {/* Leather Grade + Personalizable */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-ui tracking-widest uppercase text-tan mb-1">Leather Grade</label>
          <select
            name="leatherGrade"
            defaultValue={defaultValues?.leatherGrade ?? ""}
            className="w-full border border-gray-200 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-tan"
          >
            <option value="">— None —</option>
            <option value="Full-Grain">Full-Grain</option>
            <option value="Top-Grain">Top-Grain</option>
            <option value="Genuine">Genuine</option>
            <option value="Suede">Suede</option>
          </select>
        </div>
        <div className="flex flex-col justify-end">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="personalizable"
              defaultChecked={defaultValues?.personalizable ?? false}
              className="w-4 h-4 accent-tan"
            />
            <span className="text-xs font-ui tracking-widest uppercase text-tan">Personalizable</span>
          </label>
        </div>
      </div>

      {/* Images */}
      <div>
        <label className="block text-xs font-ui tracking-widest uppercase text-tan mb-2">
          Product Images
          <span className="ml-2 normal-case font-normal text-gray-400">
            — first image main, second image shown on hover
          </span>
        </label>
        <ImageUploader value={images} onChange={setImages} />
      </div>

      <button
        type="submit"
        className="px-8 py-3 bg-void text-parchment text-xs font-ui tracking-widest uppercase hover:bg-tan transition-colors"
      >
        Save Product
      </button>
    </form>
  );
}

function Field({
  label, name, type = "text", placeholder, defaultValue, required, step, min, dir,
}: {
  label: string; name: string; type?: string; placeholder?: string;
  defaultValue?: string; required?: boolean; step?: string; min?: string; dir?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-ui tracking-widest uppercase text-tan mb-1">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        step={step}
        min={min}
        dir={dir}
        className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-tan"
      />
    </div>
  );
}

function Textarea({ label, name, placeholder, defaultValue, dir }: {
  label: string; name: string; placeholder?: string; defaultValue?: string; dir?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-ui tracking-widest uppercase text-tan mb-1">{label}</label>
      <textarea
        name={name}
        rows={4}
        placeholder={placeholder}
        defaultValue={defaultValue}
        dir={dir}
        className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-tan resize-y"
      />
    </div>
  );
}
