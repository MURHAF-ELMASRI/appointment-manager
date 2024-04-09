"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function CreateAccountButton({ label }: { label: string }) {
  return (
    <Button
      type="submit"
      className="w-full"
      onClick={() => signIn("email", { callbackUrl: "/" })}
    >
      {label}
    </Button>
  );
}
