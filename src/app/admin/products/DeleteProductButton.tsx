"use client";

import { deleteProduct } from "@/lib/actions/products";

export default function DeleteProductButton({ id, name }: { id: string; name: string }) {
  async function handleDelete() {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return;
    await deleteProduct(id);
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
