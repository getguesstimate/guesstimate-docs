import type { Metadata } from "next";
import type { FC, ReactNode } from "react";

import { Footer as ThemeFooter, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";

import "nextra-theme-docs/style.css";
import "../src/styles/main.css";

import { Analytics } from "@vercel/analytics/react";

import { Footer } from "../src/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://docs.getguesstimate.com"),
  title: {
    default: "Guesstimate",
    template: "%s | Guesstimate",
  },
};

const navbar = (
  <Navbar
    logo={<b>Guesstimate Documentation</b>}
    projectLink="https://github.com/getguesstimate/guesstimate-app"
  />
);

const RootLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  const pageMap = await getPageMap();
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/getguesstimate/guesstimate-docs"
          darkMode={false}
          nextThemes={{ forcedTheme: "light" }}
          footer={
            <ThemeFooter>
              <Footer />
            </ThemeFooter>
          }
        >
          {children}
          <Analytics />
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
