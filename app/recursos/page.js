import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import { getRecursos } from "../../lib/sanity";
import { urlFor } from "../../lib/sanityImage";
import styles from "./recursos.module.css";

export const metadata = {
  title: "Recursos — Muñoz Academy",
  description: "Galería de fotos y videos de la Academia Muñoz.",
};

export default async function RecursosPage() {
  const recursos = await getRecursos();
  const fotos = recursos.filter((r) => r.type === "photo");
  const videos = recursos.filter((r) => r.type === "video");

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

        {fotos.length === 0 ? (
          <p className={styles.empty}>Las fotos aparecerán aquí pronto</p>
        ) : (
          <div className={styles.photoGrid}>
            {fotos.map((foto) => (
              <figure key={foto._id} className={styles.photoCard}>
                {foto.photo && (
                  <img
                    className={styles.photo}
                    src={urlFor(foto.photo).width(600).url()}
                    alt={foto.title || ""}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                )}
                <figcaption className={styles.photoOverlay}>
                  <span className={styles.photoCategoria}>{foto.categoria}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </section>

      {/* Video gallery */}
      <section className={styles.videos}>
        <p className={styles.sectionLabel}>Multimedia</p>
        <h2 className={styles.sectionHeading}>Videos</h2>

        {videos.length === 0 ? (
          <p className={styles.empty}>Los videos aparecerán aquí pronto</p>
        ) : (
          <div className={styles.videoGrid}>
            {videos.map((video) => (
              <article key={video._id} className={styles.videoCard}>
                <iframe
                  className={styles.videoFrame}
                  width="100%"
                  height="250"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className={styles.videoInfo}>
                  <h3 className={styles.videoTitle}>{video.title}</h3>
                  {video.categoria && (
                    <p className={styles.videoDesc}>{video.categoria}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
