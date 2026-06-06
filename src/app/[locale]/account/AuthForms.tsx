"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { signIn } from "next-auth/react";
import { signUp } from "@/lib/actions/auth";
import { Loader2 } from "lucide-react";

export default function AuthForms() {
  const t = useTranslations("account");
  const [tab, setTab] = useState<"signin" | "signup">("signin");

  return (
    <div className="bg-white border border-parchment rounded-sm shadow-sm overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-parchment">
        <button
          onClick={() => setTab("signin")}
          className={`flex-1 py-4 font-ui text-xs tracking-widest uppercase transition-colors ${
            tab === "signin" ? "text-ink border-b-2 border-ink bg-white" : "text-tan hover:text-ink bg-parchment/40"
          }`}
        >
          {t("signIn")}
        </button>
        <button
          onClick={() => setTab("signup")}
          className={`flex-1 py-4 font-ui text-xs tracking-widest uppercase transition-colors ${
            tab === "signup" ? "text-ink border-b-2 border-ink bg-white" : "text-tan hover:text-ink bg-parchment/40"
          }`}
        >
          {t("signUp")}
        </button>
      </div>

      <div className="p-8">
        {tab === "signin" ? (
          <SignInForm t={t} onSwitch={() => setTab("signup")} />
        ) : (
          <SignUpForm t={t} onSwitch={() => setTab("signin")} />
        )}
      </div>
    </div>
  );
}

function SignInForm({
  t,
  onSwitch,
}: {
  t: ReturnType<typeof useTranslations>;
  onSwitch: () => void;
}) {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState<string | null>(null);
  const [loading, setLoading]   = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);
    if (res?.error) {
      setError("Invalid email or password.");
    } else {
      window.location.reload();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block font-ui text-[11px] tracking-widest uppercase text-tan mb-2">
          {t("email")} <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="block w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-ink focus:outline-none focus:border-tan"
        />
      </div>

      <div>
        <label className="block font-ui text-[11px] tracking-widest uppercase text-tan mb-2">
          {t("password")} <span className="text-red-400">*</span>
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="block w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-ink focus:outline-none focus:border-tan"
        />
      </div>

      {error && <p className="text-sm text-red-500 font-ui">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-void text-parchment font-ui text-xs tracking-widest uppercase hover:bg-tan transition-colors disabled:opacity-60 flex items-center justify-center gap-2 mt-2"
      >
        {loading && <Loader2 size={13} className="animate-spin" />}
        {t("signIn")}
      </button>

      <p className="text-center font-ui text-xs text-tan pt-2">
        {t("noAccount")}{" "}
        <button type="button" onClick={onSwitch} className="text-ink underline underline-offset-2">
          {t("signUp")}
        </button>
      </p>
    </form>
  );
}

function SignUpForm({
  t,
  onSwitch,
}: {
  t: ReturnType<typeof useTranslations>;
  onSwitch: () => void;
}) {
  const [error, setError]     = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (formData.get("password") !== formData.get("confirmPassword")) {
      setError(t("passwordMismatch"));
      return;
    }
    setLoading(true);
    setError(null);
    const result = await signUp(formData);
    setLoading(false);
    if (result?.error) setError(result.error);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block font-ui text-[11px] tracking-widest uppercase text-tan mb-2">
          {t("name")} <span className="text-red-400">*</span>
        </label>
        <input
          name="name"
          type="text"
          required
          className="block w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-ink focus:outline-none focus:border-tan"
        />
      </div>

      <div>
        <label className="block font-ui text-[11px] tracking-widest uppercase text-tan mb-2">
          {t("email")} <span className="text-red-400">*</span>
        </label>
        <input
          name="email"
          type="email"
          required
          className="block w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-ink focus:outline-none focus:border-tan"
        />
      </div>

      <div>
        <label className="block font-ui text-[11px] tracking-widest uppercase text-tan mb-2">
          {t("password")} <span className="text-red-400">*</span>
        </label>
        <input
          name="password"
          type="password"
          required
          className="block w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-ink focus:outline-none focus:border-tan"
        />
      </div>

      <div>
        <label className="block font-ui text-[11px] tracking-widest uppercase text-tan mb-2">
          {t("confirmPassword")} <span className="text-red-400">*</span>
        </label>
        <input
          name="confirmPassword"
          type="password"
          required
          className="block w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-ink focus:outline-none focus:border-tan"
        />
      </div>

      {error && <p className="text-sm text-red-500 font-ui">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-void text-parchment font-ui text-xs tracking-widest uppercase hover:bg-tan transition-colors disabled:opacity-60 flex items-center justify-center gap-2 mt-2"
      >
        {loading && <Loader2 size={13} className="animate-spin" />}
        {t("signUp")}
      </button>

      <p className="text-center font-ui text-xs text-tan pt-2">
        {t("hasAccount")}{" "}
        <button type="button" onClick={onSwitch} className="text-ink underline underline-offset-2">
          {t("signIn")}
        </button>
      </p>
    </form>
  );
}
