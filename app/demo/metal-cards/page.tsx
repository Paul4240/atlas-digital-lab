"use client";

import React, { useMemo, useRef, useState } from "react";

export default function MetalCardsDemo() {
  // ===== Contact (edit if needed) =====
  const MAIN_PHONE = "8327050313";
  const MAIN_PRETTY = "(832) 705-0313";

  const SALES_PHONE = "3463657906";
  const SALES_PRETTY = "(346) 365-7906";

  const EMAIL = "hello@atlasdigitallab.com";

  // ===== Product state =====
  const finishes = useMemo(
    () => [
      {
        key: "black",
        name: "Black",
        note: "Bold, high contrast, luxury vibe.",
        accent: "rgba(46,180,255,.9)",
        glow: "rgba(46,180,255,.25)",
      },
      {
        key: "gold",
        name: "Gold",
        note: "Premium look for high-ticket brands.",
        accent: "rgba(255,205,64,.95)",
        glow: "rgba(255,205,64,.18)",
      },
      {
        key: "rose",
        name: "Rose Gold",
        note: "Modern + classy, creative work.",
        accent: "rgba(255,140,175,.95)",
        glow: "rgba(255,140,175,.16)",
      },
      {
        key: "silver",
        name: "Silver",
        note: "Clean and professional. Brushed.",
        accent: "rgba(215,230,255,.95)",
        glow: "rgba(215,230,255,.12)",
      },
    ],
    []
  );

  const [finish, setFinish] = useState(finishes[0]);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [brandName, setBrandName] = useState("JORDAN MILLER");
  const [title, setTitle] = useState("Owner • Custom Metal Cards");
  const [phone, setPhone] = useState(SALES_PRETTY);
  const [site, setSite] = useState("brand.com");
  const [city, setCity] = useState("Houston, TX");

  const fileRef = useRef<HTMLInputElement | null>(null);

  function onPickLogo() {
    fileRef.current?.click();
  }

  function onLogoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    const url = URL.createObjectURL(f);
    setLogoUrl(url);
  }

  const mailtoQuote = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "Metal Cards Quote"
  )}&body=${encodeURIComponent(
    `Hi Atlas Digital Lab,\n\nI’m interested in premium metal business cards.\n\nFinish: ${finish.name}\nName: ${brandName}\nTitle: ${title}\nPhone: ${phone}\nWebsite: ${site}\nCity: ${city}\n\nNotes:\n`
  )}`;

  const telMain = `tel:${MAIN_PHONE}`;
  const telSales = `tel:${SALES_PHONE}`;

  // ===== Styles (no styled-jsx) =====
  const s: Record<string, React.CSSProperties> = {
    page: {
      minHeight: "100vh",
      color: "rgba(235,245,255,.92)",
      fontFamily:
        'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
      background:
        "radial-gradient(circle at 18% 0%, rgba(15,60,110,1) 0%, rgba(10,26,54,1) 45%, rgba(7,14,26,1) 100%)",
    },
    wrap: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "22px 18px 64px",
    },

    // Top nav / pills
    nav: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      padding: "12px 0",
      backdropFilter: "blur(12px)",
      background: "rgba(7,14,26,.55)",
      borderBottom: "1px solid rgba(255,255,255,.08)",
    },
    navInner: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "0 18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
    },
    brand: { display: "flex", alignItems: "center", gap: 10, minWidth: 240 },
    dot: {
      width: 12,
      height: 12,
      borderRadius: 999,
      background: finish.accent,
      boxShadow: `0 0 24px ${finish.glow}`,
      flexShrink: 0,
    },
    brandText: { lineHeight: 1.1 },
    brandTitle: { fontWeight: 800, letterSpacing: ".2px", fontSize: 14 },
    brandSub: { fontSize: 12, opacity: 0.75 },

    navLinks: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap",
      justifyContent: "flex-end",
    },
    pill: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 12px",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,.14)",
      background: "rgba(255,255,255,.06)",
      color: "rgba(235,245,255,.92)",
      textDecoration: "none",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      boxShadow: "0 10px 30px rgba(0,0,0,.15)",
    },
    pillPrimary: {
      background: `linear-gradient(135deg, ${finish.accent}, rgba(0,210,170,.88))`,
      border: "1px solid rgba(255,255,255,.10)",
      color: "rgba(7,17,31,.95)",
    },

    // Hero
    gridHero: {
      display: "grid",
      gridTemplateColumns: "1.05fr .95fr",
      gap: 18,
      paddingTop: 18,
    },
    heroCard: {
      borderRadius: 24,
      border: "1px solid rgba(255,255,255,.10)",
      background:
        "linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03))",
      boxShadow: "0 25px 80px rgba(0,0,0,.35)",
      overflow: "hidden",
      position: "relative",
    },
    heroLeft: {
      padding: "28px 26px",
    },
    eyebrowRow: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      marginBottom: 14,
    },
    chip: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 10px",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,.14)",
      background: "rgba(255,255,255,.05)",
      fontWeight: 700,
      fontSize: 12,
      opacity: 0.92,
    },
    h1: {
      fontSize: 54,
      lineHeight: 1.02,
      margin: 0,
      fontWeight: 900,
      letterSpacing: "-.8px",
    },
    accent: {
      color: finish.accent,
      textShadow: `0 0 26px ${finish.glow}`,
    },
    heroP: {
      marginTop: 14,
      marginBottom: 18,
      fontSize: 16,
      lineHeight: 1.5,
      opacity: 0.86,
      maxWidth: 620,
    },
    ctaRow: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      marginTop: 10,
    },
    btn: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      padding: "14px 16px",
      borderRadius: 14,
      border: "1px solid rgba(255,255,255,.12)",
      background: "rgba(255,255,255,.06)",
      color: "rgba(235,245,255,.92)",
      textDecoration: "none",
      fontWeight: 800,
      fontSize: 14,
      boxShadow: "0 18px 45px rgba(0,0,0,.25)",
      cursor: "pointer",
      minWidth: 180,
    },
    btnPrimary: {
      background: `linear-gradient(135deg, ${finish.accent}, rgba(0,210,170,.92))`,
      border: "1px solid rgba(255,255,255,.10)",
      color: "rgba(7,17,31,.95)",
    },
    subRow: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 10,
      marginTop: 18,
    },
    stat: {
      borderRadius: 18,
      border: "1px solid rgba(255,255,255,.10)",
      background: "rgba(0,0,0,.18)",
      padding: "14px 14px",
    },
    statTop: { fontWeight: 900, fontSize: 14 },
    statSub: { opacity: 0.78, fontSize: 12, marginTop: 6, lineHeight: 1.35 },

    // Right side builder / mock
    heroRight: {
      padding: 18,
      display: "grid",
      gridTemplateRows: "auto 1fr",
      gap: 12,
    },
    builder: {
      borderRadius: 20,
      border: "1px solid rgba(255,255,255,.10)",
      background: "rgba(0,0,0,.22)",
      padding: 16,
    },
    builderTitle: { fontWeight: 900, fontSize: 14, marginBottom: 6 },
    builderSub: { opacity: 0.72, fontSize: 12, lineHeight: 1.35 },

    finishGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 10,
      marginTop: 12,
    },
    finishBtn: {
      textAlign: "left",
      borderRadius: 16,
      border: "1px solid rgba(255,255,255,.12)",
      background: "rgba(255,255,255,.06)",
      padding: 12,
      cursor: "pointer",
      color: "rgba(235,245,255,.92)",
    },
    finishBtnActive: {
      border: `1px solid ${finish.accent}`,
      boxShadow: `0 0 0 3px ${finish.glow}`,
      background: "rgba(255,255,255,.07)",
    },
    finishName: { fontWeight: 900, fontSize: 13 },
    finishNote: { opacity: 0.72, fontSize: 12, marginTop: 6, lineHeight: 1.25 },

    uploadRow: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      marginTop: 12,
      flexWrap: "wrap",
    },
    uploadBtn: {
      flex: "1 1 220px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      borderRadius: 14,
      border: "1px solid rgba(255,255,255,.12)",
      background: `linear-gradient(135deg, rgba(255,255,255,.10), rgba(255,255,255,.05))`,
      padding: "12px 14px",
      fontWeight: 900,
      cursor: "pointer",
    },
    uploadHint: { opacity: 0.65, fontSize: 12, flex: "1 1 140px" },

    mockRow: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12,
      marginTop: 12,
    },
    mockCard: {
      borderRadius: 20,
      border: "1px solid rgba(255,255,255,.10)",
      background: "rgba(0,0,0,.22)",
      padding: 16,
      position: "relative",
      overflow: "hidden",
    },
    mockTop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 10,
    },
    mockName: { fontWeight: 1000, letterSpacing: ".2px" as any, fontSize: 13 },
    mockTitle: { opacity: 0.75, fontSize: 12, marginTop: 4 },
    mockMeta: { opacity: 0.85, fontSize: 12, marginTop: 10, lineHeight: 1.5 },
    logoBox: {
      marginTop: 14,
      width: "100%",
      height: 78,
      borderRadius: 16,
      border: "1px dashed rgba(255,255,255,.18)",
      background: "rgba(255,255,255,.05)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    logoImg: { maxWidth: "92%", maxHeight: "92%", objectFit: "contain" },

    scanBox: {
      borderRadius: 20,
      border: "1px solid rgba(255,255,255,.10)",
      background: "rgba(0,0,0,.22)",
      padding: 16,
    },
    scanTitle: { fontWeight: 900, fontSize: 13 },
    scanSub: { opacity: 0.75, fontSize: 12, marginTop: 6, lineHeight: 1.35 },
    list: { marginTop: 10, paddingLeft: 16, opacity: 0.88, fontSize: 12 },

    // Sections
    section: { marginTop: 18 },
    sectionCard: {
      borderRadius: 24,
      border: "1px solid rgba(255,255,255,.10)",
      background:
        "linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.03))",
      boxShadow: "0 25px 80px rgba(0,0,0,.30)",
      overflow: "hidden",
    },
    sectionInner: { padding: "22px 18px" },
    sectionTitle: { fontSize: 20, fontWeight: 1000, margin: 0 },
    sectionSub: { marginTop: 8, opacity: 0.75, fontSize: 13, lineHeight: 1.45 },

    // Pricing
    pricingGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 12,
      marginTop: 14,
    },
    priceCard: {
      borderRadius: 20,
      border: "1px solid rgba(255,255,255,.10)",
      background: "rgba(0,0,0,.22)",
      padding: 16,
    },
    priceTop: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 10,
    },
    priceName: { fontWeight: 1000, fontSize: 14 },
    badge: {
      fontSize: 11,
      fontWeight: 900,
      padding: "6px 10px",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,.12)",
      background: "rgba(255,255,255,.06)",
      opacity: 0.9,
      whiteSpace: "nowrap",
    },
    price: { fontSize: 28, fontWeight: 1000, marginTop: 10 },
    priceSmall: { opacity: 0.72, fontSize: 12, marginTop: 6 },
    ul: { marginTop: 12, paddingLeft: 16, opacity: 0.9, fontSize: 12 },
    priceBtn: {
      marginTop: 12,
      width: "100%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "12px 14px",
      borderRadius: 14,
      border: "1px solid rgba(255,255,255,.12)",
      background: "rgba(255,255,255,.06)",
      color: "rgba(235,245,255,.92)",
      fontWeight: 1000,
      cursor: "pointer",
      textDecoration: "none",
    },

    // FAQ
    faqGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 12,
      marginTop: 14,
    },
    faq: {
      borderRadius: 20,
      border: "1px solid rgba(255,255,255,.10)",
      background: "rgba(0,0,0,.22)",
      padding: 16,
    },
    faqQ: { fontWeight: 1000, fontSize: 13 },
    faqA: { marginTop: 8, opacity: 0.78, fontSize: 12, lineHeight: 1.45 },

    // Footer
    footer: {
      marginTop: 20,
      paddingTop: 18,
      borderTop: "1px solid rgba(255,255,255,.08)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12,
      opacity: 0.8,
      fontSize: 12,
    },

    // Mobile
    mobileOnlyNote: { display: "none" },
  };

  // Responsive tweaks (inline)
  const responsiveCss: React.CSSProperties = {
    // placeholder to keep TS happy
  };

  return (
    <main style={s.page}>
      {/* Sticky Top */}
      <div style={s.nav}>
        <div style={s.navInner}>
          <div style={s.brand}>
            <div style={s.dot} />
            <div style={s.brandText}>
              <div style={s.brandTitle}>Metal Business Cards Demo</div>
              <div style={s.brandSub}>Premium engraved • laser-etch • high-end</div>
            </div>
          </div>

          <div style={s.navLinks}>
            <a href={telMain} style={s.pill}>
              Main {MAIN_PRETTY}
            </a>
            <a href={telSales} style={{ ...s.pill, ...s.pillPrimary }}>
              Sales {SALES_PRETTY}
            </a>
            <a href={mailtoQuote} style={s.pill}>
              Email Quote
            </a>
          </div>
        </div>
      </div>

      <div style={s.wrap}>
        {/* HERO */}
        <section style={s.gridHero}>
          <div style={{ ...s.heroCard, ...s.heroLeft }}>
            <div style={s.eyebrowRow}>
              <div style={s.chip}>Premium Look</div>
              <div style={s.chip}>Fast turnaround</div>
              <div style={s.chip}>Crisp detail</div>
              <div style={s.chip}>Strong first impression</div>
            </div>

            <h1 style={s.h1}>
              Make your first impression feel{" "}
              <span style={s.accent}>expensive</span>.
            </h1>

            <p style={s.heroP}>
              Metal business cards that people keep. Deep engraving or laser etch,
              clean typography, and premium finishes — designed to look high-end
              and convert conversations into customers.
            </p>

            <div style={s.ctaRow}>
              <a href={telSales} style={{ ...s.btn, ...s.btnPrimary }}>
                Call / Text to Order
              </a>
              <a href={mailtoQuote} style={s.btn}>
                Email for a Quote
              </a>
            </div>

            <div style={s.subRow}>
              <div style={s.stat}>
                <div style={s.statTop}>1–3 Days</div>
                <div style={s.statSub}>Typical proof + production start</div>
              </div>
              <div style={s.stat}>
                <div style={s.statTop}>Premium Finish</div>
                <div style={s.statSub}>Matte / gloss / brushed look</div>
              </div>
              <div style={s.stat}>
                <div style={s.statTop}>High Detail</div>
                <div style={s.statSub}>Tiny text stays sharp</div>
              </div>
            </div>
          </div>

          {/* Right side: configurator + mock */}
          <div style={{ ...s.heroCard, ...s.heroRight }}>
            <div style={s.builder}>
              <div style={s.builderTitle}>Choose a finish</div>
              <div style={s.builderSub}>
                This changes the demo mockups below so it feels like a real product
                page (not a service page).
              </div>

              <div style={s.finishGrid}>
                {finishes.map((f) => {
                  const active = f.key === finish.key;
                  return (
                    <button
                      key={f.key}
                      onClick={() => setFinish(f)}
                      style={{
                        ...s.finishBtn,
                        ...(active ? s.finishBtnActive : {}),
                      }}
                      type="button"
                    >
                      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                        <div
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: 999,
                            background: f.accent,
                            boxShadow: `0 0 20px ${f.glow}`,
                            flexShrink: 0,
                          }}
                        />
                        <div>
                          <div style={s.finishName}>{f.name}</div>
                          <div style={s.finishNote}>{f.note}</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div style={s.uploadRow}>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/png,image/jpeg,image/svg+xml,image/webp"
                  style={{ display: "none" }}
                  onChange={onLogoChange}
                />
                <button type="button" onClick={onPickLogo} style={s.uploadBtn}>
                  Upload Your Logo
                </button>
                <div style={s.uploadHint}>PNG/JPG/SVG</div>
              </div>

              <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  <Field label="Name" value={brandName} onChange={setBrandName} />
                  <Field label="Title" value={title} onChange={setTitle} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  <Field label="Phone" value={phone} onChange={setPhone} />
                  <Field label="Website" value={site} onChange={setSite} />
                </div>
                <Field label="Location" value={city} onChange={setCity} />
              </div>
            </div>

            <div style={s.mockRow}>
              <div style={s.mockCard}>
                <div style={s.mockTop}>
                  <div>
                    <div style={s.mockName}>{brandName.toUpperCase()}</div>
                    <div style={s.mockTitle}>{title}</div>
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 900,
                      padding: "6px 10px",
                      borderRadius: 999,
                      border: `1px solid ${finish.accent}`,
                      color: finish.accent,
                      background: "rgba(255,255,255,.04)",
                      boxShadow: `0 0 0 3px ${finish.glow}`,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {finish.name} Finish
                  </div>
                </div>

                <div style={s.mockMeta}>
                  {phone}
                  <br />
                  {EMAIL}
                  <br />
                  {site} • {city}
                </div>

                <div style={s.logoBox}>
                  {logoUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={logoUrl} alt="Logo preview" style={s.logoImg} />
                  ) : (
                    <div style={{ opacity: 0.7, fontSize: 12, fontWeight: 800 }}>
                      Your logo here
                    </div>
                  )}
                </div>

                <div style={{ marginTop: 10, opacity: 0.6, fontSize: 12 }}>
                  Designed to feel premium.
                </div>
              </div>

              <div style={s.scanBox}>
                <div style={s.scanTitle}>SCAN TO SAVE</div>
                <div style={s.scanSub}>
                  QR + vCard ready
                  <br />✓ QR Code • NFC Option
                </div>
                <ul style={s.list}>
                  <li>Clean typography</li>
                  <li>Sharp edges</li>
                  <li>Demo mockups only — your real design uses your logo + brand colors.</li>
                </ul>

                <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a href={telSales} style={{ ...s.priceBtn, ...s.btnPrimary }}>
                    Text Sales
                  </a>
                  <a href={mailtoQuote} style={s.priceBtn}>
                    Email Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING / PACKAGES */}
        <section style={s.section}>
          <div style={s.sectionCard}>
            <div style={s.sectionInner}>
              <h2 style={s.sectionTitle}>Packages</h2>
              <div style={s.sectionSub}>
                Built to look like a $2,000+ product page: finishes, mockups, trust blocks, and a clear path to checkout.
              </div>

              <div style={s.pricingGrid}>
                <div style={s.priceCard}>
                  <div style={s.priceTop}>
                    <div style={s.priceName}>Starter</div>
                    <div style={s.badge}>Best for first run</div>
                  </div>
                  <div style={s.price}>$299</div>
                  <div style={s.priceSmall}>Design + proof • single finish</div>
                  <ul style={s.ul}>
                    <li>1 card layout + revisions</li>
                    <li>Finish selection</li>
                    <li>Print-ready files</li>
                    <li>Email support</li>
                  </ul>
                  <a href={mailtoQuote} style={s.priceBtn}>
                    Get Starter Quote
                  </a>
                </div>

                <div style={s.priceCard}>
                  <div style={s.priceTop}>
                    <div style={s.priceName}>Pro</div>
                    <div style={{ ...s.badge, border: `1px solid ${finish.accent}` }}>
                      Most Popular
                    </div>
                  </div>
                  <div style={s.price}>$799</div>
                  <div style={s.priceSmall}>Design + mockups • 2 finishes</div>
                  <ul style={s.ul}>
                    <li>2 mockups + finish variants</li>
                    <li>Logo placement + sizing</li>
                    <li>QR / vCard option</li>
                    <li>Priority turnaround</li>
                  </ul>
                  <a href={telSales} style={{ ...s.priceBtn, ...s.btnPrimary }}>
                    Talk to Sales
                  </a>
                </div>

                <div style={s.priceCard}>
                  <div style={s.priceTop}>
                    <div style={s.priceName}>Elite</div>
                    <div style={{ ...s.badge, border: "1px solid rgba(255,205,64,.65)" }}>
                      Premium Option
                    </div>
                  </div>
                  <div style={s.price}>$1,200</div>
                  <div style={s.priceSmall}>Full set • 4 finishes • best polish</div>
                  <ul style={s.ul}>
                    <li>4 finish variants</li>
                    <li>Premium product page layout</li>
                    <li>Conversion-focused CTA sections</li>
                    <li>“High-end” typography + spacing</li>
                  </ul>
                  <a href={mailtoQuote} style={{ ...s.priceBtn, ...s.btnPrimary }}>
                    Build My Elite Set
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={s.section}>
          <div style={s.sectionCard}>
            <div style={s.sectionInner}>
              <h2 style={s.sectionTitle}>FAQ</h2>
              <div style={s.sectionSub}>
                These blocks are here on purpose — they make the page feel like a premium product page and reduce “back and forth” questions.
              </div>

              <div style={s.faqGrid}>
                <div style={s.faq}>
                  <div style={s.faqQ}>Does my logo upload really work?</div>
                  <div style={s.faqA}>
                    Yes — it previews instantly in the mock card. This is a demo version using local preview; production can store the file and generate final mockups.
                  </div>
                </div>
                <div style={s.faq}>
                  <div style={s.faqQ}>Can I change finishes?</div>
                  <div style={s.faqA}>
                    Yep — tap a finish and the accents/glow update. This is exactly the “premium product” feel people expect.
                  </div>
                </div>
                <div style={s.faq}>
                  <div style={s.faqQ}>Can you add NFC / QR?</div>
                  <div style={s.faqA}>
                    Absolutely. We can generate a QR to your website, contact card, or booking page and offer NFC options depending on the card vendor.
                  </div>
                </div>
                <div style={s.faq}>
                  <div style={s.faqQ}>How do I order fast?</div>
                  <div style={s.faqA}>
                    Text Sales and we’ll reply with a quick form. If you prefer email, hit “Email Quote” and it auto-fills the details.
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href={telSales} style={{ ...s.btn, ...s.btnPrimary }}>
                  Text Sales {SALES_PRETTY}
                </a>
                <a href={mailtoQuote} style={s.btn}>
                  Email Quote
                </a>
                <a href={telMain} style={s.btn}>
                  Call Main {MAIN_PRETTY}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={s.footer}>
          <div>© {new Date().getFullYear()} Atlas Digital Lab — Websites • SEO • Branding</div>
          <div>
            Main: {MAIN_PRETTY} • Sales: {SALES_PRETTY} • {EMAIL}
          </div>
        </footer>
      </div>

      {/* Simple responsive CSS (no styled-jsx) */}
      <style>{`
        @media (max-width: 980px) {
          ._hideDesktop { display: none !important; }
        }
      `}</style>

      {/* Global responsive via style tag (still not styled-jsx) */}
      <style>{`
        @media (max-width: 980px) {
          .pageWrap { padding: 18px 14px 56px !important; }
        }
      `}</style>

      {/* More practical responsiveness using plain <style> */}
      <style>{`
        @media (max-width: 980px) {
          main { }
        }
        @media (max-width: 980px) {
          /* hero becomes stacked */
          section[style*="grid-template-columns: 1.05fr .95fr"] {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 980px) {
          /* pricing to one column */
          div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 980px) {
          /* faq to one column */
          div[style*="grid-template-columns: repeat(2"] {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 980px) {
          /* mock row to one column */
          div[style*="grid-template-columns: 1fr 1fr"][style*="gap: 12px"] {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          /* nav pills wrap nicer */
          a[style*="border-radius: 999px"] {
            padding: 10px 12px !important;
          }
          /* big headline */
          h1 {
            font-size: 40px !important;
          }
          /* hero stats stack */
          div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
          /* buttons full width */
          a[style*="min-width: 180px"], button[style*="min-width: 180px"] {
            min-width: 0 !important;
            width: 100% !important;
          }
        }
      `}</style>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const wrap: React.CSSProperties = {
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,.10)",
    background: "rgba(255,255,255,.05)",
    padding: 10,
  };
  const lab: React.CSSProperties = {
    fontSize: 11,
    opacity: 0.72,
    fontWeight: 900,
    marginBottom: 6,
  };
  const input: React.CSSProperties = {
    width: "100%",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(0,0,0,.25)",
    color: "rgba(235,245,255,.92)",
    padding: "10px 10px",
    outline: "none",
    fontWeight: 800,
    fontSize: 13,
  };

  return (
    <div style={wrap}>
      <div style={lab}>{label}</div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={input}
      />
    </div>
  );
}