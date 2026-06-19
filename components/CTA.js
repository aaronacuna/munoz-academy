import Link from "next/link";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>¿Listo para empezar?</p>
      <h2 className={styles.heading}>
        Únete a la <em>Academia Muñoz</em> hoy mismo
      </h2>
      <p className={styles.body}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contáctanos y
        te asesoraremos sobre el programa más adecuado.
      </p>
      <div className={styles.buttons}>
        <Link href="/programas" className={styles.btnSolid}>
          Ver Programas
        </Link>
        <Link href="/contacto" className={styles.btnOutline}>
          Contactar Ahora
        </Link>
      </div>
    </section>
  );
}
