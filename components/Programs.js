import Link from "next/link";
import { getPrograms } from "../lib/sanity";
import { urlFor } from "../lib/sanityImage";
import styles from "./Programs.module.css";

const DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac orci dignissim, interdum velit vel.";

const WHATSAPP_BASE = "https://wa.me/50683166300";
const WHATSAPP_PROGRAMS_GENERAL =
  `${WHATSAPP_BASE}?text=Hola%2C%20me%20gustaría%20conocer%20más%20sobre%20los%20programas%20de%20Muñoz%20Academy`;

// Map a program title to its pre-filled WhatsApp message. Matches by keyword so
// it works for both the Sanity titles and the hardcoded fallback titles.
function whatsappForProgram(title = "") {
  const t = title.toLowerCase();
  if (t.includes("niñ") || t.includes("nin"))
    return `${WHATSAPP_BASE}?text=Hola%2C%20me%20interesa%20la%20clase%20para%20Niños`;
  if (t.includes("silla"))
    return `${WHATSAPP_BASE}?text=Hola%2C%20me%20interesa%20el%20programa%20de%20Tennis%20en%20Silla%20de%20Ruedas`;
  if (t.includes("pádel") || t.includes("padel"))
    return `${WHATSAPP_BASE}?text=Hola%2C%20me%20interesa%20la%20clase%20de%20Pádel`;
  if (t.includes("pickleball"))
    return `${WHATSAPP_BASE}?text=Hola%2C%20me%20interesa%20la%20clase%20de%20Pickleball`;
  if (t.includes("adult"))
    return `${WHATSAPP_BASE}?text=Hola%2C%20me%20interesa%20la%20clase%20para%20Adultos`;
  return WHATSAPP_PROGRAMS_GENERAL;
}

// Local icon files, ordered to match the program ordering in PROJECT.md.
const fallbackIcons = [
  "/images/tennis__1_.png",
  "/images/tennis-ball.png",
  "/images/wheelchair-tennis.png",
  "/images/padel.png",
  "/images/pickleball.png",
];

// Used until programs are added in Sanity, so the grid never renders empty.
const fallbackPrograms = [
  { title: "Clases para Adultos" },
  { title: "Clases para Niños" },
  { title: "Tennis en Silla de Ruedas" },
  { title: "Clases de Pádel" },
  { title: "Clases de Pickleball" },
];

export default async function Programs() {
  const data = await getPrograms();
  const programs = data && data.length ? data : fallbackPrograms;

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
        {programs.map((program, i) => {
          // Sanity `order` is 1-based; fall back to the local icon by position.
          const fallbackIndex =
            (typeof program.order === "number" ? program.order - 1 : i) %
            fallbackIcons.length;
          const iconSrc = program.icon
            ? urlFor(program.icon).width(96).url()
            : fallbackIcons[fallbackIndex];

          return (
            <article key={program._id || program.title} className={styles.card}>
              <img
                className={styles.icon}
                src={iconSrc}
                alt=""
                width={48}
                height={48}
              />
              <h3 className={styles.cardTitle}>{program.title}</h3>
              <p className={styles.cardDesc}>{program.description || DESCRIPTION}</p>
              <a
                href={whatsappForProgram(program.title)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                Más información →
              </a>
            </article>
          );
        })}

        <article className={styles.quoteCard}>
          <p className={styles.quote}>
            El deporte es la mejor inversión que puedes hacer en ti mismo.
          </p>
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.quoteButton}
          >
            Contáctanos
          </a>
        </article>
      </div>
    </section>
  );
}
