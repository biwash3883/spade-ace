import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SpadeAce",
  description:
    "SpadeAce, an innovative company rooted in the picturesque landscapes of Nepal, is expanding its presence to the vibrant city of Melbourne, Australia. Specializing in the flourishing hospitality and entertainment industry, SpadeAce is dedicated to establishing cutting-edge gambling and pokies restaurants and bars. Our unique fusion of Nepalese hospitality and Australian vibrancy promises an unparalleled experience, catering to patrons seeking a seamless blend of entertainment and leisure. From the majestic Himalayan peaks to the bustling streets of Melbourne, SpadeAce would like to introduces a world-class standard to the gambling and hospitality sector, creating an unforgettable atmosphere for both locals and visitors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
