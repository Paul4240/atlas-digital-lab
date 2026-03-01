"use client";

import React, { useMemo, useState } from "react";

export default function MetalCardsDemo() {
  // Atlas sales line (for now)
  const salesPhoneDisplay = "(832) 593-5740";
  const salesPhoneDial = "tel:+18325935740";
  const salesEmail = "hello@atlasdigitallab.com";

  const [finish, setFinish] = useState<"Black" | "Gold" | "Rose Gold" | "Silver">(
    "Black"
  );

  const styles = useMemo(() => {
    const baseFont =
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"';

    return {
      page: {
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 700px at 15% 10%, rgba(168, 85, 247, 0.16), transparent 55%), radial-gradient(900px 600px at 80% 35%, rgba(59, 130, 246, 0.16), transparent 50%), linear-gradient(180deg, #070A10 0%, #050712 45%, #060815 100%)",
        color: "rgba(255,255,255,0.92)",
        fontFamily: baseFont,
      } as React.CSSProperties,

      container: {
        maxWidth: 1180,
        margin: "0 auto",
        padding: "28px 18px 54px",
      } as React.CSSProperties,

      topbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        padding: "10px 12px",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: 16,
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(10px)",
      } as React.CSSProperties,

      brand: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        minWidth: 220,
      } as React.CSSProperties,

      logo: {
        width: 34,
        height: 34,
        borderRadius: 12,
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.02))",
        border: "1px solid rgba(255,255,255,0.14)",
        display: "grid",
        placeItems: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
      } as React.CSSProperties,

      logoDot: {
        width: 10,
        height: 10,
        borderRadius: 999,
        background:
          "radial-gradient(circle at 30% 30%, #fff, rgba(255,255,255,0.25) 45%, rgba(255,255,255,0.05) 70%)",
      } as React.CSSProperties,

      brandText: {
        lineHeight: 1.05,
      } as React.CSSProperties,

      brandName: {
        fontWeight: 900,
        letterSpacing: "-0.3px",
        fontSize: 14,
        opacity: 0.95,
      } as React.CSSProperties,

      brandSub: {
        fontSize: 12,
        opacity: 0.7,
      } as React.CSSProperties,

      nav: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        flexWrap: "wrap",
        justifyContent: "flex-end",
      } as React.CSSProperties,

      pill: {
        fontSize: 12,
        padding: "8px 10px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.04)",
        color: "rgba(255,255,255,0.86)",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
      } as React.CSSProperties,

      pillDot: {
        width: 8,
        height: 8,
        borderRadius: 999,
        background: "rgba(255,255,255,0.25)",
      } as React.CSSProperties,

      heroGrid: {
        display: "grid",
        gridTemplateColumns: "1.15fr 0.85fr",
        gap: 18,
        marginTop: 16,
      } as React.CSSProperties,

      heroLeft: {
        padding: "22px 18px",
        borderRadius: 20,
        border: "1px solid rgba(255,255,255,0.10)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
        boxShadow: "0 24px 70px rgba(0,0,0,0.45)",
        position: "relative",
        overflow: "hidden",
      } as React.CSSProperties,

      heroGlow: {
        position: "absolute",
        inset: "-1px",
        background:
          "radial-gradient(700px 250px at 15% 20%, rgba(255,255,255,0.12), transparent 60%), radial-gradient(500px 220px at 70% 10%, rgba(59,130,246,0.18), transparent 60%), radial-gradient(420px 220px at 75% 60%, rgba(168,85,247,0.14), transparent 60%)",
        pointerEvents: "none",
      } as React.CSSProperties,

      heroKicker: {
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontSize: 12,
        padding: "8px 10px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(0,0,0,0.12)",
        color: "rgba(255,255,255,0.78)",
        position: "relative",
        zIndex: 1,
      } as React.CSSProperties,

      badge: {
        fontWeight: 900,
        letterSpacing: "0.2px",
        background:
          "linear-gradient(135deg, rgba(34,197,94,0.26), rgba(34,197,94,0.10))",
        border: "1px solid rgba(34,197,94,0.28)",
        color: "rgba(255,255,255,0.90)",
        padding: "6px 10px",
        borderRadius: 999,
        fontSize: 12,
      } as React.CSSProperties,

      h1: {
        margin: "14px 0 10px",
        fontSize: 46,
        lineHeight: 1.05,
        letterSpacing: "-1.2px",
        fontWeight: 950,
        position: "relative",
        zIndex: 1,
      } as React.CSSProperties,

      sub: {
        fontSize: 16,
        lineHeight: 1.65,
        opacity: 0.82,
        maxWidth: 640,
        position: "relative",
        zIndex: 1,
      } as React.CSSProperties,

      ctas: {
        display: "flex",
        gap: 12,
        flexWrap: "wrap",
        marginTop: 16,
        position: "relative",
        zIndex: 1,
      } as React.CSSProperties,

      primaryBtn: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        padding: "12px 14px",
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.12)",
        background:
          "linear-gradient(135deg, rgba(59,130,246,0.95), rgba(168,85,247,0.82))",
        color: "white",
        fontWeight: 900,
        textDecoration: "none",
        boxShadow: "0 18px 45px rgba(0,0,0,0.45)",
      } as React.CSSProperties,

      ghostBtn: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        padding: "12px 14px",
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.14)",
        background: "rgba(255,255,255,0.04)",
        color: "rgba(255,255,255,0.9)",
        fontWeight: 800,
        textDecoration: "none",
      } as React.CSSProperties,

      miniRow: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 12,
        marginTop: 16,
        position: "relative",
        zIndex: 1,
      } as React.CSSProperties,

      miniCard: {
        padding: "12px 12px",
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(0,0,0,0.12)",
      } as React.CSSProperties,

      miniTop: {
        fontWeight: 900,
        letterSpacing: "-0.2px",
      } as React.CSSProperties,

      miniSub: {
        marginTop: 4,
        fontSize: 13,
        opacity: 0.74,
      } as React.CSSProperties,

      heroRight: {
        borderRadius: 20,
        border: "1px solid rgba(255,255,255,0.10)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
        boxShadow: "0 24px 70px rgba(0,0,0,0.45)",
        overflow: "hidden",
      } as React.CSSProperties,

      rightInner: {
        padding: 18,
      } as React.CSSProperties,

      rightTitle: {
        fontSize: 14,
        fontWeight: 950,
        letterSpacing: "-0.2px",
        margin: 0,
        opacity: 0.92,
      } as React.CSSProperties,

      rightSub: {
        fontSize: 13,
        opacity: 0.74,
        lineHeight: 1.6,
        marginTop: 8,
      } as React.CSSProperties,

      divider: {
        height: 1,
        background: "rgba(255,255,255,0.10)",
        margin: "14px 0",
      } as React.CSSProperties,

      swatches: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 10,
      } as React.CSSProperties,

      swatch: (active: boolean) =>
        ({
          padding: "12px 12px",
          borderRadius: 16,
          border: active
            ? "1px solid rgba(59,130,246,0.65)"
            : "1px solid rgba(255,255,255,0.10)",
          background: active
            ? "linear-gradient(180deg, rgba(59,130,246,0.22), rgba(255,255,255,0.03))"
            : "rgba(0,0,0,0.10)",
          cursor: "pointer",
          userSelect: "none",
        } as React.CSSProperties),

      swatchTop: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
      } as React.CSSProperties,

      chip: (color: string) =>
        ({
          width: 16,
          height: 16,
          borderRadius: 999,
          background: color,
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow: "0 10px 20px rgba(0,0,0,0.35)",
        } as React.CSSProperties),

      swatchName: {
        fontWeight: 900,
        letterSpacing: "-0.2px",
      } as React.CSSProperties,

      swatchDesc: {
        marginTop: 6,
        fontSize: 13,
        opacity: 0.74,
        lineHeight: 1.45,
      } as React.CSSProperties,

      mockWrap: {
        marginTop: 14,
        borderRadius: 18,
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(0,0,0,0.12)",
        padding: 14,
      } as React.CSSProperties,

      mockGrid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12,
      } as React.CSSProperties,

      mock: (accent: string) =>
        ({
          borderRadius: 18,
          border: "1px solid rgba(255,255,255,0.12)",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))",
          overflow: "hidden",
          position: "relative",
          minHeight: 140,
        } as React.CSSProperties),

      mockGlow: (accent: string) =>
        ({
          position: "absolute",
          inset: "-2px",
          background: `radial-gradient(280px 150px at 30% 20%, ${accent}, transparent 60%), radial-gradient(240px 140px at 70% 70%, rgba(255,255,255,0.10), transparent 60%)`,
          opacity: 0.8,
          pointerEvents: "none",
        } as React.CSSProperties),

      mockInner: {
        position: "relative",
        padding: 14,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 10,
        height: "100%",
      } as React.CSSProperties,

      mockName: {
        fontWeight: 950,
        letterSpacing: "-0.5px",
        fontSize: 14,
        opacity: 0.95,
      } as React.CSSProperties,

      mockRole: {
        fontSize: 12,
        opacity: 0.72,
      } as React.CSSProperties,

      mockLine: {
        height: 1,
        background: "rgba(255,255,255,0.14)",
      } as React.CSSProperties,

      mockMeta: {
        fontSize: 12,
        opacity: 0.78,
        lineHeight: 1.5,
      } as React.CSSProperties,

      section: {
        marginTop: 18,
        padding: "18px 18px",
        borderRadius: 20,
        border: "1px solid rgba(255,255,255,0.10)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
        boxShadow: "0 24px 70px rgba(0,0,0,0.35)",
      } as React.CSSProperties,

      sectionTitleRow: {
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        gap: 12,
        flexWrap: "wrap",
      } as React.CSSProperties,

      h2: {
        margin: 0,
        fontSize: 20,
        fontWeight: 950,
        letterSpacing: "-0.5px",
      } as React.CSSProperties,

      sectionSub: {
        marginTop: 8,
        fontSize: 14,
        opacity: 0.76,
        lineHeight: 1.6,
        maxWidth: 840,
      } as React.CSSProperties,

      features: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 12,
        marginTop: 14,
      } as React.CSSProperties,

      featureCard: {
        padding: "14px 12px",
        borderRadius: 18,
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(0,0,0,0.10)",
      } as React.CSSProperties,

      featureTop: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
      } as React.CSSProperties,

      featureTitle: {
        fontWeight: 950,
        letterSpacing: "-0.2px",
      } as React.CSSProperties,

      featureTag: {
        fontSize: 11,
        padding: "6px 8px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.04)",
        opacity: 0.9,
      } as React.CSSProperties,

      featureDesc: {
        marginTop: 8,
        fontSize: 13,
        opacity: 0.74,
        lineHeight: 1.55,
      } as React.CSSProperties,

      pricingGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 12,
        marginTop: 14,
      } as React.CSSProperties,

      priceCard: (featured: boolean) =>
        ({
          padding: "16px 14px",
          borderRadius: 20,
          border: featured
            ? "1px solid rgba(59,130,246,0.55)"
            : "1px solid rgba(255,255,255,0.10)",
          background: featured
            ? "linear-gradient(180deg, rgba(59,130,246,0.20), rgba(255,255,255,0.03))"
            : "rgba(0,0,0,0.10)",
          boxShadow: featured ? "0 22px 60px rgba(0,0,0,0.45)" : undefined,
        } as React.CSSProperties),

      popularRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
      } as React.CSSProperties,

      popularBadge: {
        fontSize: 12,
        padding: "6px 10px",
        borderRadius: 999,
        border: "1px solid rgba(59,130,246,0.55)",
        background: "rgba(59,130,246,0.16)",
        fontWeight: 900,
      } as React.CSSProperties,

      plan: { fontWeight: 950, fontSize: 14, opacity: 0.92 } as React.CSSProperties,

      price: {
        marginTop: 10,
        fontSize: 36,
        fontWeight: 950,
        letterSpacing: "-0.8px",
      } as React.CSSProperties,

      per: {
        fontSize: 13,
        opacity: 0.72,
        marginTop: 2,
      } as React.CSSProperties,

      list: {
        marginTop: 12,
        paddingLeft: 18,
        opacity: 0.86,
        lineHeight: 1.65,
        fontSize: 13,
      } as React.CSSProperties,

      cardBtn: (featured: boolean) =>
        ({
          marginTop: 12,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          width: "100%",
          padding: "12px 14px",
          borderRadius: 14,
          border: "1px solid rgba(255,255,255,0.14)",
          background: featured
            ? "linear-gradient(135deg, rgba(59,130,246,0.95), rgba(168,85,247,0.82))"
            : "rgba(255,255,255,0.05)",
          color: "rgba(255,255,255,0.95)",
          fontWeight: 900,
          textDecoration: "none",
        } as React.CSSProperties),

      steps: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 12,
        marginTop: 14,
      } as React.CSSProperties,

      stepCard: {
        padding: "14px 12px",
        borderRadius: 18,
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(0,0,0,0.10)",
      } as React.CSSProperties,

      stepNum: {
        width: 30,
        height: 30,
        borderRadius: 999,
        display: "grid",
        placeItems: "center",
        border: "1px solid rgba(255,255,255,0.14)",
        background: "rgba(255,255,255,0.04)",
        fontWeight: 950,
      } as React.CSSProperties,

      stepTitle: {
        marginTop: 10,
        fontWeight: 950,
        letterSpacing: "-0.2px",
      } as React.CSSProperties,

      stepDesc: {
        marginTop: 8,
        fontSize: 13,
        opacity: 0.74,
        lineHeight: 1.55,
      } as React.CSSProperties,

      footer: {
        marginTop: 18,
        padding: "14px 14px",
        borderRadius: 18,
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(255,255,255,0.03)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        flexWrap: "wrap",
      } as React.CSSProperties,

      hiring: {
        border: "1px dashed rgba(255,255,255,0.25)",
        padding: "6px 10px",
        borderRadius: 999,
        background: "rgba(255,255,255,0.04)",
        fontSize: 12,
        opacity: 0.9,
      } as React.CSSProperties,

      footerSmall: { fontSize: 12, opacity: 0.72 } as React.CSSProperties,

      // Responsive: this is the REAL fix for mobile
      responsiveCss: `
        @media (max-width: 980px){
          .heroGrid{ grid-template-columns: 1fr !important; }
          .featuresGrid{ grid-template-columns: repeat(2, 1fr) !important; }
          .pricingGrid{ grid-template-columns: 1fr !important; }
          .stepsGrid{ grid-template-columns: 1fr !important; }
        }
        @media (max-width: 520px){
          .mockGrid{ grid-template-columns: 1fr !important; }
          .miniRow{ grid-template-columns: 1fr !important; }
          .h1{ font-size: 36px !important; }
        }
      `,
    };
  }, []);

  const finishAccent = useMemo(() => {
    switch (finish) {
      case "Gold":
        return "rgba(234, 179, 8, 0.35)";
      case "Rose Gold":
        return "rgba(244, 114, 182, 0.30)";
      case "Silver":
        return "rgba(148, 163, 184, 0.30)";
      default:
        return "rgba(59, 130, 246, 0.35)";
    }
  }, [finish]);

  return (
    <main style={styles.page}>
      <style>{styles.responsiveCss}</style>

      <div style={styles.container}>
        {/* TOP BAR */}
        <div style={styles.topbar}>
          <div style={styles.brand}>
            <div style={styles.logo}>
              <div style={styles.logoDot} />
            </div>
            <div style={styles.brandText}>
              <div style={styles.brandName}>Metal Business Cards Demo</div>
              <div style={styles.brandSub}>Premium engraved + laser-cut cards</div>
            </div>
          </div>

          <div style={styles.nav}>
            <a style={styles.pill} href="#pricing">
              <span style={styles.pillDot} /> Pricing
            </a>
            <a style={styles.pill} href="#process">
              <span style={styles.pillDot} /> Process
            </a>
            <a style={styles.pill} href={salesPhoneDial}>
              <span style={styles.pillDot} /> Call/Text {salesPhoneDisplay}
            </a>
          </div>
        </div>

        {/* HERO */}
        <div className="heroGrid" style={styles.heroGrid}>
          <div style={styles.heroLeft}>
            <div style={styles.heroGlow} />

            <div style={styles.heroKicker}>
              <span style={styles.badge}>Premium Look</span>
              <span>• Fast turnaround • Crisp detail • Strong first impression</span>
            </div>

            <h1 className="h1" style={styles.h1}>
              Make your first impression feel expensive.
            </h1>

            <p style={styles.sub}>
              Metal business cards that people keep. Deep engraving or laser etch,
              clean typography, and premium finishes — designed to look high-end and
              convert conversations into customers.
            </p>

            <div style={styles.ctas}>
              <a style={styles.primaryBtn} href={salesPhoneDial}>
                Text/Call to Order
              </a>
              <a style={styles.ghostBtn} href={`mailto:${salesEmail}?subject=Metal%20Cards%20Order`}>
                Email for a Quote
              </a>
            </div>

            <div className="miniRow" style={styles.miniRow}>
              <div style={styles.miniCard}>
                <div style={styles.miniTop}>1–3 Days</div>
                <div style={styles.miniSub}>Typical proof + production start</div>
              </div>
              <div style={styles.miniCard}>
                <div style={styles.miniTop}>Premium Finish</div>
                <div style={styles.miniSub}>Matte / gloss / brushed look</div>
              </div>
              <div style={styles.miniCard}>
                <div style={styles.miniTop}>High Detail</div>
                <div style={styles.miniSub}>Tiny text stays sharp</div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div style={styles.heroRight}>
            <div style={styles.rightInner}>
              <h3 style={styles.rightTitle}>Choose a finish</h3>
              <div style={styles.rightSub}>
                This changes the demo mockups below so it feels like a real product
                page (not a service page).
              </div>

              <div style={styles.divider} />

              <div style={styles.swatches}>
                <div
                  style={styles.swatch(finish === "Black")}
                  onClick={() => setFinish("Black")}
                >
                  <div style={styles.swatchTop}>
                    <div style={styles.swatchName}>Black</div>
                    <div style={styles.chip("linear-gradient(135deg,#0B1220,#111827)")} />
                  </div>
                  <div style={styles.swatchDesc}>Bold, high contrast, luxury vibe.</div>
                </div>

                <div
                  style={styles.swatch(finish === "Gold")}
                  onClick={() => setFinish("Gold")}
                >
                  <div style={styles.swatchTop}>
                    <div style={styles.swatchName}>Gold</div>
                    <div style={styles.chip("linear-gradient(135deg,#FDE68A,#EAB308)")} />
                  </div>
                  <div style={styles.swatchDesc}>Premium look for high-ticket brands.</div>
                </div>

                <div
                  style={styles.swatch(finish === "Rose Gold")}
                  onClick={() => setFinish("Rose Gold")}
                >
                  <div style={styles.swatchTop}>
                    <div style={styles.swatchName}>Rose Gold</div>
                    <div style={styles.chip("linear-gradient(135deg,#FBCFE8,#F472B6)")} />
                  </div>
                  <div style={styles.swatchDesc}>Modern + classy, perfect for creative work.</div>
                </div>

                <div
                  style={styles.swatch(finish === "Silver")}
                  onClick={() => setFinish("Silver")}
                >
                  <div style={styles.swatchTop}>
                    <div style={styles.swatchName}>Silver</div>
                    <div style={styles.chip("linear-gradient(135deg,#E2E8F0,#94A3B8)")} />
                  </div>
                  <div style={styles.swatchDesc}>Clean and professional. Brushed feel.</div>
                </div>
              </div>

              <div style={styles.mockWrap}>
                <div className="mockGrid" style={styles.mockGrid}>
                  <div style={styles.mock(finishAccent)}>
                    <div style={styles.mockGlow(finishAccent)} />
                    <div style={styles.mockInner}>
                      <div>
                        <div style={styles.mockName}>JORDAN MILLER</div>
                        <div style={styles.mockRole}>Owner • Custom Metal Cards</div>
                      </div>
                      <div style={styles.mockLine} />
                      <div style={styles.mockMeta}>
                        (832) 555-0123 • hello@brand.com
                        <br />
                        brand.com • Houston, TX
                      </div>
                    </div>
                  </div>

                  <div style={styles.mock(finishAccent)}>
                    <div style={styles.mockGlow(finishAccent)} />
                    <div style={styles.mockInner}>
                      <div>
                        <div style={styles.mockName}>SCAN TO SAVE</div>
                        <div style={styles.mockRole}>QR + vCard ready</div>
                      </div>
                      <div style={styles.mockLine} />
                      <div style={styles.mockMeta}>
                        ✅ QR Code • ✅ NFC Option
                        <br />
                        ✅ Clean typography • ✅ Sharp edges
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: 10, fontSize: 12, opacity: 0.7 }}>
                  Demo mockups only — your real design uses your logo + brand colors.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <section style={styles.section}>
          <div style={styles.sectionTitleRow}>
            <h2 style={styles.h2}>What you get</h2>
            <span style={{ fontSize: 12, opacity: 0.7 }}>
              Designed to feel premium
            </span>
          </div>
          <div style={styles.sectionSub}>
            This demo is built like a product brand: finishes, mockups, features,
            packages, and a clear ordering path. It feels “worth it.”
          </div>

          <div className="featuresGrid" style={styles.features}>
            {[
              { title: "Deep Engraving", tag: "Crisp detail", desc: "Clean lines, sharp corners, readable tiny text." },
              { title: "Premium Finishes", tag: "Luxury look", desc: "Black, gold, rose gold, silver — modern vibe." },
              { title: "Proof Included", tag: "No surprises", desc: "We send a digital proof before production starts." },
              { title: "Fast Turnaround", tag: "Quick", desc: "Simple process: choose package → approve → produce." },
            ].map((f, i) => (
              <div key={i} style={styles.featureCard}>
                <div style={styles.featureTop}>
                  <div style={styles.featureTitle}>{f.title}</div>
                  <div style={styles.featureTag}>{f.tag}</div>
                </div>
                <div style={styles.featureDesc}>{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" style={styles.section}>
          <div style={styles.sectionTitleRow}>
            <h2 style={styles.h2}>Packages</h2>
            <span style={{ fontSize: 12, opacity: 0.7 }}>
              Simple • clean • premium
            </span>
          </div>
          <div style={styles.sectionSub}>
            Pick the package that matches the “first impression” you want. This is demo pricing —
            we can change it to your friend’s real numbers later.
          </div>

          <div className="pricingGrid" style={styles.pricingGrid}>
            <div style={styles.priceCard(false)}>
              <div style={styles.plan}>Starter Pack</div>
              <div style={styles.price}>$299</div>
              <div style={styles.per}>100 cards • 1 finish • proof included</div>
              <ul style={styles.list}>
                <li>Single-sided design</li>
                <li>Basic engraving/etch</li>
                <li>Clean typography layout</li>
                <li>Standard turnaround</li>
              </ul>
              <a style={styles.cardBtn(false)} href={salesPhoneDial}>
                Order Starter
              </a>
            </div>

            <div style={styles.priceCard(true)}>
              <div style={styles.popularRow}>
                <div style={styles.plan}>Pro Pack</div>
                <div style={styles.popularBadge}>Most Popular</div>
              </div>
              <div style={styles.price}>$499</div>
              <div style={styles.per}>200 cards • premium finish • proof included</div>
              <ul style={styles.list}>
                <li>Double-sided layout</li>
                <li>Premium finish options</li>
                <li>QR code option</li>
                <li>Priority turnaround</li>
              </ul>
              <a style={styles.cardBtn(true)} href={salesPhoneDial}>
                Order Pro
              </a>
            </div>

            <div style={styles.priceCard(false)}>
              <div style={styles.plan}>Elite Pack</div>
              <div style={styles.price}>$799</div>
              <div style={styles.per}>300 cards • custom branding • best impression</div>
              <ul style={styles.list}>
                <li>Premium custom layout</li>
                <li>QR + “scan to save” concept</li>
                <li>Brand style polish</li>
                <li>Fastest turnaround</li>
              </ul>
              <a style={styles.cardBtn(false)} href={salesPhoneDial}>
                Order Elite
              </a>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" style={styles.section}>
          <div style={styles.sectionTitleRow}>
            <h2 style={styles.h2}>How it works</h2>
            <span style={{ fontSize: 12, opacity: 0.7 }}>
              Clear steps
            </span>
          </div>
          <div style={styles.sectionSub}>
            This keeps it professional and removes friction — exactly what a real product site does.
          </div>

          <div className="stepsGrid" style={styles.steps}>
            {[
              {
                title: "Pick a package",
                desc: "Choose quantity + finish. Tell us your name/title/logo and contact info.",
              },
              {
                title: "Approve your proof",
                desc: "We send a clean proof. You approve it, then production starts.",
              },
              {
                title: "Delivered fast",
                desc: "Your metal cards ship ready to impress. People keep them.",
              },
            ].map((s, i) => (
              <div key={i} style={styles.stepCard}>
                <div style={styles.stepNum}>{i + 1}</div>
                <div style={styles.stepTitle}>{s.title}</div>
                <div style={styles.stepDesc}>{s.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a style={styles.primaryBtn} href={salesPhoneDial}>
              Text/Call {salesPhoneDisplay}
            </a>
            <a style={styles.ghostBtn} href={`mailto:${salesEmail}?subject=Metal%20Cards%20Quote`}>
              Email: {salesEmail}
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={styles.footer}>
          <div style={styles.footerSmall}>
            <b>Demo Contact:</b> Call/Text{" "}
            <a href={salesPhoneDial} style={{ color: "rgba(255,255,255,0.92)", fontWeight: 900, textDecoration: "none" }}>
              {salesPhoneDisplay}
            </a>{" "}
            • Email{" "}
            <a
              href={`mailto:${salesEmail}`}
              style={{ color: "rgba(255,255,255,0.92)", fontWeight: 900, textDecoration: "none" }}
            >
              {salesEmail}
            </a>
          </div>

          <div style={styles.hiring}>Now Hiring: Part-time sales (commission)</div>

          <div style={styles.footerSmall}>
            © {new Date().getFullYear()} Atlas Digital Lab • Demo
          </div>
        </footer>
      </div>
    </main>
  );
}