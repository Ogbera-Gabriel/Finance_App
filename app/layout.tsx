import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/providers/query-provider";
import { SheetProvider } from "@/providers/sheet-provider";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/providers/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finance App - Track Expenses, Budget, and Manage Finances",
  description: "Take control of your finances with our comprehensive budgeting app. Easily track expenses, set budget goals, and monitor your financial health. Start managing your money smarter today!",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}> 
          <QueryProvider>
            <SheetProvider />
            <Toaster />
            <ThemeProvider
              attribute="class"
              enableSystem
              defaultTheme="light"
              disableTransitionOnChange
              storageKey="theme"
            >
            {children}
            <Analytics />
            </ThemeProvider>
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
