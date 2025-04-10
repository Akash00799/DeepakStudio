import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import FooterClient from "@/components/footer-client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Deepak-studio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} scroll-smooth`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />

          <main className="min-h-screen">{children}</main>

          <FooterClient />
        </ThemeProvider>
      </body>
    </html>
  );
}
