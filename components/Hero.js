import Link from "next/link";
import styles from "./Hero.module.css";

/**
 * Decorative tennis court — drawn as a top-down outline.
 * Purely ornamental, so it's hidden from assistive tech.
 */
function TennisCourt() {
  return (
    <svg
      className={styles.court}
      viewBox="0 0 400 800"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <g
        fill="none"
        stroke="#f5f0e8"
        strokeWidth="2"
        strokeLinecap="square"
      >
        {/* Outer boundary (doubles lines) */}
        <rect x="40" y="40" width="320" height="720" />
        {/* Singles sidelines */}
        <line x1="80" y1="40" x2="80" y2="760" />
        <line x1="320" y1="40" x2="320" y2="760" />
        {/* Net line across the middle */}
        <line x1="40" y1="400" x2="360" y2="400" />
        {/* Service lines */}
        <line x1="80" y1="250" x2="320" y2="250" />
        <line x1="80" y1="550" x2="320" y2="550" />
        {/* Center service line */}
        <line x1="200" y1="250" x2="200" y2="550" />
        {/* Baseline center marks */}
        <line x1="200" y1="40" x2="200" y2="58" />
        <line x1="200" y1="742" x2="200" y2="760" />
      </g>
    </svg>
  );
}

const stats = [
  { number: "15+", label: "Años de experiencia" },
  { number: "5", label: "Disciplinas" },
  { number: "200+", label: "Alumnos activos" },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <p className={styles.eyebrow}>Bienvenidos a la Academia</p>
        <h1 className={styles.title}>
          Eleva tu <em>juego</em> al siguiente nivel
        </h1>
        <p className={styles.subtitle}>Tennis · Pádel · Pickleball</p>
        <p className={styles.body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation.
        </p>
        <div className={styles.buttons}>
          <Link href="/programas" className={styles.btnPrimary}>
            Ver Programas
          </Link>
          <Link href="/historia" className={styles.btnOutline}>
            Nuestra Historia
          </Link>
        </div>
      </div>

      <div className={styles.right}>
        <TennisCourt />
        <div className={styles.stats}>
          {stats.map(({ number, label }) => (
            <div key={label} className={styles.pill}>
              <span className={styles.pillNumber}>{number}</span>
              <span className={styles.pillLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
