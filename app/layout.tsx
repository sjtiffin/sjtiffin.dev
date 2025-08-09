import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sara Tiffin - Software Engineer",
  description: "A portfolio website about Sara Tiffin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="px-96 pt-16">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className="flex items-center space-x-2 mb-16 left-0">
              <Button className="max-w-xs">
                <Link href="/">Home</Link>
              </Button>
              <Button variant="default" className="max-w-xs">
                <Link href="/projects">Projects</Link>
              </Button>
              <Button size="icon">
                <a href="https://github.com/sjtiffin" target="_blank">
                  <Github />
                </a>
              </Button>
              <Button size="icon">
                <a href="https://linkedin.com/in/sarajtiffin" target="_blank">
                  <Linkedin />
                </a>
              </Button>
              <ThemeSwitcher />
              <Avatar className="ml-auto w-36 h-36">
                <AvatarImage src="/me.jpg" />
                <AvatarFallback>ST</AvatarFallback>
              </Avatar>
            </header>
            <div>{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
