import "@/styles/globals.css";
import "@/styles/colors.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { ThemeProvider } from "@/components/utility/theme-provider";
import { ScreenSize } from "@/components/utility/screen-size";
import { ThemeHotkey } from "@/components/utility/theme-hotkey";

export const metadata: Metadata = {
  title: "Monument",
  description: "Monuments of Peace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScreenSize />
          <ThemeHotkey />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
