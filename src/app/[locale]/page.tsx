import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import Hero from "@/components/home/Hero";
import ProductCard from "@/components/shop/ProductCard";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("home");

  const featured = await prisma.product.findMany({
    take: 4,
    orderBy: { createdAt: "desc" },
    include: { category: true },
  });

  return (
    <div>
      <Hero
        headline={t("hero.headline")}
        tagline={t("hero.sub")}
        cta="Shop Now"
        // bgImage="your-cloudinary-url-here"
        // bgVideo="your-video-url-here"
      />

      {/* ── Marquee ticker ── */}
      <div className="overflow-hidden bg-void border-y border-white/[0.05] py-3.5 select-none">
        <div className="marquee-track flex gap-0 whitespace-nowrap">
          {[...Array(2)].map((_, outer) => (
            <span key={outer} className="flex items-center shrink-0">
              {["Handcrafted in Egypt", "Full-Grain Leather", "Est. 2026", "Free Personalization", "Ships Worldwide", "Made to Last"].map((text, i) => (
                <span key={i} className="flex items-center">
                  <span className="font-ui text-[10px] tracking-[0.35em] uppercase text-gold/60 px-10">{text}</span>
                  <span className="text-gold/20 text-xs">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Featured pieces ── */}
      {featured.length > 0 && (
        <section className="bg-bg max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex items-center gap-8 mb-14 scroll-reveal">
            <h2 className="font-display text-3xl md:text-4xl text-ink whitespace-nowrap">Featured Pieces</h2>
            <div className="flex-1 h-px bg-tan/20" />
            <Link
              href={`/${locale}/shop`}
              className="hidden md:inline font-ui text-[10px] tracking-widest uppercase text-tan hover:text-gold transition-colors whitespace-nowrap"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {featured.map((p) => (
              <ProductCard
                key={p.id}
                locale={locale}
                product={{
                  id:             p.id,
                  slug:           p.slug,
                  nameEn:         p.nameEn,
                  nameAr:         p.nameAr,
                  price:          Number(p.price),
                  images:         p.images,
                  leatherGrade:   p.leatherGrade,
                  personalizable: p.personalizable,
                  category:       { nameEn: p.category.nameEn, nameAr: p.category.nameAr },
                }}
              />
            ))}
          </div>

          <div className="text-center mt-14 md:hidden">
            <Link
              href={`/${locale}/shop`}
              className="font-ui text-xs tracking-widest uppercase border border-tan text-tan px-8 py-3 hover:border-ink hover:text-ink transition-colors"
            >
              View All Products
            </Link>
          </div>
        </section>
      )}

      {/* ── The Kemet Promise — dark editorial ── */}
      <section className="relative bg-void overflow-hidden py-32 px-6 md:px-12">
        {/* Background wordmark */}
        <div aria-hidden className="pointer-events-none select-none absolute inset-0 flex items-center justify-center">
          <span
            className="font-display text-parchment whitespace-nowrap"
            style={{ fontSize: "clamp(5rem, 22vw, 20rem)", opacity: 0.03, letterSpacing: "0.12em" }}
          >
            KEMET
          </span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center scroll-reveal">
          <p className="font-ui text-[10px] tracking-[0.45em] uppercase text-gold/70 mb-8">The Kemet Promise</p>
          <h2 className="font-display text-5xl md:text-7xl text-parchment leading-none mb-10">
            Every stitch<br />tells a story.
          </h2>
          <div className="h-px w-20 bg-gold mx-auto mb-10" />
          <p className="font-serif italic text-tan text-lg md:text-xl max-w-[520px] mx-auto leading-relaxed">
            We source the finest full-grain leather and finish each piece by hand — no shortcuts, no compromises.
          </p>

          <div className="mt-16 grid grid-cols-3 gap-px bg-white/5 max-w-xl mx-auto">
            {[
              { stat: "100%", label: "Full-grain leather" },
              { stat: "0",    label: "Shortcuts taken" },
              { stat: "∞",    label: "Year guarantee" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-void py-8 px-4 text-center">
                <p className="font-display text-4xl text-gold mb-2">{stat}</p>
                <p className="font-ui text-[9px] tracking-[0.25em] uppercase text-tan/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
