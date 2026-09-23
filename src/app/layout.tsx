import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Next App",
  description: "My Next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="bg-red-500 p-4">
          <p>Header</p>
        </header>

        {children}

        <footer className="bg-blue-500 p-4">
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}