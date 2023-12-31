import "./globals.css";
import type { Metadata } from "next";
import Providers from "@/utils/provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-[100vw] h-[100vh] flex justify-center items-center">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
