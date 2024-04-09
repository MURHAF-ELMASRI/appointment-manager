"use client";
import { Link } from "@/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import SignWithGoogleButton from "./SignWithGoogleButton";

export default function LoginForm() {
  const t = useTranslations("auth");

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        {/* <CardDescription>{t("login_subTitle")}</CardDescription> */}
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          {/* <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div> */}
          <Button
            onClick={() => signIn("email", { callbackUrl: "/" })}
            className="w-full"
          >
            {t("login")}
          </Button>
          <SignWithGoogleButton
            label={t("sigin_with_google")}
          ></SignWithGoogleButton>
        </div>
        <div className="mt-4 text-center text-sm">
          {t("dont_have_account")}
          <Link href="/register" className="ml-1 underline">
            {t("sign_up")}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
