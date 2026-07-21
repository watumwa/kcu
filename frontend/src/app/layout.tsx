import type { Metadata } from "next";
import FloatingApplyButton from "@/components/common/FloatingApplyButton";
import TawkWidget from "@/components/integrations/TawkWidget";
import "./globals.css";

export const metadata: Metadata = {
  title: "King Ceasor University",
  description: "Official King Ceasor University website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingApplyButton />
        <TawkWidget />
      </body>
    </html>
  );
}
