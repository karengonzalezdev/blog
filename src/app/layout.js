import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://karenfggutierrez.github.io/blog"),

  openGraph: {
    title: "Technology blog",
    description: "Karen Gonzalez blog",
    images: [
      {
        url: "https://raw.githubusercontent.com/karenfggutierrez/Images/main/TechnologyBlog.PNG",
        width: 800,
        heigh: 600,
        alt: "blog"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
