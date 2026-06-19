import styles from "./About.module.css";

const stats = [
  { number: "15", suffix: "+", label: "Años activos" },
  { number: "5", suffix: "", label: "Disciplinas" },
  { number: "200", suffix: "+", label: "Alumnos" },
  { number: "8", suffix: "", label: "Profesores" },
];

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <p className={styles.label}>Nuestra Historia</p>
        <h2 className={styles.heading}>
          Más de una década <em>formando</em> campeones
        </h2>
        <p className={styles.body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <blockquote className={styles.quote}>
          <p className={styles.quoteText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
            minim veniam, quis nostrud exercitation.
          </p>
          <cite className={styles.citation}>— Fundador, Academia Muñoz</cite>
        </blockquote>
      </div>

      <div className={styles.right}>
        {stats.map(({ number, suffix, label }) => (
          <div key={label} className={styles.card}>
            <p className={styles.number}>
              {number}
              {suffix && <span className={styles.suffix}>{suffix}</span>}
            </p>
            <p className={styles.cardLabel}>{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
