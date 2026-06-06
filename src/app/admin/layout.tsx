import Link from "next/link";
import "../../app/globals.css";

const sideLinks = [
  { href: "/admin/products",   label: "Products"   },
  { href: "/admin/categories", label: "Categories" },
  { href: "/admin/orders",     label: "Orders"     },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex bg-[#f8f7f5] text-ink font-ui">
        {/* Sidebar */}
        <aside className="w-56 bg-void text-parchment flex flex-col shrink-0">
          <Link href="/admin" className="block px-6 py-5 font-display text-lg tracking-widest uppercase text-parchment border-b border-tan/20">
            Kemet Admin
          </Link>
          <nav className="flex-1 py-4">
            {sideLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block px-6 py-3 text-xs tracking-[0.15em] uppercase text-tan hover:text-gold hover:bg-white/5 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="px-6 py-4 border-t border-tan/20">
            <Link href="/en" className="text-xs text-tan hover:text-gold transition-colors tracking-wide">
              ← Back to store
            </Link>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-8 overflow-auto">{children}</main>
      </body>
    </html>
  );
}
