"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Header() {
  const { status } = useSession();
  const router = useRouter();
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Appointment Manager</h1>
      <div>
        {status === "authenticated" ? (
          <button className="btn">Logout</button>
        ) : (
          <button onClick={() => router.push("/register")} className="btn">
            Login
          </button>
        )}
      </div>
    </header>
  );
}
