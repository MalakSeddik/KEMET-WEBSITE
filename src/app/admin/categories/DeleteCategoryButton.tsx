"use client";

import { deleteCategory } from "@/lib/actions/categories";

export default function DeleteCategoryButton({ id, name }: { id: string; name: string }) {
  async function handleDelete() {
    if (!confirm(`Delete "${name}"? Products in this category must be reassigned first.`)) return;
    await deleteCategory(id);
  }

  return (
    <button
      onClick={handleDelete}
      className="text-xs text-red-400 hover:text-red-600 transition-colors"
    >
      Delete
    </button>
  );
}
