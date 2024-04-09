"use client";
import { signOut, useSession } from "next-auth/react";
import { Link, useRouter } from "@/navigation";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Header() {
  const { status } = useSession();
  const t = useTranslations("auth");
  const router = useRouter();
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Appointment Manager</h1>
      <div>
        {status === "authenticated" ? (
          <Button onClick={() => signOut()}>{t("sign_out")}</Button>
        ) : (
          <Button onClick={() => router.push("/login")} className="btn">
            {t("sign_in")}
          </Button>
        )}
      </div>
    </header>
  );
}
