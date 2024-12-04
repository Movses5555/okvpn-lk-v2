import 'reset-css';
import "@/app/globals.css"
import { Inter } from "next/font/google";

import type { Metadata } from "next";
import StyledComponentsRegistry from "@/app/libs/registery";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OKVPN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
