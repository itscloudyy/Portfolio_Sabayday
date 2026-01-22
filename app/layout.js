import "./globals.css";

export const metadata = {
  title: "My Future-Proof Portfolio",
  description: "A portfolio built with Next.js and Vercel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
