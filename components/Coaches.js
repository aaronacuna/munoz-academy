import Link from "next/link";
import styles from "./Coaches.module.css";

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
];

export default function Coaches() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <div>
          <p className={styles.label}>El equipo</p>
          <h2 className={styles.heading}>
            Nuestros <em>Profesores</em>
          </h2>
        </div>
        <Link href="/profesores" className={styles.seeAll}>
          Ver todos →
        </Link>
      </header>

      <div className={styles.grid}>
        {coaches.map(({ name, role, initials, photoBg, bio }) => (
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
