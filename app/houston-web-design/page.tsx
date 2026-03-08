export default function HoustonWebDesign() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #16325f 0%, #0b1630 45%, #08111f 100%)",
        color: "white",
        padding: "60px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 14px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            marginBottom: "20px",
            fontSize: "14px",
          }}
        >
          Houston SEO Landing Page
        </div>

        <h1
          style={{
            fontSize: "54px",
            lineHeight: 1.05,
            marginBottom: "20px",
            maxWidth: "850px",
          }}
        >
          Houston Web Design for Small Businesses
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.82)",
            maxWidth: "800px",
            marginBottom: "34px",
          }}
        >
          Atlas Digital Lab builds modern websites for small businesses,
          contractors, and local service companies in Houston. Our sites are
          designed to look premium, load fast, and help turn visitors into real
          leads.
        </p>

        <div
          style={{
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
            marginBottom: "50px",
          }}
        >
          <a
            href="/"
            style={{
              background: "linear-gradient(135deg, #38bdf8, #22d3ee)",
              color: "#08111f",
              padding: "14px 22px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            View Atlas Digital Lab
          </a>

          <a
            href="/demo/home-styling"
            style={{
              background: "rgba(255,255,255,0.06)",
              color: "white",
              padding: "14px 22px",
              borderRadius: "14px",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.14)",
              fontWeight: 700,
            }}
          >
            View Home Styling Demo
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "18px",
            marginBottom: "60px",
          }}
        >
          {[
            "Modern premium design",
            "Mobile-first layouts",
            "SEO-ready structure",
            "Fast-loading pages",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "22px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                fontWeight: 600,
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "34px", marginBottom: "18px" }}>
            Why Houston businesses choose Atlas Digital Lab
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.8,
              maxWidth: "850px",
              fontSize: "18px",
            }}
          >
            Small businesses need websites that do more than just exist. They
            need a site that looks trustworthy, explains the offer clearly, and
            makes it easy for customers to call, text, or request a quote. That
            is exactly what Atlas Digital Lab builds.
          </p>
        </section>

        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "34px", marginBottom: "20px" }}>
            See our live demos
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "18px",
            }}
          >
            {[
              {
                title: "Home Styling Demo",
                text: "Luxury interior styling concept built to feel high-end and premium.",
                href: "/demo/home-styling",
              },
              {
                title: "Roofing Company Demo",
                text: "Service-business layout for contractors who need more calls and trust.",
                href: "/demo/roofing",
              },
              {
                title: "Metal Business Card Demo",
                text: "Premium product-style demo with strong presentation and conversion flow.",
                href: "/demo/metal-cards",
              },
            ].map((card) => (
              <a
                key={card.title}
                href={card.href}
                style={{
                  display: "block",
                  padding: "24px",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
                  {card.title}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.78)",
                    lineHeight: 1.7,
                    marginBottom: "14px",
                  }}
                >
                  {card.text}
                </p>
                <span style={{ color: "#67e8f9", fontWeight: 700 }}>
                  Open demo →
                </span>
              </a>
            ))}
          </div>
        </section>

        <section
          style={{
            padding: "28px",
            borderRadius: "24px",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <h2 style={{ fontSize: "34px", marginBottom: "16px" }}>
            Need a website for your Houston business?
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.8,
              fontSize: "18px",
              marginBottom: "22px",
              maxWidth: "800px",
            }}
          >
            If you want a website that looks professional and helps bring in
            customers, Atlas Digital Lab can build a layout tailored to your
            business.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href="tel:8327050313"
              style={{
                background: "linear-gradient(135deg, #38bdf8, #22d3ee)",
                color: "#08111f",
                padding: "14px 22px",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Call (832) 705-0313
            </a>

            <a
              href="mailto:hello@atlasdigitallab.com"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "white",
                padding: "14px 22px",
                borderRadius: "14px",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.14)",
                fontWeight: 700,
              }}
            >
              Email Atlas Digital Lab
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}