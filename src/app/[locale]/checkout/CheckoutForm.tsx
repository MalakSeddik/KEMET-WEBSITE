"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Loader2 } from "lucide-react";

export default function CheckoutForm() {
  const t = useTranslations("checkout");
  const { items, totalPrice, clearCart } = useCartStore();

  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [loading, setLoading]     = useState(false);
  const [iframeUrl, setIframeUrl] = useState<string | null>(null);
  const [error, setError]         = useState<string | null>(null);

  if (items.length === 0 && !iframeUrl) {
    return (
      <div className="text-center py-20">
        <p className="font-serif italic text-tan text-lg mb-8">Your cart is empty.</p>
        <Link href="/shop" className="font-ui text-xs tracking-widest uppercase border border-tan text-tan px-8 py-3 hover:border-ink hover:text-ink transition-colors">
          Continue Shopping
        </Link>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res  = await fetch("/api/checkout", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ ...form, items }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok || data.error) {
      setError(data.error ?? "Something went wrong. Please try again.");
      return;
    }
    clearCart();
    setIframeUrl(data.iframeUrl);
  }

  if (iframeUrl) {
    return (
      <div className="w-full">
        <p className="font-ui text-xs tracking-widest uppercase text-tan mb-4">
          Complete your payment below
        </p>
        <iframe src={iframeUrl} className="w-full border border-parchment rounded" style={{ height: "600px" }} allowFullScreen />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-12">
      {/* Details */}
      <div>
        <h2 className="font-ui text-[10px] tracking-widest uppercase text-tan mb-6">Your Details</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Field label="First Name" value={form.firstName} onChange={(v) => setForm({ ...form, firstName: v })} required />
            <Field label="Last Name"  value={form.lastName}  onChange={(v) => setForm({ ...form, lastName:  v })} required />
          </div>
          <Field label="Email"        type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
          <Field label="Phone Number" type="tel"   placeholder="+20 1XX XXX XXXX" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />
        </div>
        {error && <p className="mt-4 text-sm text-red-500 font-ui">{error}</p>}
      </div>

      {/* Summary */}
      <div>
        <h2 className="font-ui text-[10px] tracking-widest uppercase text-tan mb-6">Order Summary</h2>
        <div className="bg-parchment p-6 space-y-3 mb-6">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                {item.image && <img src={item.image} alt={item.nameEn} className="w-10 h-10 object-cover" />}
                <div>
                  <p className="font-ui text-xs text-ink">{item.nameEn}</p>
                  <p className="font-ui text-[10px] text-tan">× {item.quantity}</p>
                </div>
              </div>
              <p className="font-ui text-xs text-ink">EGP {(item.price * item.quantity).toLocaleString()}</p>
            </div>
          ))}
          <div className="border-t border-tan/30 pt-3 flex justify-between font-ui text-sm font-medium">
            <span className="text-ink">Total</span>
            <span className="text-gold">EGP {totalPrice().toLocaleString()}</span>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-void text-parchment font-ui text-xs tracking-widest uppercase hover:bg-tan transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
        >
          {loading && <Loader2 size={14} className="animate-spin" />}
          {loading ? "Processing…" : "Pay Now"}
        </button>
        <p className="text-[10px] font-ui text-tan text-center mt-3">Secured by Paymob · EGP only</p>
      </div>
    </form>
  );
}

function Field({ label, type = "text", placeholder, value, onChange, required }: {
  label: string; type?: string; placeholder?: string;
  value: string; onChange: (v: string) => void; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-ui tracking-widest uppercase text-tan mb-2">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="block w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-tan"
      />
    </div>
  );
}
