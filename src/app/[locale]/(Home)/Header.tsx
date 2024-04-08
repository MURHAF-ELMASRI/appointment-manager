"use client";
import { useSession } from "next-auth/react";
import { Link } from "@/navigation";

export default function Header() {
  const { status } = useSession();
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Appointment Manager</h1>
      <div>
        {status === "authenticated" ? (
          <button className="btn">Logout</button>
        ) : (
          <Link href="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
