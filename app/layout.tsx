import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

export const metadata: Metadata = {
  title: "Pham Quoc Hung (GTRe5) - Data Enthusiast",
  icons: {
    icon : "/images/favicon.ico"
  },
  description:
    "Portfolio of Hung Pham - Data Analyst & BI Developer turning raw data into actionable insights.",
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
    title: "Pham Quoc Hung (GTRe5) - Data Enthusiast",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Apply any stored theme before paint, so there's no flash of the wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='light'){document.documentElement.classList.add('light');document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="noise">
        <div className="scan-line" />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}