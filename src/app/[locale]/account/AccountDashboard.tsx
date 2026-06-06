"use client";

import { useTranslations } from "next-intl";
import { signOut } from "next-auth/react";
import { User } from "next-auth";
import { Link } from "@/i18n/navigation";
import { Package, LogOut, User as UserIcon } from "lucide-react";

export default function AccountDashboard({ user }: { user: User }) {
  const t = useTranslations("account");

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="flex items-center justify-between mb-12">
        <div>
          <p className="font-ui text-[10px] tracking-widest uppercase text-tan mb-2">{t("welcome")}</p>
          <h1 className="font-display text-5xl text-ink">{user.name ?? user.email}</h1>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/en/account" })}
          className="flex items-center gap-2 font-ui text-xs tracking-widest uppercase text-tan hover:text-ink transition-colors border border-tan px-6 py-3 hover:border-ink"
        >
          <LogOut size={13} />
          {t("signOut")}
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <DashCard icon={<Package size={22} />} label={t("orders")} href="/account/orders" />
        <DashCard icon={<UserIcon size={22} />} label={t("profile")} href="/account/profile" />
      </div>

      <div className="bg-parchment rounded p-8">
        <h2 className="font-ui text-[10px] tracking-widest uppercase text-tan mb-6">{t("orders")}</h2>
        <p className="font-serif italic text-tan text-sm">
          You have no orders yet.{" "}
          <Link href="/shop" className="underline text-ink">Start shopping →</Link>
        </p>
      </div>
    </div>
  );
}

function DashCard({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-4 p-8 bg-white border border-parchment hover:border-tan transition-colors text-center group"
    >
      <span className="text-tan group-hover:text-ink transition-colors">{icon}</span>
      <span className="font-ui text-xs tracking-widest uppercase text-tan group-hover:text-ink transition-colors">{label}</span>
    </Link>
  );
}
