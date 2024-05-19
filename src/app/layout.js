import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./auth-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Search BD News | Home",
  description: "Search BD News",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className} style={{ backgroundColor: "#EFF3F6" }}>
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}