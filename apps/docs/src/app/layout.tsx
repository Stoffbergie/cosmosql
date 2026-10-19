import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import {
  JetBrains_Mono,
  Martian_Mono,
  Schibsted_Grotesk,
} from "next/font/google";
import { TAGLINE } from "@/lib/site";
import "./global.css";

const displayFont = Martian_Mono({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-martian",
});

const bodyFont = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

const codeFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cosmosql.dev"),
  title: {
    default: `CosmosQL · ${TAGLINE}`,
    template: "%s | CosmosQL",
  },
  description: TAGLINE,
  openGraph: {
    siteName: "CosmosQL",
    type: "website",
    description: TAGLINE,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  const fontVariables = [
    displayFont.variable,
    bodyFont.variable,
    codeFont.variable,
  ].join(" ");

  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col font-sans">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
