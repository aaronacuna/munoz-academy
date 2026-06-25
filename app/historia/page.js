import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import styles from "./historia.module.css";

export const metadata = {
  title: "Historia — Muñoz Academy",
  description:
    "La historia detrás de la Academia Muñoz: más de una década formando campeones en tenis, pádel y pickleball.",
};

const values = [
  {
    number: "01",
    title: "Excelencia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Buscamos la mejora constante en cada entrenamiento, cuidando el detalle técnico y el desarrollo integral de cada alumno.",
  },
  {
    number: "02",
    title: "Inclusión",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Abrimos las puertas a todas las edades y niveles, incluyendo programas de tenis en silla de ruedas.",
  },
  {
    number: "03",
    title: "Comunidad",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Creamos un entorno donde alumnos, familias y profesores comparten la pasión por el deporte.",
  },
];

export default function HistoriaPage() {
  return (
    <main>
      {/* Hero banner */}
      <section className={styles.hero}>
        <p className={styles.heroLabel}>Nuestra Historia</p>
        <h1 className={styles.heroHeading}>
          La historia detrás de la Academia
        </h1>
      </section>

      {/* Main content — text + image placeholder */}
      <section className={styles.content}>
        <div className={styles.contentText}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </div>
        <div className={styles.contentImage}>
          <span>Foto de la Academia</span>
        </div>
      </section>

      {/* Values / philosophy */}
      <section className={styles.values}>
        <p className={styles.valuesLabel}>Nuestra Filosofía</p>
        <h2 className={styles.valuesHeading}>Nuestros Valores</h2>
        <div className={styles.valuesGrid}>
          {values.map(({ number, title, description }) => (
            <article key={number} className={styles.valueCard}>
              <span className={styles.valueNumber}>{number}</span>
              <h3 className={styles.valueTitle}>{title}</h3>
              <p className={styles.valueDescription}>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
