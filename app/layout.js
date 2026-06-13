import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import LanguageBar from "../components/LanguageBar";
import Navbar from "../components/Navbar";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-jost",
});

export const metadata = {
  title: "Muñoz Academy — Tennis · Pádel · Pickleball",
  description:
    "Academia premium de tenis, pádel y pickleball. Eleva tu juego al siguiente nivel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <LanguageBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
