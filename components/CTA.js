import styles from "./CTA.module.css";

const WHATSAPP_PROGRAMS =
  "https://wa.me/50683166300?text=Hola%2C%20me%20gustaría%20conocer%20más%20sobre%20los%20programas%20de%20Muñoz%20Academy";

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
        <a
          href={WHATSAPP_PROGRAMS}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnSolid}
        >
          Ver Programas
        </a>
        <a
          href={WHATSAPP_PROGRAMS}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnOutline}
        >
          Contactar Ahora
        </a>
      </div>
    </section>
  );
}
