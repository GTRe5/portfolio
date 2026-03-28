import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pham Quoc Hung (GTRe5) — Data Enthusiast",
  description:
    "Portfolio of Hung Pham — Data Analyst & BI Developer turning raw data into actionable insights.",
  keywords: [
    "Data Analyst",
    "Business Intelligence",
    "SQL",
    "Python",
    "Power BI",
    "Tableau",
    "Data Science",
  ],
  openGraph: {
    title: "Pham Quoc Hung (GTRe5) — Data Enthusiast",
    description: "Turning raw data into actionable insights.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="noise">
        <div className="scan-line" />
        {children}
      </body>
    </html>
  );
}
