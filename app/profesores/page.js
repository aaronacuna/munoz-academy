import Link from "next/link";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import styles from "./profesores.module.css";

export const metadata = {
  title: "Profesores — Muñoz Academy",
  description:
    "Conoce al equipo de profesores detrás de la Academia Muñoz: tenis, pádel y pickleball.",
};

const BIO =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac orci dignissim, interdum velit vel consequat mauris.";

const coaches = [
  {
    name: "Mario Muñoz",
    role: "Director · Head Coach",
    initials: "MM",
    photoBg: "#1a4a2e",
    bio: BIO,
  },
  {
    name: "Eduardo Muñoz",
    role: "Profesor · Tennis Coach",
    initials: "EM",
    photoBg: "#2d7a4f",
    bio: BIO,
  },
  {
    name: "Aarón Acuña",
    role: "Profesor · Tennis Coach",
    initials: "AÑ",
    photoBg: "#1e3a2f",
    bio: BIO,
  },
  {
    name: "Únete al equipo",
    role: "Estamos creciendo",
    initials: "+",
    photoBg: "#c9a84c",
    bio: "¿Te apasiona el tennis o el pádel? Contáctanos para unirte a nuestro equipo de profesores.",
    cta: true,
  },
];

const stats = [
  { number: "15", suffix: "+", label: "Años de experiencia" },
  { number: "5", label: "Disciplinas" },
  { number: "200", suffix: "+", label: "Alumnos activos" },
  { number: "8", label: "Profesores" },
];

export default function ProfesoresPage() {
  return (
    <main>
      {/* Hero banner */}
      <section className={styles.hero}>
        <p className={styles.heroLabel}>El Equipo</p>
        <h1 className={styles.heroHeading}>Nuestros Profesores</h1>
        <p className={styles.heroSubtitle}>
          Conoce al equipo detrás de la Academia Muñoz
        </p>
      </section>

      {/* Coaches grid */}
      <section className={styles.coaches}>
        <div className={styles.grid}>
          {coaches.map(({ name, role, initials, photoBg, bio, cta }) => (
            <article key={name} className={styles.card}>
              <div className={styles.photo} style={{ background: photoBg }}>
                <span className={styles.initials} aria-hidden="true">
                  {initials}
                </span>
                <span className={styles.bar} />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.role}>{role}</p>
                <p className={styles.bio}>{bio}</p>
                {cta && (
                  <Link href="/contacto" className={styles.contactLink}>
                    Contáctanos →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className={styles.philosophy}>
        <div className={styles.philosophyText}>
          <p className={styles.philosophyLabel}>Nuestra Filosofía</p>
          <h2 className={styles.philosophyHeading}>
            Formamos personas, no solo <em>jugadores</em>
          </h2>
          <p className={styles.philosophyBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className={styles.philosophyBody}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className={styles.statsGrid}>
          {stats.map(({ number, suffix, label }) => (
            <div key={label} className={styles.statCard}>
              <p className={styles.statNumber}>
                {number}
                {suffix && <span className={styles.statSuffix}>{suffix}</span>}
              </p>
              <p className={styles.statLabel}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
