import { getTranslations } from "next-intl/server";
import { auth } from "@/auth";
import AccountDashboard from "./AccountDashboard";
import AuthForms from "./AuthForms";

export default async function AccountPage() {
  const [session, t] = await Promise.all([auth(), getTranslations("account")]);

  if (session?.user) {
    return <AccountDashboard user={session.user} />;
  }

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md">
        <h1 className="font-display text-5xl text-ink text-center mb-10">{t("title")}</h1>
        <AuthForms />
      </div>
    </div>
  );
}
