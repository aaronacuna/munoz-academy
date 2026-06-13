export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "1.5rem",
        padding: "80px 48px",
        background: "var(--green-deep)",
      }}
    >
      <p className="eyebrow">Bienvenidos a la Academia</p>
      <h1 style={{ color: "var(--cream)", margin: 0 }}>
        Muñoz Academy — <em>Coming Soon</em>
      </h1>
      <p
        style={{
          color: "var(--cream)",
          fontSize: "0.875rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          opacity: 0.8,
        }}
      >
        Tennis · Pádel · Pickleball
      </p>
    </main>
  );
}
