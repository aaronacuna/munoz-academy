import Image from "next/image";
import Link from "next/link";
import styles from "./Programs.module.css";

const DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac orci dignissim, interdum velit vel.";

const programs = [
  { title: "Clases para Adultos", icon: "/images/tennis__1_.png" },
  { title: "Clases para Niños", icon: "/images/tennis-ball.png" },
  { title: "Tennis en Silla de Ruedas", icon: "/images/wheelchair-tennis.png" },
  { title: "Clases de Pádel", icon: "/images/padel.png" },
  { title: "Clases de Pickleball", icon: "/images/pickleball.png" },
];

export default function Programs() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <div>
          <p className={styles.label}>Lo que ofrecemos</p>
          <h2 className={styles.heading}>
            Nuestros <em>Programas</em>
          </h2>
        </div>
        <Link href="/programas" className={styles.seeAll}>
          Ver todos →
        </Link>
      </header>

      <div className={styles.grid}>
        {programs.map(({ title, icon }) => (
          <article key={title} className={styles.card}>
            <Image
              className={styles.icon}
              src={icon}
              alt=""
              width={48}
              height={48}
            />
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{DESCRIPTION}</p>
            <Link href="/programas" className={styles.cardLink}>
              Más información →
            </Link>
          </article>
        ))}

        <article className={styles.quoteCard}>
          <p className={styles.quote}>
            El deporte es la mejor inversión que puedes hacer en ti mismo.
          </p>
          <Link href="/contacto" className={styles.quoteButton}>
            Contáctanos
          </Link>
        </article>
      </div>
    </section>
  );
}
