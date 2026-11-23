import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asim Momin | Full-Stack Developer (Applied AI)",
  description:
    "Fresher full-stack developer. Next.js, TypeScript, PostgreSQL, Supabase and practical AI features. Open to startup roles.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/icon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
