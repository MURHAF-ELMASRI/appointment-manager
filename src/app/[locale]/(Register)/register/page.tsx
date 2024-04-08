"use client";
import { useCallback, useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { motion } from "framer-motion";

export default function Home() {
  const [isUserHasAccount, setHasAccount] = useState(false);

  const hasAccount = useCallback(() => {
    setHasAccount(true);
  }, []);
  const noAccount = useCallback(() => {
    setHasAccount(false);
  }, []);

  return (
    <main className="">
      {isUserHasAccount ? (
        <LoginForm noAccount={noAccount} />
      ) : (
        <SignupForm hasAccount={hasAccount} />
      )}
    </main>
  );
}
