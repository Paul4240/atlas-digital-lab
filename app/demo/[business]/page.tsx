type DemoData = {
  name: string;
  niche: string;
  phone: string;
  phoneLink: string;
  email: string;
  emailLink: string;
  headline: string;
  subheadline: string;
  primary: string;
  background: string;
};

const demoContent: Record<string, DemoData> = {
  "bayou-barkery": {
    name: "Bayou Barkery",
    niche: "Organic pet bakery • Willis, Texas",
    phone: "(936) 278-2221",
    phoneLink: "tel:9362782221",
    email: "info@bayoubarkery.com",
    emailLink: "mailto:info@bayoubarkery.com",
    headline: "A premium pet bakery experience for furry family members.",
    subheadline:
      "Natural, organic, and gourmet pet treats presented with a warmer, more premium brand feel built to earn trust and drive custom orders.",
    primary: "#efbb78",
    background: "linear-gradient(135deg, #234238 0%, #14241f 100%)",
  },

  "houston-roofing": {
    name: "Houston Roofing Pros",
    niche: "Roof replacement • Repairs • Houston, Texas",
    phone: "(346) 365-7906",
    phoneLink: "tel:3463657906",
    email: "hello@atlasdigitallab.com",
    emailLink: "mailto:hello@atlasdigitallab.com",
    headline: "Roofing websites built to generate more calls.",
    subheadline:
      "A cleaner, higher-converting contractor website concept built for trust, speed, service clarity, and stronger local lead flow.",
    primary: "#45d7ff",
    background: "linear-gradient(135deg, #16325f 0%, #0b1630 100%)",
  },

  "luna-nail-salon": {
    name: "Luna Nail Salon",
    niche: "Luxury nail studio • Houston, Texas",
    phone: "(832) 705-0313",
    phoneLink: "tel:8327050313",
    email: "hello@atlasdigitallab.com",
    emailLink: "mailto:hello@atlasdigitallab.com",
    headline: "A luxury salon website concept that feels polished.",
    subheadline:
      "Designed to make booking easier, showcase services better, and make the brand feel more premium from the first click.",
    primary: "#f0b6d8",
    background: "linear-gradient(135deg, #4a2237 0%, #1e1020 100%)",
  },
};

export default async function DemoPage({
  params,
}: {
  params: Promise<{ business: string }>;
}) {
  const { business } = await params;
  const data = demoContent[business];

  if (!data) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "40px 20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>Demo not found</h1>
          <p>This demo slug does not exist yet.</p>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: data.background,
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "24px 20px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "14px",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: "36px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "10px 14px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                fontWeight: 700,
                marginBottom: "8px",
              }}
            >
              {data.name}
            </div>
            <div style={{ color: "rgba(255,255,255,0.74)", fontSize: "14px" }}>
              {data.niche}
            </div>
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a
              href={data.phoneLink}
              style={{
                textDecoration: "none",
                color: "white",
                padding: "12px 18px",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.06)",
                fontWeight: 700,
              }}
            >
              Call {data.phone}
            </a>
            <a
              href={data.emailLink}
              style={{
                textDecoration: "none",
                color: "#1a1a1a",
                padding: "12px 18px",
                borderRadius: "14px",
                background: data.primary,
                fontWeight: 800,
              }}
            >
              Custom Order
            </a>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "22px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                marginBottom: "18px",
                fontSize: "14px",
              }}
            >
              Premium website concept
            </div>

            <h1
              style={{
                fontSize: "clamp(42px, 7vw, 78px)",
                lineHeight: 1.02,
                margin: "0 0 18px 0",
                letterSpacing: "-0.03em",
              }}
            >
              {data.headline}
            </h1>

            <p
              style={{
                fontSize: "clamp(18px, 2vw, 24px)",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.84)",
                maxWidth: "760px",
                margin: "0 0 28px 0",
              }}
            >
              {data.subheadline}
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                href={data.emailLink}
                style={{
                  textDecoration: "none",
                  color: "#1a1a1a",
                  padding: "16px 24px",
                  borderRadius: "14px",
                  background: data.primary,
                  fontWeight: 800,
                }}
              >
                View Website Concept
              </a>

              <a
                href={data.phoneLink}
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: "16px 24px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.06)",
                  fontWeight: 700,
                }}
              >
                Talk About This Demo
              </a>
            </div>
          </div>

          <div
            style={{
              borderRadius: "26px",
              padding: "24px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.72)",
                marginBottom: "12px",
                fontWeight: 800,
              }}
            >
              Featured This Week
            </div>

            <h3 style={{ fontSize: "34px", lineHeight: 1.1, margin: "0 0 14px 0" }}>
              Stronger design. Better trust. Cleaner conversion.
            </h3>

            <ul
              style={{
                margin: 0,
                paddingLeft: "20px",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.84)",
                fontSize: "17px",
              }}
            >
              <li>Clearer premium positioning</li>
              <li>Better mobile presentation</li>
              <li>More polished visual hierarchy</li>
              <li>Stronger call, email, and booking flow</li>
            </ul>

            <a
              href={data.emailLink}
              style={{
                display: "block",
                marginTop: "22px",
                textDecoration: "none",
                textAlign: "center",
                color: "#1a1a1a",
                padding: "16px 20px",
                borderRadius: "14px",
                background: data.primary,
                fontWeight: 800,
              }}
            >
              Request This Style
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}