import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import classNames from "classnames";
import ThemeProvider from "./(tacklbox)/context/theme-provider";

const monts = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Home | TACKLBOX",
    template: "%s | TACKLBOX",
  },
  description: "We offer quality USA made peptides of the highest purity.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames({
          [monts.className]: true,
        })}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
