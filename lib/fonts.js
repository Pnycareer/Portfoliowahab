import { Fraunces, Inter } from "next/font/google";

export const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
