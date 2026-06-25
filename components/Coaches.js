import Link from "next/link";
import { getCoaches } from "../lib/sanity";
import { urlFor } from "../lib/sanityImage";
import styles from "./Coaches.module.css";

const BIO =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac orci dignissim, interdum velit vel consequat mauris.";

// Used until coaches are added in Sanity, so the section never renders empty.
const fallbackCoaches = [
  { name: "Mario Muñoz", role: "Director · Head Coach", bio: BIO },
  { name: "Eduardo Muñoz", role: "Profesor · Tennis Coach", bio: BIO },
  { name: "Aarón Acuña", role: "Profesor · Tennis Coach", bio: BIO },
];

const photoBgs = ["#1a4a2e", "#2d7a4f", "#1e3a2f"];

function initialsFrom(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default async function Coaches() {
  const data = await getCoaches();
  const coaches = data && data.length ? data : fallbackCoaches;

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
        {coaches.map((coach, i) => {
          const photoUrl = coach.photo
            ? urlFor(coach.photo).width(400).height(280).url()
            : null;
          const bio = coach.bio || BIO;
          const photoBg = photoBgs[i % photoBgs.length];

          return (
            <article key={coach._id || coach.name} className={styles.card}>
              <div className={styles.photo} style={{ background: photoBg }}>
                {photoUrl ? (
                  <img
                    src={photoUrl}
                    alt={coach.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <span className={styles.initials} aria-hidden="true">
                    {initialsFrom(coach.name)}
                  </span>
                )}
                <span className={styles.bar} />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{coach.name}</h3>
                <p className={styles.role}>{coach.role}</p>
                <p className={styles.bio}>{bio}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
