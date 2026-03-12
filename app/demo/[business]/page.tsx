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
  services: string[];
  stats: string[];
  testimonial: string;
};

const demoContent: Record<string, DemoData> = {
  "bayou-barkery": {
    name: "Bayou Barkery",
    niche: "Organic pet bakery • Willis, Texas",
    phone: "(936) 278-2221",
    phoneLink: "tel:9362782221",
    email: "info@bayoubarkery.com",
    emailLink: "mailto:info@bayoubarkery.com",
    headline: "Organic treats made to feel as special as they should.",
    subheadline:
      "A warmer, more premium website concept designed to make the brand feel elevated, memorable, and worth ordering from.",
    primary: "#efbb78",
    background:
      "radial-gradient(circle at top, #234238 0%, #14241f 45%, #0b1412 100%)",
    services: [
      "Premium treat presentation",
      "Custom order conversion flow",
      "Boutique brand storytelling",
    ],
    stats: [
      "Cleaner first impression",
      "Better trust for first-time buyers",
      "Stronger custom-order path",
    ],
    testimonial:
      "This feels more like a premium boutique brand than a normal small business template.",
  },

  "elite-pressure-washing": {
    name: "Elite Pressure Washing",
    niche: "Exterior cleaning • Houston, Texas",
    phone: "(832) 705-0313",
    phoneLink: "tel:8327050313",
    email: "hello@atlasdigitallab.com",
    emailLink: "mailto:hello@atlasdigitallab.com",
    headline: "A cleaner website concept for a cleaner brand.",
    subheadline:
      "Built to make the company look more trustworthy, convert better on mobile, and turn visitors into booked jobs.",
    primary: "#7be0ff",
    background:
      "radial-gradient(circle at top, #103344 0%, #091a24 45%, #061017 100%)",
    services: [
      "Service-first layout",
      "High-conversion mobile design",
      "Clear quote-request structure",
    ],
    stats: [
      "More trust at first glance",
      "Built for local service leads",
      "Clear call and quote flow",
    ],
    testimonial:
      "This instantly feels like a real professional company instead of a basic service page.",
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
      "Designed to make booking easier, showcase services better, and give the brand a premium first impression.",
    primary: "#f0b6d8",
    background:
      "radial-gradient(circle at top, #4a2237 0%, #1e1020 45%, #120a12 100%)",
    services: [
      "Luxury service presentation",
      "Booking-focused layout",
      "Premium visual structure",
    ],
    stats: [
      "Better mobile polish",
      "Cleaner booking CTA",
      "Higher-end brand feel",
    ],
    testimonial:
      "This looks much more expensive and makes the business feel more premium right away.",
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
          background: "#0b1118",
          color: "white",
          fontFamily: "Inter, Arial, sans-serif",
          padding: "40px 20px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>Demo not found</h1>
          <p>This business demo slug does not exist yet.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="page" style={{ background: data.background }}>
      <section className="topbar">
        <div className="container topbarInner">
          <div className="brandWrap">
            <div
              className="brandDot"
              style={{ background: data.primary, boxShadow: `0 0 28px ${data.primary}` }}
            />
            <div>
              <div className="brandTitle">{data.name}</div>
              <div className="brandSub">{data.niche}</div>
            </div>
          </div>

          <div className="navCtas">
            <a href={data.phoneLink} className="pill">
              Call {data.phone}
            </a>
            <a
              href={data.emailLink}
              className="pill primary"
              style={{ background: data.primary, color: "#181818" }}
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      <section className="hero container">
        <div className="heroLeft">
          <div className="eyebrow">Designed for {data.name}</div>
          <h1>{data.headline}</h1>
          <p>{data.subheadline}</p>

          <div className="heroButtons">
            <a
              href={data.emailLink}
              className="btn primary"
              style={{ background: data.primary, color: "#181818" }}
            >
              Request This Style
            </a>
            <a href={data.phoneLink} className="btn">
              Call Now
            </a>
          </div>

          <div className="statGrid">
            {data.stats.map((item) => (
              <div key={item} className="statCard">
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="heroRight">
          <div className="heroCard">
            <div className="cardTag">Premium Demo Concept</div>
            <h3>This should feel like a custom build.</h3>
            <p>
              Cleaner structure, stronger hierarchy, better spacing, and a more
              expensive overall presentation than a normal template page.
            </p>

            <ul>
              {data.services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <a
              href={data.emailLink}
              className="btn primary full"
              style={{ background: data.primary, color: "#181818" }}
            >
              Ask About This Demo
            </a>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <div className="sectionHead">
            <div className="sectionPill">What makes this stronger</div>
            <h2>Professional presentation that feels expensive.</h2>
            <p>
              These demos should make business owners say “whoa,” not “cool template.”
              The goal is a better first impression, better trust, and better conversion.
            </p>
          </div>

          <div className="gridThree">
            <div className="glassCard">
              <h3>Visual impact</h3>
              <p>
                Stronger spacing, typography, and card styling make the business feel more premium.
              </p>
            </div>

            <div className="glassCard">
              <h3>Trust</h3>
              <p>
                A polished layout helps visitors trust the business faster and stay on the page longer.
              </p>
            </div>

            <div className="glassCard">
              <h3>Conversion</h3>
              <p>
                Clearer call and contact actions make it easier for visitors to actually reach out.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="ctaPanel">
            <div className="ctaText">
              <div className="sectionPill">Demo reaction</div>
              <h2>This is the type of page that gets replies.</h2>
              <p>{data.testimonial}</p>
            </div>

            <div className="ctaButtons">
              <a
                href={data.emailLink}
                className="btn primary"
                style={{ background: data.primary, color: "#181818" }}
              >
                Send This Style
              </a>
              <a href="/" className="btn">
                Back to Atlas
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page {
          min-height: 100vh;
          color: white;
          font-family: Inter, Arial, sans-serif;
        }

        .container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 30;
          backdrop-filter: blur(12px);
          background: rgba(10, 12, 18, 0.38);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .topbarInner {
          min-height: 78px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .brandWrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brandDot {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          flex-shrink: 0;
        }

        .brandTitle {
          font-size: 15px;
          font-weight: 800;
        }

        .brandSub {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.74);
          margin-top: 3px;
        }

        .navCtas,
        .heroButtons,
        .ctaButtons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .pill,
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          border-radius: 14px;
          font-weight: 800;
        }

        .pill {
          min-height: 42px;
          padding: 10px 16px;
          color: white;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .hero {
          display: grid;
          grid-template-columns: 1.06fr 0.94fr;
          gap: 24px;
          padding-top: 56px;
          padding-bottom: 32px;
        }

        .eyebrow,
        .sectionPill,
        .cardTag {
          display: inline-block;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-size: 13px;
        }

        .eyebrow {
          margin-bottom: 18px;
          color: rgba(255,255,255,0.92);
        }

        h1 {
          font-size: clamp(44px, 7vw, 82px);
          line-height: 1.01;
          letter-spacing: -0.04em;
          margin: 0 0 18px 0;
          max-width: 820px;
          font-weight: 800;
        }

        h2 {
          font-size: clamp(30px, 4.5vw, 48px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin: 0 0 14px 0;
          font-weight: 800;
        }

        h3 {
          font-size: 28px;
          line-height: 1.1;
          margin: 0 0 12px 0;
          font-weight: 800;
        }

        p {
          margin: 0;
          color: rgba(255, 255, 255, 0.84);
          font-size: 18px;
          line-height: 1.8;
        }

        .btn {
          min-height: 52px;
          padding: 14px 22px;
          color: white;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
        }

        .full {
          width: 100%;
          margin-top: 20px;
        }

        .statGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 30px;
        }

        .statCard,
        .heroCard,
        .glassCard,
        .ctaPanel {
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
        }

        .statCard {
          padding: 18px;
          font-size: 16px;
          line-height: 1.5;
        }

        .heroCard {
          padding: 26px;
        }

        .heroCard ul {
          padding-left: 18px;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.82);
          margin: 18px 0 0 0;
          font-size: 17px;
        }

        .cardTag {
          margin-bottom: 16px;
          color: rgba(255, 255, 255, 0.86);
        }

        .section {
          padding: 42px 0 26px;
        }

        .light {
          background: rgba(255,255,255,0.03);
        }

        .sectionHead {
          max-width: 780px;
          margin-bottom: 24px;
        }

        .gridThree {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .glassCard {
          padding: 24px;
        }

        .glassCard p {
          font-size: 16px;
        }

        .ctaPanel {
          padding: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .ctaText {
          max-width: 720px;
        }

        @media (max-width: 980px) {
          .hero,
          .gridThree,
          .statGrid {
            grid-template-columns: 1fr;
          }

          .ctaPanel {
            align-items: stretch;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding: 0 14px;
          }

          .navCtas,
          .heroButtons,
          .ctaButtons {
            flex-direction: column;
          }

          .pill,
          .btn {
            width: 100%;
          }

          p {
            font-size: 16px;
          }
        }
      `}</style>
    </main>
  );
}