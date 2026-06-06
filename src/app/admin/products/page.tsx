import Link from "next/link";
import { getProducts } from "@/lib/actions/products";
import DeleteProductButton from "./DeleteProductButton";

export default async function AdminProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-3xl text-ink">Products</h1>
        <Link
          href="/admin/products/new"
          className="px-5 py-2 bg-void text-parchment text-xs font-ui tracking-widest uppercase hover:bg-tan transition-colors"
        >
          + Add Product
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-20 text-tan font-ui text-sm">
          No products yet.{" "}
          <Link href="/admin/products/new" className="underline text-gold">
            Add your first product →
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-parchment border-b border-tan/20">
              <tr>
                {["Image", "Name", "Category", "Price", "Stock", ""].map((h) => (
                  <th key={h} className="text-left px-4 py-3 font-ui text-[11px] tracking-widest uppercase text-tan">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((p) => (
                <tr key={p.id} className="hover:bg-parchment/40 transition-colors">
                  <td className="px-4 py-3">
                    {p.images[0] ? (
                      <img src={p.images[0]} alt={p.nameEn} className="w-12 h-12 object-cover rounded" />
                    ) : (
                      <div className="w-12 h-12 bg-parchment rounded" />
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-medium text-ink">{p.nameEn}</p>
                    <p className="text-tan text-xs">{p.nameAr}</p>
                    <p className="text-gray-400 text-xs mt-0.5">/{p.slug}</p>
                  </td>
                  <td className="px-4 py-3 text-tan">{p.category.nameEn}</td>
                  <td className="px-4 py-3 font-medium text-ink">
                    EGP {Number(p.price).toFixed(2)}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-[11px] font-ui ${p.stock > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
                      {p.stock > 0 ? `${p.stock} in stock` : "Out of stock"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-3 justify-end">
                      <Link
                        href={`/admin/products/${p.id}/edit`}
                        className="text-xs text-tan hover:text-gold transition-colors"
                      >
                        Edit
                      </Link>
                      <DeleteProductButton id={p.id} name={p.nameEn} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
