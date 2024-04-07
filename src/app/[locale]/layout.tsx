import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Documentation",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body className={classNames(inter.className, "bg-black text-white")}>
        {children}
      </body>
    </html>
  );
}