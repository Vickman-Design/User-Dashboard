import "./globals.css";
import type { ReactNode } from "react";
import ClientLayout from "@/components/layout/ClientLayout";

export const metadata = {
  title: "BuyOne Dashboard",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Wrap all page content with ClientLayout for responsive sidebar and navbar */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
