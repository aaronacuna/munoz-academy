import Image from "next/image";
import Link from "next/link";
import styles from "./tienda.module.css";

export const metadata = {
  title: "Tienda — Muñoz Academy",
  description:
    "Próximamente: equipamiento y accesorios de tennis, pádel y pickleball de las mejores marcas.",
};

export default function TiendaPage() {
  return (
    <main className={styles.page}>
      <Image
        className={styles.logo}
        src="/images/Green_Bold_Modern_Tennis_Club_Logo.png"
        alt="Muñoz Academy"
        width={400}
        height={400}
        priority
      />

      <p className={styles.label}>Próximamente</p>
      <h1 className={styles.heading}>Nuestra Tienda</h1>

      <p className={styles.body}>
        Estamos preparando algo especial para ti. Pronto podrás adquirir
        equipamiento y accesorios de tennis, pádel y pickleball de las mejores
        marcas.
      </p>

      <span className={styles.divider} />

      <a
        href="https://wa.me/50683166300?text=Hola%2C%20me%20gustaría%20saber%20cuándo%20estará%20lista%20la%20tienda"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.notify}
      >
        Avísame cuando esté lista →
      </a>

      <Link href="/" className={styles.back}>
        ← Volver al inicio
      </Link>
    </main>
  );
}
