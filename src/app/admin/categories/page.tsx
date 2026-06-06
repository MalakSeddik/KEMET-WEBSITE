import { getCategories, createCategory, deleteCategory } from "@/lib/actions/categories";
import DeleteCategoryButton from "./DeleteCategoryButton";

export default async function AdminCategoriesPage() {
  const categories = await getCategories();

  return (
    <div>
      <h1 className="font-display text-3xl text-ink mb-8">Categories</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Add form */}
        <div className="bg-white rounded shadow-sm p-6">
          <h2 className="font-ui text-xs tracking-widest uppercase text-tan mb-5">New Category</h2>
          <form action={createCategory} className="space-y-4">
            <div>
              <label className="block text-xs font-ui tracking-widest uppercase text-tan mb-1">
                Slug <span className="text-red-400">*</span>
              </label>
              <input
                name="slug"
                required
                placeholder="e.g. wallets"
                className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-tan"
              />
            </div>
            <div>
              <label className="block text-xs font-ui tracking-widest uppercase text-tan mb-1">
                Name (English) <span className="text-red-400">*</span>
              </label>
              <input
                name="nameEn"
                required
                placeholder="Wallets"
                className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-tan"
              />
            </div>
            <div>
              <label className="block text-xs font-ui tracking-widest uppercase text-tan mb-1">
                Name (Arabic) <span className="text-red-400">*</span>
              </label>
              <input
                name="nameAr"
                required
                placeholder="محافظ"
                dir="rtl"
                className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-tan"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-void text-parchment text-xs font-ui tracking-widest uppercase hover:bg-tan transition-colors"
            >
              Add Category
            </button>
          </form>
        </div>

        {/* List */}
        <div className="bg-white rounded shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="font-ui text-xs tracking-widest uppercase text-tan">
              All Categories ({categories.length})
            </h2>
          </div>
          {categories.length === 0 ? (
            <p className="px-6 py-8 text-sm text-tan text-center">No categories yet.</p>
          ) : (
            <ul className="divide-y divide-gray-100">
              {categories.map((c) => (
                <li key={c.id} className="flex items-center justify-between px-6 py-3">
                  <div>
                    <p className="text-sm font-medium text-ink">{c.nameEn}</p>
                    <p className="text-xs text-tan">{c.nameAr} · /{c.slug}</p>
                  </div>
                  <DeleteCategoryButton id={c.id} name={c.nameEn} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
