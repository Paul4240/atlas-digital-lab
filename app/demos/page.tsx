"use client";

export default function HomePage() {
  const MAIN_PHONE = "(832) 705-0313";

  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "white", background: "#0b1218", minHeight: "100vh" }}>

      {/* NAV */}
      <div style={{ padding: "20px", borderBottom: "1px solid rgba(255,255,255,.1)" }}>
        <strong>Atlas Digital Lab</strong>
      </div>

      {/* HERO */}
      <section style={{ padding: "40px 20px" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
          Websites that make your business look legit.
        </h1>

        <p style={{ opacity: 0.8 }}>
          Clean, simple websites built to help small businesses get more calls.
        </p>

        <div style={{ marginTop: "20px" }}>
          <a href="tel:3463657906" style={btnPrimary}>Call / Text Sales</a>
        </div>
      </section>

      {/* SALES TEAM */}
      <section style={{ padding: "20px" }}>
        <h2>Sales Team</h2>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "10px" }}>
          <a href="tel:3463657906" style={pill}>Sales (346) 365-7906</a>
          <a href="tel:8326773150" style={pill}>Sales (832) 677-3150</a>
          <a href="tel:3465328803" style={pill}>Sales (346) 532-8803</a>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "20px" }}>
        <h2>What We Do</h2>

        <div style={{ marginTop: "10px" }}>
          <p>• Website Design</p>
          <p>• SEO Setup</p>
          <p>• Business Branding</p>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ padding: "20px" }}>
        <h2>Pricing</h2>

        <div style={{ marginTop: "10px" }}>
          <p>Starter — $299</p>
          <p>Growth — $499</p>
          <p>Pro — $799</p>
          <p>Elite — $1,200</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "20px", opacity: 0.6 }}>
        Atlas Digital Lab
      </footer>

    </main>
  );
}

const btnPrimary = {
  padding: "12px 18px",
  borderRadius: "8px",
  background: "#f0c48a",
  color: "black",
  textDecoration: "none",
  fontWeight: "bold",
};

const pill = {
  padding: "10px 14px",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,.2)",
  textDecoration: "none",
  color: "white",
};