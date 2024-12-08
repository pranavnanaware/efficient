import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
  title: {
    // write a default title for Efficient a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
    default: "Efficient - The 21st century entertainment everything bundle",
    template: `%s | Efficient`,
  },
  description: "",
  icons: {
    icon: [
      {
        url: "/icons/favicon.ico",
        href: "/icons/favicon.ico",
      },
    ],
  },
  openGraph: {
    title: "Efficient - The 21st century entertainment everything bundle",

    images: [
      {
        url: "/logo.svg",
      },
    ],
  },

  metadataBase: new URL("https://efficient-beta.vercel.app"),
};
