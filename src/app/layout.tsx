import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aravind Kontham | Azure & .NET Backend Engineer | Capgemini",
  description:
    "Portfolio of Aravind Kontham - Azure & .NET Software Engineer at Capgemini specializing in ASP.NET Core, Microservices, Azure Serverless (Functions, Logic Apps), Service Bus, APIM, and ADF.",
  keywords: [
    "Aravind Kontham",
    "Azure Developer",
    ".NET Developer",
    "ASP.NET Core",
    "Capgemini Software Engineer",
    "Microservices",
    "Azure Data Factory",
    "Azure API Management",
    "C# Developer",
    "Backend Engineer",
  ],
  authors: [{ name: "Aravind Kontham", url: "https://github.com/aravindkontham" }],
  openGraph: {
    title: "Aravind Kontham | Azure & .NET Backend Engineer",
    description:
      "Explore enterprise projects, cloud architectures, Microsoft certifications, and technical proficiencies.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#080c14] text-slate-100 antialiased min-h-screen selection:bg-cyan-500/20 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
