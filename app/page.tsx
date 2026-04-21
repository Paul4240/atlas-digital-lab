"use client";

import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const MAIN_PHONE = "3463657906";
  const MAIN_PRETTY = "(346) 365-7906";

  const SALES = [
    { phone: "8326845270", pretty: "(832) 684-5270" },
    { phone: "8326773150", pretty: "(832) 677-3150" },
    { phone: "3465328803", pretty: "(346) 532-8803" },
  ];

  const EMAIL = "hello@atlasdigitallab.com";

  const [form, setForm] = useState({
    businessName: "",
    contactName: "",
    phone: "",
    email: "",
    city: "",
    niche: "",
    website: "",
    notes: "",
  });

  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/preview-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        alert("Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }

      alert("Request sent successfully. Check your Google Sheet.");

      setForm({
        businessName: "",
        contactName: "",
        phone: "",
        email: "",
        city: "",
        niche: "",
        website: "",
        notes: "",
      });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main style={styles.page}>
      <div style={styles.glowA} />
      <div style={styles.glowB} />
      <div style={styles.starWrap} aria-hidden>
        <div style={styles.star}>★</div>
      </div>

      <div style={styles.container}>
        {/* TOP BAR */}
        <header style={styles.topbar}>
          <div style={styles.topbarInner}>
            <Link href="/" style={styles.brand}>
              <div style={styles.brandMark}>★</div>
              <div>
                <div style={styles.brandName}>Atlas Digital Lab</div>
                <div style={styles.brandSub}>
                  Websites • SEO • Small Business Growth
                </div>
              </div>
            </Link>

            <nav style={styles.nav} className="hideOnMobile">
              <a href="#services" style={styles.navLink}>
                Services
              </a>
              <a href="#preview-request" style={styles.navLink}>
                Free Preview
              </a>
              <a href="#demos" style={styles.navLink}>
                Demos
              </a>
              <a href="#pricing" style={styles.navLink}>
                Pricing
              </a>
              <Link href="/houston-web-design" style={styles.navLink}>
                Houston SEO
              </Link>
            </nav>

            <div style={styles.topActions} className="hideOnMobile">
              <a href={`tel:${MAIN_PHONE}`} style={styles.topBtn}>
                Call {MAIN_PRETTY}
              </a>
              <a href={`mailto:${EMAIL}`} style={styles.topBtnGold}>
                Get a Quote
              </a>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section style={styles.heroGrid} className="heroGrid">
          <div>
            <div style={styles.kicker}>
              HOUSTON • SMALL BUSINESS WEBSITES • FAST TURNAROUND
            </div>

            <h1 style={styles.heroTitle}>
              Turn your website into something that actually brings you calls.
            </h1>

            <p style={styles.heroCopy}>
              Clean presentation, stronger trust, and sharper structure so your
              business feels more serious the second somebody lands on your
              site.
            </p>

            <div style={styles.ctaRow}>
              <a href={`tel:${SALES[0].phone}`} style={styles.goldBtn}>
                Call / Text Sales
              </a>
              <a href="#demos" style={styles.darkBtn}>
                See Real Examples
              </a>
              <a href={`mailto:${EMAIL}`} style={styles.darkBtn}>
                Get a Quote
              </a>
            </div>

            <div style={styles.salesBlock}>
              <div style={styles.smallKicker}>Sales Team</div>
              <div style={styles.salesRow}>
                {SALES.map((s) => (
                  <a key={s.phone} href={`tel:${s.phone}`} style={styles.salesChip}>
                    Sales {s.pretty}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div style={styles.heroPanel}>
            <div style={styles.smallKicker}>ATLAS DIGITAL LAB</div>
            <h2 style={styles.panelTitle}>
              A cleaner, more custom presentation for serious businesses.
            </h2>

            <div style={styles.panelList}>
              <div>
                <div style={styles.panelHead}>Stronger first impression</div>
                <p style={styles.panelText}>
                  Better spacing and cleaner hierarchy make your business look
                  more established.
                </p>
              </div>

              <div>
                <div style={styles.panelHead}>More trust from the first click</div>
                <p style={styles.panelText}>
                  People take a company more seriously when the site feels
                  sharper and more complete.
                </p>
              </div>

              <div>
                <div style={styles.panelHead}>Built to convert better</div>
                <p style={styles.panelText}>
                  Clearer sections and stronger call-to-action flow help turn
                  more visitors into leads.
                </p>
              </div>
            </div>

            <a href="#preview-request" style={styles.fullGoldBtn}>
              Request a Free Preview
            </a>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" style={styles.section}>
          <div style={styles.sectionHead} className="sectionHead">
            <div>
              <div style={styles.smallKicker}>SERVICES</div>
              <h2 style={styles.sectionTitle}>
                Built to help businesses look stronger online.
              </h2>
            </div>

            <p style={styles.sectionCopy}>
              We build websites that feel more premium and more custom than the
              average small business site.
            </p>
          </div>

          <div style={styles.serviceList}>
            <div style={styles.serviceRow} className="serviceRow">
              <div style={styles.serviceNumber}>01</div>
              <div>
                <h3 style={styles.serviceTitle}>Website Design</h3>
                <p style={styles.serviceText}>
                  Modern layout, better spacing, cleaner hierarchy, and a
                  sharper first impression.
                </p>
              </div>
              <div style={styles.tagRow}>
                <span style={styles.tag}>Mobile-first</span>
                <span style={styles.tag}>Premium feel</span>
                <span style={styles.tag}>Clear lead flow</span>
              </div>
            </div>

            <div style={styles.serviceRow} className="serviceRow">
              <div style={styles.serviceNumber}>02</div>
              <div>
                <h3 style={styles.serviceTitle}>SEO & Google Setup</h3>
                <p style={styles.serviceText}>
                  Search-ready structure that helps local businesses show up
                  stronger in maps and Google.
                </p>
              </div>
              <div style={styles.tagRow}>
                <span style={styles.tag}>On-page SEO</span>
                <span style={styles.tag}>Google help</span>
                <span style={styles.tag}>Local focus</span>
              </div>
            </div>

            <div style={styles.serviceRow} className="serviceRow">
              <div style={styles.serviceNumber}>03</div>
              <div>
                <h3 style={styles.serviceTitle}>Brand Presentation</h3>
                <p style={styles.serviceText}>
                  Sharper online presentation that helps your company feel more
                  legit and more valuable.
                </p>
              </div>
              <div style={styles.tagRow}>
                <span style={styles.tag}>Visual polish</span>
                <span style={styles.tag}>More trust</span>
                <span style={styles.tag}>Better positioning</span>
              </div>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section style={styles.section}>
          <div style={styles.smallKicker}>WHY THIS MATTERS</div>
          <h2 style={styles.sectionTitle}>
            Most small business websites look outdated, cluttered, or cheap.
          </h2>
          <p style={{ ...styles.sectionCopy, maxWidth: 760 }}>
            We fix that. The goal is simple — make your business look like the
            obvious choice the moment somebody lands on your page.
          </p>
        </section>

        {/* FREE PREVIEW REQUEST */}
        <section id="preview-request" style={styles.section}>
          <div style={styles.builderWrap} className="builderWrap">
            <div>
              <div style={styles.smallKicker}>FREE PREVIEW REQUEST</div>
              <h2 style={styles.builderTitle}>
                Send us your business info and we’ll look at a preview direction
                for your website.
              </h2>
              <p style={styles.builderCopy}>
                Fill this out and it sends straight into your request system so
                we can review it and build from what they entered.
              </p>

              <div style={styles.builderList}>
                <div style={styles.builderItem}>
                  Easy for customers to fill out
                </div>
                <div style={styles.builderItem}>
                  Saves every request for you to review
                </div>
                <div style={styles.builderItem}>
                  
                </div>
              </div>
            </div>
               Simple for businesses to request a preview
            <div style={styles.formPanel}>
              <div style={styles.builderPreviewKicker}>REQUEST DETAILS</div>

              <form onSubmit={handleSubmit} style={styles.formGrid}>
                <input
                  name="businessName"
                  placeholder="Business name"
                  value={form.businessName}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
                <input
                  name="contactName"
                  placeholder="Contact name"
                  value={form.contactName}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
                <input
                  name="phone"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={handleChange}
                  style={styles.input}
                />
                <input
                  name="email"
                  placeholder="Email address"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
                <input
                  name="city"
                  placeholder="City / service area"
                  value={form.city}
                  onChange={handleChange}
                  style={styles.input}
                />
                <input
                  name="niche"
                  placeholder="Business type / niche"
                  value={form.niche}
                  onChange={handleChange}
                  style={styles.input}
                />
                <input
                  name="website"
                  placeholder="Current website / Facebook / Instagram"
                  value={form.website}
                  onChange={handleChange}
                  style={{ ...styles.input, gridColumn: "1 / -1" }}
                />
                <textarea
                  name="notes"
                  placeholder="What kind of look do they want? Any notes, colors, examples, services, or goals?"
                  value={form.notes}
                  onChange={handleChange}
                  style={styles.textarea}
                  rows={6}
                />

                <button type="submit" style={styles.submitBtn} disabled={submitting}>
                  {submitting ? "Sending..." : "Send Request"}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* DEMOS */}
        <section id="demos" style={styles.section}>
          <div style={styles.sectionHead} className="sectionHead">
            <div>
              <div style={styles.smallKicker}>DEMOS</div>
              <h2 style={styles.sectionTitle}>Real directions we can build from.</h2>
            </div>

            <p style={styles.sectionCopy}>
              Different niches need different presentation styles. These demos
              show the direction we can build around your business.
            </p>
          </div>

          <div style={styles.demoGrid} className="demoGrid">
            <Link href="/demo/pet-bakery" style={styles.demoFeature}>
              <div style={styles.demoBadge}>Flagship Demo</div>
              <h3 style={styles.demoFeatureTitle}>Pet Bakery Demo</h3>
              <p style={styles.demoText}>
                Boutique storefront direction with stronger warmth, better
                product presentation, and a more polished visual flow.
              </p>
              <span style={styles.demoOpen}>Open Demo</span>
            </Link>

            <div style={styles.demoSideList}>
              <Link href="/demo/home-styling" style={styles.demoTile}>
                <strong style={styles.demoTileTitle}>Luxury Interior Styling</strong>
                <small style={styles.demoTileText}>
                  Elegant, image-led residential presentation.
                </small>
                <span style={styles.demoOpen}>Open Demo</span>
              </Link>

              <Link href="/demo/roofing" style={styles.demoTile}>
                <strong style={styles.demoTileTitle}>Roofing Demo</strong>
                <small style={styles.demoTileText}>
                  Trust-based local service structure.
                </small>
                <span style={styles.demoOpen}>Open Demo</span>
              </Link>

              <Link href="/demo/metal-cards" style={styles.demoTile}>
                <strong style={styles.demoTileTitle}>Metal Cards Demo</strong>
                <small style={styles.demoTileText}>
                  Product-style layout with stronger offer flow.
                </small>
                <span style={styles.demoOpen}>Open Demo</span>
              </Link>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" style={styles.section}>
          <div style={styles.sectionHead} className="sectionHead">
            <div>
              <div style={styles.smallKicker}>PRICING</div>
              <h2 style={styles.sectionTitle}>
                Simple pricing for businesses ready to look more established.
              </h2>
            </div>

            <p style={styles.sectionCopy}>
              Better websites help your company feel more trusted, more valuable,
              and more worth contacting.
            </p>
          </div>

          <div style={styles.pricingBanner}>
            Most businesses choose Pro ($799) or Elite ($1,200)
          </div>

          <div style={styles.pricingGrid} className="pricingGrid">
            <div style={styles.priceCard}>
              <div style={styles.plan}>Starter</div>
              <div style={styles.price}>$299</div>
              <div style={styles.monthly}>$80/mo</div>
              <p style={styles.priceText}>
                Clean single-page website designed to make your business look
                legit and ready for customers.
              </p>
            </div>

            <div style={styles.priceCard}>
              <div style={styles.plan}>Growth</div>
              <div style={styles.price}>$499</div>
              <div style={styles.monthly}>$130/mo</div>
              <p style={styles.priceText}>
                Multi-section layout with stronger structure, trust sections,
                and better flow for conversions.
              </p>
            </div>

            <div style={styles.priceCardFeatured}>
              <div style={styles.smallTag}>Most Popular</div>
              <div style={styles.plan}>Pro</div>
              <div style={styles.price}>$799</div>
              <div style={styles.monthly}>$150/mo</div>
              <p style={styles.priceText}>
                Stronger positioning with advanced SEO setup and a more refined,
                high-converting design.
              </p>
            </div>

            <div style={styles.priceCardElite}>
              <div style={styles.smallTagGold}>Best Results</div>
              <div style={styles.planDark}>Elite</div>
              <div style={styles.priceDark}>$1,200</div>
              <div style={styles.monthlyDark}>$200/mo</div>
              <p style={styles.priceTextDark}>
                Full custom build designed to make your business look high-end
                and stand out instantly.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section style={styles.section}>
          <h2 style={{ ...styles.sectionTitle, textAlign: "center" }}>
            Want your company to look this sharp online?
          </h2>

          <div style={styles.finalActions}>
            <a href={`mailto:${EMAIL}`} style={styles.goldBtn}>
              Email Us
            </a>
            <a href={`tel:${MAIN_PHONE}`} style={styles.darkBtn}>
              Call {MAIN_PRETTY}
            </a>
          </div>
        </section>
      </div>

      <style jsx>{`
        @media (max-width: 1080px) {
          .heroGrid,
          .sectionHead,
          .demoGrid,
          .pricingGrid,
          .builderWrap {
            grid-template-columns: 1fr !important;
          }

          .serviceRow {
            grid-template-columns: 80px 1fr !important;
          }

          .hideOnMobile {
            display: none !important;
          }
        }

        @media (max-width: 760px) {
          .heroGrid,
          .sectionHead,
          .demoGrid,
          .pricingGrid,
          .builderWrap {
            grid-template-columns: 1fr !important;
          }

          .serviceRow {
            grid-template-columns: 1fr !important;
          }

          .hideOnMobile {
            display: none !important;
          }
        }
      `}</style>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, rgba(216,180,79,0.08), transparent 22%), linear-gradient(180deg, #060b14 0%, #08101b 50%, #050a12 100%)",
    color: "#f4efe4",
    fontFamily: 'Georgia, "Times New Roman", serif',
    position: "relative",
    overflowX: "hidden",
  },

  glowA: {
    position: "fixed",
    width: 260,
    height: 260,
    top: 70,
    left: -120,
    borderRadius: 999,
    filter: "blur(90px)",
    background: "rgba(216,180,79,0.5)",
    opacity: 0.14,
    pointerEvents: "none",
  },

  glowB: {
    position: "fixed",
    width: 280,
    height: 280,
    right: -100,
    bottom: 120,
    borderRadius: 999,
    filter: "blur(90px)",
    background: "rgba(44,74,124,0.5)",
    opacity: 0.14,
    pointerEvents: "none",
  },

  starWrap: {
    position: "fixed",
    right: -10,
    top: 130,
    width: 640,
    height: 640,
    opacity: 0.44,
    pointerEvents: "none",
    zIndex: 0,
  },

  star: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(216, 180, 79, 0.28)",
    fontSize: 260,
    lineHeight: 1,
  },

  container: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "0 24px 80px",
    position: "relative",
    zIndex: 2,
  },

  topbar: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(6, 11, 20, 0.72)",
    backdropFilter: "blur(14px)",
  },

  topbarInner: {
    minHeight: 76,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 18,
  },

  brand: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    textDecoration: "none",
    color: "#f4efe4",
  },

  brandMark: {
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    background: "rgba(216,180,79,0.12)",
    color: "#d8b44f",
    fontSize: 18,
    boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
  },

  brandName: {
    fontFamily: "Arial, sans-serif",
    fontSize: 15,
    fontWeight: 800,
  },

  brandSub: {
    fontFamily: "Arial, sans-serif",
    fontSize: 12,
    color: "#b8c2cf",
  },

  nav: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    flexWrap: "wrap",
  },

  navLink: {
    fontFamily: "Arial, sans-serif",
    textDecoration: "none",
    color: "#e3e8ef",
    fontSize: 14,
    fontWeight: 700,
  },

  topActions: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    flexWrap: "wrap",
  },

  topBtn: {
    fontFamily: "Arial, sans-serif",
    textDecoration: "none",
    fontWeight: 700,
    padding: "13px 18px",
    borderRadius: 12,
    color: "#f4efe4",
    background: "rgba(255,255,255,0.05)",
  },

  topBtnGold: {
    fontFamily: "Arial, sans-serif",
    textDecoration: "none",
    fontWeight: 700,
    padding: "13px 18px",
    borderRadius: 12,
    background: "linear-gradient(135deg, #e1c15f, #c89e2c)",
    color: "#111",
    boxShadow: "0 12px 34px rgba(216,180,79,0.16)",
  },

  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.08fr 0.92fr",
    gap: 44,
    alignItems: "start",
    paddingTop: 42,
  },

  kicker: {
    fontFamily: "Arial, sans-serif",
    fontSize: 12,
    letterSpacing: "0.12em",
    fontWeight: 800,
    color: "#d8b44f",
    marginBottom: 16,
  },

  heroTitle: {
    margin: "0 0 22px",
    fontSize: "clamp(52px, 7vw, 84px)",
    lineHeight: 0.97,
    letterSpacing: "-0.04em",
    maxWidth: "9ch",
  },

  heroCopy: {
    fontFamily: "Arial, sans-serif",
    color: "#bcc6d4",
    lineHeight: 1.65,
    fontSize: 17,
    maxWidth: 620,
    margin: "0 0 22px",
  },

  ctaRow: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    flexWrap: "wrap",
  },

  goldBtn: {
    fontFamily: "Arial, sans-serif",
    textDecoration: "none",
    fontWeight: 700,
    padding: "13px 18px",
    borderRadius: 12,
    background: "linear-gradient(135deg, #e1c15f, #c89e2c)",
    color: "#111",
    boxShadow: "0 12px 34px rgba(216,180,79,0.16)",
  },

  darkBtn: {
    fontFamily: "Arial, sans-serif",
    textDecoration: "none",
    fontWeight: 700,
    padding: "13px 18px",
    borderRadius: 12,
    color: "#f4efe4",
    background: "rgba(255,255,255,0.055)",
  },

  salesBlock: {
    marginTop: 18,
  },

  smallKicker: {
    fontFamily: "Arial, sans-serif",
    fontSize: 12,
    letterSpacing: "0.12em",
    fontWeight: 800,
    color: "#d8b44f",
    marginBottom: 16,
  },

  salesRow: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    flexWrap: "wrap",
  },

  salesChip: {
    fontFamily: "Arial, sans-serif",
    textDecoration: "none",
    fontWeight: 700,
    color: "#eef3fb",
    background: "rgba(255,255,255,0.05)",
    padding: "10px 14px",
    borderRadius: 999,
    fontSize: 13,
    boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
  },

  heroPanel: {
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025))",
    boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
    padding: "34px 32px",
    borderRadius: 32,
  },

  panelTitle: {
    margin: "0 0 14px",
    fontSize: 38,
    lineHeight: 1.02,
    letterSpacing: "-0.03em",
  },

  panelList: {
    display: "grid",
    gap: 18,
    margin: "22px 0 24px",
  },

  panelHead: {
    display: "block",
    fontFamily: "Arial, sans-serif",
    fontSize: 15,
    marginBottom: 6,
    fontWeight: 700,
  },

  panelText: {
    margin: 0,
    fontFamily: "Arial, sans-serif",
    color: "#bcc6d4",
    fontSize: 14,
    lineHeight: 1.6,
  },

  fullGoldBtn: {
    width: "100%",
    textAlign: "center",
    display: "block",
    fontFamily: "Arial, sans-serif",
    textDecoration: "none",
    fontWeight: 700,
    padding: "13px 18px",
    borderRadius: 12,
    background: "linear-gradient(135deg, #e1c15f, #c89e2c)",
    color: "#111",
    boxShadow: "0 12px 34px rgba(216,180,79,0.16)",
  },

  section: {
    marginTop: 92,
  },

  sectionHead: {
    display: "grid",
    gridTemplateColumns: "1fr 0.9fr",
    gap: 28,
    alignItems: "end",
    marginBottom: 28,
  },

  sectionTitle: {
    margin: 0,
    fontSize: "clamp(38px, 4vw, 56px)",
    lineHeight: 1.04,
    letterSpacing: "-0.03em",
  },

  sectionCopy: {
    fontFamily: "Arial, sans-serif",
    color: "#bcc6d4",
    lineHeight: 1.65,
    fontSize: 17,
  },

  serviceList: {
    display: "grid",
    gap: 18,
  },

  serviceRow: {
    display: "grid",
    gridTemplateColumns: "80px 1fr 0.95fr",
    gap: 22,
    alignItems: "start",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))",
    borderRadius: 22,
    padding: 22,
  },

  serviceNumber: {
    fontSize: 38,
    lineHeight: 1,
    color: "#d8b44f",
    fontWeight: 700,
  },

  serviceTitle: {
    margin: "0 0 10px",
    fontSize: 30,
    lineHeight: 1.05,
  },

  serviceText: {
    margin: 0,
    fontFamily: "Arial, sans-serif",
    color: "#bcc6d4",
    lineHeight: 1.65,
    fontSize: 17,
  },

  tagRow: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    alignSelf: "center",
  },

  tag: {
    fontFamily: "Arial, sans-serif",
    fontSize: 13,
    fontWeight: 700,
    color: "#dbe2ec",
    padding: "9px 12px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.05)",
  },

  builderWrap: {
    display: "grid",
    gridTemplateColumns: "1.04fr 0.96fr",
    gap: 22,
    alignItems: "stretch",
  },

  builderTitle: {
    margin: "0 0 14px",
    fontSize: "clamp(38px, 4.6vw, 58px)",
    lineHeight: 1.02,
    letterSpacing: "-0.03em",
    maxWidth: 760,
  },

  builderCopy: {
    margin: "0 0 18px",
    fontFamily: "Arial, sans-serif",
    color: "#bcc6d4",
    lineHeight: 1.7,
    fontSize: 17,
    maxWidth: 700,
  },

  builderList: {
    display: "grid",
    gap: 12,
    marginTop: 20,
  },

  builderItem: {
    fontFamily: "Arial, sans-serif",
    color: "#eef3fb",
    background: "rgba(255,255,255,0.045)",
    padding: "14px 16px",
    borderRadius: 18,
    boxShadow: "0 14px 34px rgba(0,0,0,0.12)",
    fontWeight: 700,
  },

  formPanel: {
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(111,182,255,0.06))",
    boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
    borderRadius: 30,
    padding: 28,
  },

  builderPreviewKicker: {
    fontFamily: "Arial, sans-serif",
    fontSize: 12,
    letterSpacing: "0.12em",
    fontWeight: 800,
    color: "#abd5ff",
    marginBottom: 16,
  },

  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
  },

  input: {
    width: "100%",
    fontFamily: "Arial, sans-serif",
    fontSize: 15,
    color: "#f4efe4",
    background: "rgba(255,255,255,0.06)",
    border: "none",
    outline: "none",
    borderRadius: 16,
    padding: "15px 16px",
    boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
  },

  textarea: {
    gridColumn: "1 / -1",
    width: "100%",
    resize: "vertical",
    fontFamily: "Arial, sans-serif",
    fontSize: 15,
    color: "#f4efe4",
    background: "rgba(255,255,255,0.06)",
    border: "none",
    outline: "none",
    borderRadius: 16,
    padding: "15px 16px",
    boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
  },

  submitBtn: {
    gridColumn: "1 / -1",
    fontFamily: "Arial, sans-serif",
    fontWeight: 700,
    fontSize: 15,
    padding: "15px 18px",
    borderRadius: 16,
    border: "none",
    outline: "none",
    cursor: "pointer",
    background: "linear-gradient(135deg, #e1c15f, #c89e2c)",
    color: "#111",
    boxShadow: "0 12px 34px rgba(216,180,79,0.16)",
  },

  demoGrid: {
    display: "grid",
    gridTemplateColumns: "1.08fr 1fr",
    gap: 18,
    alignItems: "stretch",
  },

  demoSideList: {
    display: "grid",
    gap: 18,
  },

  demoFeature: {
    textDecoration: "none",
    color: "#f4efe4",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025))",
    boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
    borderRadius: 32,
    padding: 34,
    minHeight: 420,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  demoBadge: {
    width: "fit-content",
    fontFamily: "Arial, sans-serif",
    fontSize: 12,
    fontWeight: 800,
    borderRadius: 999,
    padding: "7px 10px",
    background: "rgba(111,182,255,0.14)",
    color: "#abd5ff",
    marginBottom: 18,
  },

  demoFeatureTitle: {
    margin: "0 0 12px",
    fontSize: 42,
    lineHeight: 1.02,
    letterSpacing: "-0.03em",
  },

  demoText: {
    margin: "0 0 18px",
    maxWidth: 540,
    fontFamily: "Arial, sans-serif",
    color: "#bcc6d4",
    lineHeight: 1.65,
    fontSize: 17,
  },

  demoTile: {
    textDecoration: "none",
    color: "#f4efe4",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025))",
    boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
    borderRadius: 24,
    minHeight: 128,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 24,
  },

  demoTileTitle: {
    fontSize: 30,
    lineHeight: 1.05,
    marginBottom: 8,
  },

  demoTileText: {
    marginBottom: 10,
    fontFamily: "Arial, sans-serif",
    color: "#bcc6d4",
    lineHeight: 1.65,
    fontSize: 17,
  },

  demoOpen: {
    fontFamily: "Arial, sans-serif",
    color: "#d8b44f",
    fontSize: 14,
    fontWeight: 700,
  },

  pricingBanner: {
    display: "inline-block",
    marginBottom: 22,
    fontFamily: "Arial, sans-serif",
    color: "#d8b44f",
    background: "rgba(216,180,79,0.08)",
    padding: "10px 14px",
    borderRadius: 999,
    fontSize: 14,
  },

  pricingGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 18,
  },

  priceCard: {
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025))",
    boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
    borderRadius: 24,
    padding: 24,
    minHeight: 250,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  priceCardFeatured: {
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(111,182,255,0.07))",
    boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
    borderRadius: 24,
    padding: 24,
    minHeight: 250,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  priceCardElite: {
    background: "linear-gradient(135deg, #e1c15f, #c89e2c)",
    boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
    borderRadius: 24,
    padding: 24,
    minHeight: 250,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    color: "#17120a",
  },

  smallTag: {
    width: "fit-content",
    fontFamily: "Arial, sans-serif",
    fontSize: 12,
    fontWeight: 800,
    borderRadius: 999,
    padding: "7px 10px",
    background: "rgba(255,255,255,0.08)",
    color: "#eef3fb",
    marginBottom: 10,
  },

  smallTagGold: {
    width: "fit-content",
    fontFamily: "Arial, sans-serif",
    fontSize: 12,
    fontWeight: 800,
    borderRadius: 999,
    padding: "7px 10px",
    background: "rgba(23,18,10,0.14)",
    color: "#17120a",
    marginBottom: 10,
  },

  plan: {
    fontSize: 30,
    lineHeight: 1.04,
    marginBottom: 10,
  },

  planDark: {
    fontSize: 30,
    lineHeight: 1.04,
    marginBottom: 10,
    color: "#17120a",
  },

  price: {
    fontSize: 56,
    lineHeight: 1,
    marginBottom: 10,
    letterSpacing: "-0.03em",
  },

  priceDark: {
    fontSize: 56,
    lineHeight: 1,
    marginBottom: 10,
    letterSpacing: "-0.03em",
    color: "#17120a",
  },

  monthly: {
    fontFamily: "Arial, sans-serif",
    color: "#bcc6d4",
    lineHeight: 1.65,
    fontSize: 15,
    marginBottom: 12,
  },

  monthlyDark: {
    fontFamily: "Arial, sans-serif",
    color: "#2d2414",
    lineHeight: 1.65,
    fontSize: 15,
    marginBottom: 12,
  },

  priceText: {
    fontFamily: "Arial, sans-serif",
    color: "#bcc6d4",
    lineHeight: 1.65,
    fontSize: 17,
  },

  priceTextDark: {
    fontFamily: "Arial, sans-serif",
    color: "#2d2414",
    lineHeight: 1.65,
    fontSize: 17,
  },

  finalActions: {
    marginTop: 18,
    display: "flex",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};