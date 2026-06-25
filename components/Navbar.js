"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const WHATSAPP_INSCRIBETE =
  "https://wa.me/50683166300?text=Hola%2C%20me%20gustaría%20inscribirme%20en%20Muñoz%20Academy";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Historia", href: "/historia" },
  { label: "Profesores", href: "/profesores" },
  { label: "Programas", href: "/programas" },
  { label: "Tienda", href: "/tienda" },
  { label: "Recursos", href: "/recursos" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = () => setOpen(false);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className={styles.nav}>
      <div className={styles.bar}>
        <Link
          href="/"
          className={styles.logoLink}
          aria-label="Muñoz Academy — Inicio"
          onClick={close}
        >
          <Image
            className={styles.logo}
            src="/images/Green_Bold_Modern_Tennis_Club_Logo.png"
            alt="Muñoz Academy"
            width={500}
            height={500}
            priority
          />
        </Link>

        <ul className={styles.links}>
          {links.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.link} ${isActive(href) ? styles.active : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_INSCRIBETE}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          Inscríbete
        </a>

        <button
          type="button"
          className={styles.hamburger}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`${styles.hamburgerIcon} ${open ? styles.hamburgerOpen : ""}`}
          >
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {open && (
        <ul className={styles.dropdown}>
          {links.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.dropdownLink} ${isActive(href) ? styles.active : ""}`}
                onClick={close}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={WHATSAPP_INSCRIBETE}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.dropdownCta}
              onClick={close}
            >
              Inscríbete
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
