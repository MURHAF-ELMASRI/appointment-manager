"use client";
import { SessionProvider } from "next-auth/react";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export async function Providers({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const timeZone = "Europe/Vienna";
  return (
    <SessionProvider>
      <NextIntlClientProvider
        timeZone={timeZone}
        messages={messages}
        locale={locale}
      >
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </NextThemesProvider>
      </NextIntlClientProvider>
    </SessionProvider>
  );
}
