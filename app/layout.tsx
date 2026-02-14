import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Europe Inc — One Registration. Twenty-Seven Nations.",
  description:
    "Europe Inc helps companies incorporate across all 27 EU member states under the new EU Inc (28th regime) framework. One company, 27 countries, zero barriers.",
  keywords: [
    "EU Inc",
    "European incorporation",
    "28th regime",
    "pan-European company",
    "startup formation Europe",
    "EU company registration",
  ],
  openGraph: {
    title: "Europe Inc — One Registration. Twenty-Seven Nations.",
    description:
      "One company, 27 countries, zero barriers. Incorporate under the new EU Inc framework.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `requestAnimationFrame(()=>document.body.classList.add('js-ready'))`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
