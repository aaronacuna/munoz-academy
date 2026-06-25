import Image from "next/image";
import Link from "next/link";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import styles from "./programas.module.css";

export const metadata = {
  title: "Programas — Muñoz Academy",
  description:
    "Nuestros programas de tenis, pádel y pickleball. Encuentra el programa perfecto para ti.",
};

const PARAGRAPH_ONE =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";

const PARAGRAPH_TWO =
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.";

const programs = [
  { number: "01", title: "Clases para Adultos", icon: "/images/tennis__1_.png" },
  { number: "02", title: "Clases para Niños", icon: "/images/tennis-ball.png" },
  {
    number: "03",
    title: "Tennis en Silla de Ruedas",
    icon: "/images/wheelchair-tennis.png",
  },
  { number: "04", title: "Clases de Pádel", icon: "/images/padel.png" },
  { number: "05", title: "Clases de Pickleball", icon: "/images/pickleball.png" },
];

export default function ProgramasPage() {
  return (
    <main>
      {/* Hero banner */}
      <section className={styles.hero}>
        <p className={styles.heroLabel}>Lo que ofrecemos</p>
        <h1 className={styles.heroHeading}>Nuestros Programas</h1>
        <p className={styles.heroSubtitle}>
          Encuentra el programa perfecto para ti
        </p>
      </section>

      {/* Program detail rows */}
      <section className={styles.programs}>
        {programs.map(({ number, title, icon }) => (
          <article key={number} className={styles.row}>
            <div className={styles.iconBox}>
              <Image
                className={styles.icon}
                src={icon}
                alt=""
                width={96}
                height={96}
              />
            </div>
            <div className={styles.text}>
              <p className={styles.programLabel}>{number}</p>
              <h2 className={styles.programTitle}>{title}</h2>
              <p className={styles.programBody}>{PARAGRAPH_ONE}</p>
              <p className={styles.programBody}>{PARAGRAPH_TWO}</p>
              <Link href="/contacto" className={styles.programLink}>
                Más información →
              </Link>
            </div>
          </article>
        ))}
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
