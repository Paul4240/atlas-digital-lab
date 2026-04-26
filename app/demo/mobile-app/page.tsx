"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileAppDemoPage() {
  const PHONE = "3463657906";
  const PHONE_PRETTY = "(346) 365-7906";
  const EMAIL = "hello@atlasdigitallab.com";

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    notes: "",
  });

  function updateForm(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function sendRequest(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent("Mobile App Demo Request");
    const body = encodeURIComponent(
      `Name: ${form.name}\nBusiness: ${form.business}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nNotes:\n${form.notes}`
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <main style={styles.page}>
      {showForm && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <button style={styles.closeBtn} onClick={() => setShowForm(false)}>
              ×
            </button>

            <div style={styles.kicker}>REQUEST YOUR APP DEMO</div>
            <h2 style={styles.modalTitle}>Want this for your business?</h2>
            <p style={styles.modalCopy}>
              Send us your info and we’ll look at what a branded app could look
              like for your company.
            </p>

            <form onSubmit={sendRequest} style={styles.form}>
              <input
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={updateForm}
                style={styles.input}
                required
              />
              <input
                name="business"
                placeholder="Business name"
                value={form.business}
                onChange={updateForm}
                style={styles.input}
                required
              />
              <input
                name="phone"
                placeholder="Phone number"
                value={form.phone}
                onChange={updateForm}
                style={styles.input}
              />
              <input
                name="email"
                placeholder="Email address"
                type="email"
                value={form.email}
                onChange={updateForm}
                style={styles.input}
                required
              />
              <textarea
                name="notes"
                placeholder="What kind of app do you want? Booking, orders, loyalty, offers, customer accounts, etc."
                value={form.notes}
                onChange={updateForm}
                style={styles.textarea}
                rows={5}
              />
              <button type="submit" style={styles.submitBtn}>
                Request My App Demo
              </button>
            </form>
          </div>
        </div>
      )}

      <section style={styles.hero}>
        <div>
          <Link href="/" style={styles.backLink}>
            ← Back to Atlas
          </Link>

          <div style={styles.kicker}>MOBILE APP DEMO</div>

          <h1 style={styles.title}>
            A branded business app your customers can keep in their pocket.
          </h1>

          <p style={styles.copy}>
            This demo shows how a company app could help customers book, order,
            contact, view offers, and stay connected with the brand.
          </p>

          <div style={styles.actions}>
            <button onClick={() => setShowForm(true)} style={styles.goldBtn}>
              Request an App Demo
            </button>
            <a href={`tel:${PHONE}`} style={styles.darkBtn}>
              Call / Text {PHONE_PRETTY}
            </a>
          </div>
        </div>

        <div style={styles.phoneShell}>
          <div style={styles.phoneTop}>
            <div>
              <div style={styles.phoneTiny}>PREMIUM LOCAL BUSINESS</div>
              <div style={styles.phoneBrand}>Atlas Demo Brand</div>
            </div>
            <div style={styles.callPill}>Call</div>
          </div>

          <div style={styles.phoneBody}>
            <div style={styles.appKicker}>BRANDED MOBILE APP</div>

            <h2 style={styles.phoneHeadline}>
              Built to impress customers and bring them back.
            </h2>

            <p style={styles.phoneCopy}>
              Booking, orders, offers, support, and loyalty in one clean mobile
              experience.
            </p>

            <button onClick={() => setShowForm(true)} style={styles.phoneCta}>
              Launch This App
            </button>

            <div style={styles.quickGrid}>
              <div style={styles.quickCard}>
                <div style={styles.dot} />
                <strong>Book</strong>
              </div>
              <div style={styles.quickCard}>
                <div style={styles.dot} />
                <strong>Order</strong>
              </div>
              <div style={styles.quickCard}>
                <div style={styles.dot} />
                <strong>Offers</strong>
              </div>
              <div style={styles.quickCard}>
                <div style={styles.dot} />
                <strong>Support</strong>
              </div>
            </div>

            <div style={styles.featureBox}>
              <div style={styles.appKicker}>CUSTOMER RETENTION</div>
              <h3 style={styles.featureTitle}>Keep customers coming back.</h3>
              <p style={styles.featureText}>
                Send offers, simplify reorders, and give customers a faster way
                to reach the business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionHead}>
          <div>
            <div style={styles.kicker}>WHAT THE APP CAN INCLUDE</div>
            <h2 style={styles.sectionTitle}>Built around real business needs.</h2>
          </div>

          <p style={styles.sectionCopy}>
            Every business is different, but the goal stays the same: easier
            customer action, stronger brand trust, and better repeat business.
          </p>
        </div>

        <div style={styles.cards}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Booking / Requests</h3>
            <p style={styles.cardText}>
              Let customers request appointments, quotes, consultations, or
              service calls.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Products / Orders</h3>
            <p style={styles.cardText}>
              Show services, products, packages, menus, or reorder options in a
              clean mobile layout.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Offers / Loyalty</h3>
            <p style={styles.cardText}>
              Give customers a reason to come back with rewards, promos, and
              exclusive app offers.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>One-Tap Contact</h3>
            <p style={styles.cardText}>
              Make it simple to call, text, email, or request support from the
              app.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.pricingBox}>
        <div>
          <div style={styles.kicker}>APP PACKAGES</div>
          <h2 style={styles.sectionTitle}>Apps from $999</h2>
          <p style={styles.sectionCopy}>
            Start with a branded app demo or pair a full app build with a new
            website package.
          </p>
        </div>

        <button onClick={() => setShowForm(true)} style={styles.goldBtn}>
          Request Pricing
        </button>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, rgba(216,180,79,0.12), transparent 24%), linear-gradient(180deg, #060b14 0%, #08101b 50%, #050a12 100%)",
    color: "#f4efe4",
    fontFamily: 'Georgia, "Times New Roman", serif',
    padding: "28px 24px 80px",
  },

  hero: {
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 430px",
    gap: 42,
    alignItems: "center",
  },

  backLink: {
    display: "inline-block",
    marginBottom: 32,
    color: "#d8b44f",
    textDecoration: "none",
    fontFamily: "Arial, sans-serif",
    fontWeight: 800,
  },

  kicker: {
    fontFamily: "Arial, sans-serif",
    fontSize: 12,
    letterSpacing: "0.14em",
    fontWeight: 900,
    color: "#d8b44f",
    marginBottom: 16,
  },

  title: {
    margin: "0 0 22px",
    fontSize: "clamp(48px, 7vw, 82px)",
    lineHeight: 0.96,
    letterSpacing: "-0.05em",
    maxWidth: 780,
  },

  copy: {
    fontFamily: "Arial, sans-serif",
    color: "#bcc6d4",
    lineHeight: 1.7,
    fontSize: 18,
    maxWidth: 650,
    marginBottom: 24,
  },

  actions: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
  },

  goldBtn: {
    fontFamily: "Arial, sans-serif",
    textDecoration: "none",
    fontWeight: 800,
    padding: "14px 18px",
    borderRadius: 14,
    background: "linear-gradient(135deg, #e1c15f, #c89e2c)",
    color: "#111",
    boxShadow: "0 12px 34px rgba(216,180,79,0.16)",
    border: "none",
    cursor: "pointer",
    fontSize: 15,
  },

  darkBtn: {
    fontFamily: "Arial, sans-serif",
    textDecoration: "none",
    fontWeight: 800,
    padding: "14px 18px",
    borderRadius: 14,
    color: "#f4efe4",
    background: "rgba(255,255,255,0.06)",
  },

  phoneShell: {
    borderRadius: 38,
    overflow: "hidden",
    background: "#0b0f17",
    boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
  },

  phoneTop: {
    padding: 22,
    background: "#171d28",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 14,
  },

  phoneTiny: {
    fontFamily: "Arial, sans-serif",
    fontSize: 11,
    letterSpacing: "0.18em",
    color: "#98a4b4",
    marginBottom: 8,
  },

  phoneBrand: {
    fontSize: 28,
    fontWeight: 900,
    lineHeight: 1,
  },

  callPill: {
    fontFamily: "Arial, sans-serif",
    background: "#d8b44f",
    color: "#111",
    padding: "13px 18px",
    borderRadius: 999,
    fontWeight: 900,
  },

  phoneBody: {
    padding: 28,
  },

  appKicker: {
    fontFamily: "Arial, sans-serif",
    fontSize: 12,
    letterSpacing: "0.18em",
    color: "#d8b44f",
    fontWeight: 900,
    marginBottom: 18,
  },

  phoneHeadline: {
    margin: 0,
    fontSize: 42,
    lineHeight: 0.96,
    letterSpacing: "-0.05em",
  },

  phoneCopy: {
    fontFamily: "Arial, sans-serif",
    color: "#bcc6d4",
    fontSize: 16,
    lineHeight: 1.65,
    margin: "18px 0 22px",
  },

  phoneCta: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    background: "#d8b44f",
    color: "#111",
    borderRadius: 999,
    padding: "16px 18px",
    fontWeight: 900,
    marginBottom: 22,
    width: "100%",
    border: "none",
    cursor: "pointer",
  },

  quickGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginBottom: 20,
  },

  quickCard: {
    fontFamily: "Arial, sans-serif",
    background: "#171d28",
    borderRadius: 22,
    padding: 16,
    color: "#f4efe4",
  },

  dot: {
    width: 24,
    height: 24,
    borderRadius: 999,
    background: "#d8b44f",
    marginBottom: 12,
  },

  featureBox: {
    background: "rgba(255,255,255,0.05)",
    borderRadius: 24,
    padding: 20,
  },

  featureTitle: {
    margin: "0 0 10px",
    fontSize: 28,
    lineHeight: 1.05,
  },

  featureText: {
    margin: 0,
    fontFamily: "Arial, sans-serif",
    color: "#bcc6d4",
    lineHeight: 1.65,
  },

  section: {
    maxWidth: 1180,
    margin: "90px auto 0",
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
    margin: 0,
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 18,
  },

  card: {
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025))",
    borderRadius: 26,
    padding: 24,
    boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
  },

  cardTitle: {
    margin: "0 0 10px",
    fontSize: 28,
    lineHeight: 1.05,
  },

  cardText: {
    margin: 0,
    fontFamily: "Arial, sans-serif",
    color: "#bcc6d4",
    lineHeight: 1.65,
  },

  pricingBox: {
    maxWidth: 1180,
    margin: "90px auto 0",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(216,180,79,0.08))",
    borderRadius: 32,
    padding: 34,
    display: "flex",
    justifyContent: "space-between",
    gap: 24,
    alignItems: "center",
  },

  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.76)",
    zIndex: 999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  modal: {
    width: "100%",
    maxWidth: 560,
    background:
      "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(8,13,23,0.98))",
    borderRadius: 30,
    padding: 28,
    boxShadow: "0 30px 90px rgba(0,0,0,0.45)",
    position: "relative",
  },

  closeBtn: {
    position: "absolute",
    right: 18,
    top: 14,
    background: "transparent",
    color: "#f4efe4",
    border: "none",
    fontSize: 34,
    cursor: "pointer",
  },

  modalTitle: {
    margin: "0 0 10px",
    fontSize: 42,
    lineHeight: 1,
  },

  modalCopy: {
    fontFamily: "Arial, sans-serif",
    color: "#bcc6d4",
    lineHeight: 1.65,
    fontSize: 16,
    marginBottom: 18,
  },

  form: {
    display: "grid",
    gap: 12,
  },

  input: {
    width: "100%",
    fontFamily: "Arial, sans-serif",
    fontSize: 15,
    color: "#f4efe4",
    background: "rgba(255,255,255,0.07)",
    border: "none",
    outline: "none",
    borderRadius: 16,
    padding: "15px 16px",
  },

  textarea: {
    width: "100%",
    resize: "vertical",
    fontFamily: "Arial, sans-serif",
    fontSize: 15,
    color: "#f4efe4",
    background: "rgba(255,255,255,0.07)",
    border: "none",
    outline: "none",
    borderRadius: 16,
    padding: "15px 16px",
  },

  submitBtn: {
    fontFamily: "Arial, sans-serif",
    fontWeight: 800,
    fontSize: 15,
    padding: "15px 18px",
    borderRadius: 16,
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(135deg, #e1c15f, #c89e2c)",
    color: "#111",
  },
};