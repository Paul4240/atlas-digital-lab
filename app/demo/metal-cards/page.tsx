"use client";
import { useState } from "react";

export default function MetalCardsDemo() {
  const [logo, setLogo] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setLogo(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <main style={styles.main}>
      <section style={styles.hero}>
        <div style={styles.left}>
          <h1 style={styles.heading}>
            Make your first impression feel expensive.
          </h1>
          <p style={styles.sub}>
            Premium engraved metal business cards with deep detail,
            sharp typography, and luxury finishes.
          </p>

          <label style={styles.uploadBtn}>
            Upload Your Logo
            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              style={{ display: "none" }}
            />
          </label>
        </div>

        <div style={styles.previewContainer}>
          <div style={styles.card}>
            {logo ? (
              <img src={logo} alt="logo preview" style={styles.logo} />
            ) : (
              <span style={styles.placeholder}>
                Your Logo Preview
              </span>
            )}
          </div>
        </div>
      </section>

      <section style={styles.packages}>
        <div style={styles.package}>
          <h3>Starter</h3>
          <h2>$299</h2>
          <p>100 Cards · Single-sided</p>
        </div>

        <div style={{ ...styles.package, ...styles.featured }}>
          <h3>Pro</h3>
          <h2>$499</h2>
          <p>200 Cards · Double-sided · QR option</p>
        </div>

        <div style={styles.package}>
          <h3>Elite</h3>
          <h2>$799</h2>
          <p>300 Cards · Custom branding</p>
        </div>
      </section>
    </main>
  );
}

const styles = {
  main: {
    background: "#0e0e12",
    color: "white",
    minHeight: "100vh",
    padding: "80px 40px",
    fontFamily: "system-ui",
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    alignItems: "center",
  },
  left: {},
  heading: {
    fontSize: "42px",
    fontWeight: 800,
    marginBottom: "20px",
  },
  sub: {
    opacity: 0.7,
    marginBottom: "30px",
  },
  uploadBtn: {
    background: "linear-gradient(90deg,#4f46e5,#06b6d4)",
    padding: "14px 24px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: 600,
    display: "inline-block",
  },
  previewContainer: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    width: "340px",
    height: "200px",
    background: "linear-gradient(145deg,#1f1f28,#121218)",
    borderRadius: "16px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    maxWidth: "80%",
    maxHeight: "80%",
    objectFit: "contain" as const,
  },
  placeholder: {
    opacity: 0.4,
  },
  packages: {
    marginTop: "120px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
  },
  package: {
    background: "#16161d",
    padding: "30px",
    borderRadius: "16px",
    textAlign: "center" as const,
  },
  featured: {
    background: "linear-gradient(135deg,#4f46e5,#06b6d4)",
  },
};