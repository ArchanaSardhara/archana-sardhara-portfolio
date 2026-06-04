import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Archana Sardhara",
  description: "Senior Full Stack Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
