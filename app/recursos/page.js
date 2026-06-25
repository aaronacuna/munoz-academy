import Image from "next/image";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import { fotos, videos } from "../../data/recursos";
import styles from "./recursos.module.css";

export const metadata = {
  title: "Recursos — Muñoz Academy",
  description: "Galería de fotos y videos de la Academia Muñoz.",
};

export default function RecursosPage() {
  return (
    <main>
      {/* Hero banner */}
      <section className={styles.hero}>
        <p className={styles.heroLabel}>Recursos</p>
        <h1 className={styles.heroHeading}>Galería y Videos</h1>
        <p className={styles.heroSubtitle}>
          Momentos y contenido de la Academia Muñoz
        </p>
      </section>

      {/* Photo gallery */}
      <section className={styles.gallery}>
        <p className={styles.sectionLabel}>Galería</p>
        <h2 className={styles.sectionHeading}>Galería de Fotos</h2>

        <div className={styles.photoGrid}>
          {fotos.map(({ id, src, alt, categoria }) => (
            <figure key={id} className={styles.photoCard}>
              <Image
                className={styles.photo}
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <figcaption className={styles.photoOverlay}>
                <span className={styles.photoCategoria}>{categoria}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Video gallery */}
      <section className={styles.videos}>
        <p className={styles.sectionLabel}>Multimedia</p>
        <h2 className={styles.sectionHeading}>Videos</h2>

        <div className={styles.videoGrid}>
          {videos.map(({ id, youtubeId, titulo, descripcion }) => (
            <article key={id} className={styles.videoCard}>
              <iframe
                className={styles.videoFrame}
                width="100%"
                height="250"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={titulo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className={styles.videoInfo}>
                <h3 className={styles.videoTitle}>{titulo}</h3>
                <p className={styles.videoDesc}>{descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
