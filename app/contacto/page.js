import Footer from "../../components/Footer";
import styles from "./contacto.module.css";

export const metadata = {
  title: "Contacto — Muñoz Academy",
  description:
    "Ponte en contacto con la Academia Muñoz. Estamos aquí para ayudarte a encontrar el programa perfecto.",
};

const programOptions = [
  "Clases para Adultos",
  "Clases para Niños",
  "Tennis en Silla de Ruedas",
  "Clases de Pádel",
  "Clases de Pickleball",
];

export default function ContactoPage() {
  return (
    <main>
      {/* Hero banner */}
      <section className={styles.hero}>
        <p className={styles.heroLabel}>Contacto</p>
        <h1 className={styles.heroHeading}>Hablemos</h1>
        <p className={styles.heroSubtitle}>
          Estamos aquí para ayudarte a encontrar el programa perfecto
        </p>
      </section>

      {/* Contact section */}
      <section className={styles.contact}>
        {/* Form */}
        <div className={styles.formCol}>
          <p className={styles.formLabel}>Envíanos un mensaje</p>
          <form className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="nombre" className={styles.fieldLabel}>
                Nombre completo
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                className={styles.input}
                autoComplete="name"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.fieldLabel}>
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={styles.input}
                autoComplete="email"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="telefono" className={styles.fieldLabel}>
                Teléfono
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                className={styles.input}
                autoComplete="tel"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="programa" className={styles.fieldLabel}>
                Programa de interés
              </label>
              <select id="programa" name="programa" className={styles.select}>
                {programOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="mensaje" className={styles.fieldLabel}>
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                className={styles.textarea}
              />
            </div>

            <a
              href="https://wa.me/50683166300?text=Hola%2C%20me%20gustaría%20obtener%20más%20información%20sobre%20Muñoz%20Academy"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.submit}
              style={{ display: "block", textAlign: "center" }}
            >
              Enviar Mensaje
            </a>
          </form>
        </div>

        {/* Info */}
        <aside className={styles.infoCol}>
          <p className={styles.infoLabel}>Información de contacto</p>
          <h2 className={styles.infoHeading}>Visítanos</h2>

          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <span className={styles.infoIcon} aria-hidden="true">
                📍
              </span>
              <span>Costa Rica</span>
            </li>
            <li className={styles.infoItem}>
              <span className={styles.infoIcon} aria-hidden="true">
                📞
              </span>
              <span>+506 0000 0000</span>
            </li>
            <li className={styles.infoItem}>
              <span className={styles.infoIcon} aria-hidden="true">
                ✉️
              </span>
              <span>info@munozacademy.com</span>
            </li>
            <li className={styles.infoItem}>
              <span className={styles.infoIcon} aria-hidden="true">
                🕐
              </span>
              <span>
                Lunes a Viernes: 7am - 8pm
                <br />
                Sábados: 8am - 2pm
              </span>
            </li>
          </ul>

          <div className={styles.social}>
            <a
              href="https://instagram.com"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </aside>
      </section>

      {/* Map placeholder */}
      <section className={styles.map}>
        <span className={styles.mapText}>Mapa próximamente</span>
      </section>

      <Footer />
    </main>
  );
}
