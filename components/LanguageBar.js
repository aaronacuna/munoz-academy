import styles from "./LanguageBar.module.css";

function SpainFlag() {
  return (
    <svg
      className={styles.flag}
      viewBox="0 0 3 2"
      width="18"
      height="12"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="3" height="2" fill="#c60b1e" />
      <rect width="3" height="1" y="0.5" fill="#ffc400" />
    </svg>
  );
}

function UKFlag() {
  return (
    <svg
      className={styles.flag}
      viewBox="0 0 60 30"
      width="18"
      height="12"
      aria-hidden="true"
      focusable="false"
    >
      <clipPath id="uk-clip">
        <rect width="60" height="30" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path
          d="M0,0 L60,30 M60,0 L0,30"
          stroke="#c8102e"
          strokeWidth="4"
          clipPath="url(#uk-clip)"
        />
        <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 V30 M0,15 H60" stroke="#c8102e" strokeWidth="6" />
      </g>
    </svg>
  );
}

export default function LanguageBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.options}>
        <button className={`${styles.option} ${styles.active}`} type="button">
          <SpainFlag />
          <span>Español</span>
        </button>
        <button className={styles.option} type="button">
          <UKFlag />
          <span>English</span>
        </button>
      </div>
    </div>
  );
}
