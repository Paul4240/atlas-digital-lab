// app/demo/metal-cards/page.tsx
import React from "react";

const MAIN_PHONE_PRETTY = "(832) 705-0313";
const MAIN_PHONE_TEL = "8327050313";

const SALES_PHONE_PRETTY = "(346) 365-7906";
const SALES_PHONE_TEL = "3463657906";

const EMAIL = "hello@atlasdigitallab.com";

export default function MetalCardsDemoPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 20% 0%, #141b2a 0%, #07090f 55%, #05060a 100%)",
        color: "#eaf2ff",
        fontFamily:
          'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(10px)",
          background: "rgba(10, 14, 25, 0.65)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#19d3ff",
                boxShadow: "0 0 0 6px rgba(25,211,255,0.10)",
              }}
            />
            <div style={{ fontWeight: 900 }}>Metal Business Cards Demo</div>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" }}>
            <a href={`tel:${MAIN_PHONE_TEL}`} style={pill(false)}>
              Main {MAIN_PHONE_PRETTY}
            </a>
            <a href={`tel:${SALES_PHONE_TEL}`} style={pill(true)}>
              Sales {SALES_PHONE_PRETTY}
            </a>
            <a
              href={`mailto:${EMAIL}?subject=Metal%20Cards%20Quote&body=Hi%20-%20I%20want%20a%20quote%20for%20metal%20business%20cards.%0AName%3A%0ACompany%3A%0APhone%3A%0ADetails%3A%0A`}
              style={pill(false)}
            >
              Email Quote
            </a>
          </div>
        </div>
      </div>

      {/* Keep your existing premium layout below (this is just a safe header swap).
          If you already have a full metal-cards demo page you like, you can paste it back under this header. */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "56px 18px 80px" }}>
        <h1 style={{ fontSize: 52, margin: 0, lineHeight: 1.05 }}>
          Make your first impression feel{" "}
          <span style={{ color: "#19d3ff" }}>expensive</span>.
        </h1>
        <p style={{ opacity: 0.85, maxWidth: 720, marginTop: 12 }}>
          Premium engraved metal business cards with deep detail, sharp typography, and luxury finishes.
        </p>
        <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href={`tel:${SALES_PHONE_TEL}`} style={btnPrimary()}>
            Text/Call to Order
          </a>
          <a
            href={`mailto:${EMAIL}?subject=Metal%20Cards%20Quote&body=Hi%20-%20I%20want%20a%20quote.%0AName%3A%0ACompany%3A%0APhone%3A%0AQuantity%3A%0AFinish%3A%0A`}
            style={btnSoft()}
          >
            Email for a Quote
          </a>
        </div>
      </section>
    </main>
  );
}

function pill(featured: boolean): React.CSSProperties {
  return {
    textDecoration: "none",
    padding: "10px 12px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.10)",
    fontSize: 13,
    background: featured
      ? "linear-gradient(135deg, rgba(25,211,255,0.95), rgba(75,123,255,0.95))"
      : "rgba(255,255,255,0.06)",
    color: featured ? "#071022" : "rgba(234,242,255,0.92)",
    fontWeight: featured ? 900 : 700,
    whiteSpace: "nowrap",
  };
}

function btnPrimary(): React.CSSProperties {
  return {
    textDecoration: "none",
    padding: "12px 14px",
    borderRadius: 12,
    fontWeight: 900,
    background:
      "linear-gradient(135deg, rgba(25,211,255,0.95), rgba(75,123,255,0.95))",
    color: "#071022",
    border: "none",
  };
}

function btnSoft(): React.CSSProperties {
  return {
    textDecoration: "none",
    padding: "12px 14px",
    borderRadius: 12,
    fontWeight: 800,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#eaf2ff",
  };
}