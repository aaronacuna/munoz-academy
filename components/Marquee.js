import styles from "./Marquee.module.css";

const items = [
  "Tennis",
  "Pádel",
  "Pickleball",
  "Clases para Adultos",
  "Clases para Niños",
  "Silla de Ruedas",
];

/**
 * One full set of items, each followed by a diamond separator so that
 * consecutive sets butt up against each other with no gap.
 */
function Group({ hidden }) {
  return (
    <div className={styles.group} aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span key={item} className={styles.item}>
          <span>{item}</span>
          <span className={styles.diamond}>◆</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        <Group />
        {/* Duplicate set makes the -50% loop seamless */}
        <Group hidden />
      </div>
    </div>
  );
}
