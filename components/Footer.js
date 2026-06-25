import Link from "next/link";
import { getSiteSettings } from "../lib/sanity";
import styles from "./Footer.module.css";

const navegacion = [
  { label: "Inicio", href: "/" },
  { label: "Historia", href: "/historia" },
  { label: "Profesores", href: "/profesores" },
  { label: "Programas", href: "/programas" },
];

const mas = [
  { label: "Tienda", href: "/tienda" },
  { label: "Recursos", href: "/recursos" },
  { label: "Contacto", href: "/contacto" },
  { label: "Inscripción", href: "/contacto" },
];

// Defaults used until siteSettings is populated in Sanity.
const DEFAULTS = {
  email: "info@munozacademy.com",
  phone: "+506 0000 0000",
  instagramUrl: "https://instagram.com",
  facebookUrl: "https://facebook.com",
};

export default async function Footer() {
  const settings = (await getSiteSettings()) || {};
  const email = settings.email || DEFAULTS.email;
  const phone = settings.phone || DEFAULTS.phone;
  const instagramUrl = settings.instagramUrl || DEFAULTS.instagramUrl;
  const facebookUrl = settings.facebookUrl || DEFAULTS.facebookUrl;

  const contacto = [
    { label: email, href: `mailto:${email}` },
    { label: phone, href: `tel:${phone.replace(/\s+/g, "")}` },
    { label: "Instagram", href: instagramUrl },
    { label: "Facebook", href: facebookUrl },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <img
          src="/images/Green_Bold_Modern_Tennis_Club_Logo.png"
          alt="Muñoz Academy"
          className={styles.footerLogo}
        />
        <p className={styles.tagline}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tennis,
          pádel y pickleball para todos.
        </p>
      </div>

      <div className={styles.column}>
        <h3 className={styles.heading}>Navegación</h3>
        {navegacion.map(({ label, href }) => (
          <Link key={label} href={href} className={styles.link}>
            {label}
          </Link>
        ))}
      </div>

      <div className={styles.column}>
        <h3 className={styles.heading}>Más</h3>
        {mas.map(({ label, href }) => (
          <Link key={label} href={href} className={styles.link}>
            {label}
          </Link>
        ))}
      </div>

      <div className={styles.column}>
        <h3 className={styles.heading}>Contacto</h3>
        {contacto.map(({ label, href }) => (
          <a key={label} href={href} className={styles.link}>
            {label}
          </a>
        ))}
      </div>

      <div className={styles.bottom}>
        <span>© 2025 Academia Muñoz. Todos los derechos reservados.</span>
        <span>Tennis · Pádel · Pickleball</span>
      </div>
    </footer>
  );
}
