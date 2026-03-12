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
  secondary: string;
  background: string;
  services: string[];
  benefits: string[];
  testimonial: string;
  testimonialName: string;
  cta: string;
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
      "A warmer, more elevated website concept designed to make the brand feel premium, build trust fast, and turn visitors into custom orders.",
    primary: "#efbb78",
    secondary: "#f6e4c8",
    background: "radial-gradient(circle at top, #234238 0%, #14241f 45%, #0b1412 100%)",
    services: [
      "Organic-inspired treat presentation",
      "Custom order conversion flow",
      "Premium brand storytelling",
    ],
    benefits: [
      "Cleaner premium look",
      "Better first impression",
      "Stronger custom-order flow",
      "More trust for new buyers",
    ],
    testimonial:
      "This concept makes the brand feel premium, thoughtful, and much more memorable than a basic template site.",
    testimonialName: "Demo client impression",
    cta: "Request This Style",
  },

  "houston-roofing": {
    name: "Houston Roofing Pros",
    niche: "Roof replacement • Repairs • Houston, Texas",
    phone: "(346) 365-7906",
    phoneLink: "tel:3463657906",
    email: "hello@atlasdigitallab.com",
    emailLink: "mailto:hello@atlasdigitallab.com",
    headline: "A contractor website built to generate more calls.",
    subheadline:
      "A cleaner, higher-converting roofing website concept designed to build trust, clarify services, and turn visitors into estimate requests.",
    primary: "#45d7ff",
    secondary: "#c8f4ff",
    background: "radial-gradient(circle at top, #16325f 0%, #0b1630 45%, #08111f 100%)",
    services: [
      "Lead-focused service layout",
      "Mobile-first contractor design",
      "SEO-ready local structure",
    ],
    benefits: [
      "Better trust on first visit",
      "Cleaner call-to-action flow",
      "Stronger service presentation",
      "Built for mobile leads",
    ],
    testimonial:
      "This kind of layout immediately feels more professional and makes it easier for customers to call or request a quote.",
    testimonialName: "Demo client impression",
    cta: "Get This Website Style",
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
      "Built to make booking easier, showcase services better, and make the brand feel high-end from the very first click.",
    primary: "#f0b6d8",
    secondary: "#f8deec",
    background: "radial-gradient(circle at top, #4a2237 0%, #1e1020 45%, #120a12 100%)",
    services: [
      "Luxury brand presentation",
      "Booking-focused page structure",
      "Premium service highlights",
    ],
    benefits: [
      "More polished brand feel",
      "Cleaner booking CTA",
      "Better mobile experience",
      "More premium positioning",
    ],
    testimonial:
      "The layout feels more elevated and would make customers trust the brand before they even book.",
    testimonialName: "Demo client impression",
    cta: "Book This Style",
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
    secondary: "#d8f7ff",
    background: "radial-gradient(circle at top, #103344 0%, #091a24 45%, #061017 100%)",
    services: [
      "Lead-generation layout",
      "Service clarity for homeowners",
      "High-conversion mobile design",
    ],
    benefits: [
      "Cleaner professional look",
      "Built for local service leads",
      "Easy call / quote flow",
      "More authority online",
    ],
    testimonial:
      "This instantly feels like a real company website instead of a basic service page.",
    testimonialName: "Demo client impression",
    cta: "Request This Demo Style",
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
          background: "#0b1118",
          color: "white",
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
    <main className="page" style={{ background: data.background }}>
      <section className="topbar">
        <div className="container topbarInner">
          <div className="brandWrap">
            <div
              className="brandDot"
              style={{ background: data.primary, boxShadow: `0 0 24px ${data.primary}` }}
            />
            <div>
              <div className="brandTitle">{data.name}</div>
              <div className="brandSub">{data.niche}</div>
            </div>
          </div>

          <div className="topCtas">
            <a href={data.phoneLink} className="pill">
              Call {data.phone}
            </a>
            <a
              href={data.emailLink}
              className="pill primary"
              style={{ background: data.primary, color: "#151515" }}
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      <section className="hero container">
        <div className="heroLeft">
          <div
            className="eyebrow"
            style={{ color: data.secondary, borderColor: "rgba(255,255,255,0.14)" }}
          >
            Designed for {data.name}
          </div>

          <h1>{data.headline}</h1>

          <p>{data.subheadline}</p>

          <div className="ctaRow">
            <a
              href={data.emailLink}
              className="btn primary"
              style={{ background: data.primary, color: "#181818" }}
            >
              {data.cta}
            </a>
            <a href={data.phoneLink} className="btn">
              Call {data.phone}
            </a>
          </div>

          <div className="statsGrid">
            {data.benefits.map((item) => (
              <div key={item} className="statCard">
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="heroRight">
          <div className="heroCard">
            <div className="cardTag">Premium Demo Concept</div>
            <h3>This layout is built to feel expensive.</h3>
            <p>
              Clearer visual hierarchy, stronger trust, better spacing, and a more
              polished conversion flow than a basic template website.
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

      <section className="container section">
        <div className="sectionIntro">
          <div className="sectionPill">What makes this stronger</div>
          <h2>Professional presentation that feels like a serious brand.</h2>
          <p>
            The goal is not just to “have a website.” The goal is to make the business
            feel more trustworthy, more premium, and more likely to get calls, orders,
            or bookings.
          </p>
        </div>

        <div className="gridThree">
          <div className="glassCard">
            <h3>Better trust</h3>
            <p>
              A cleaner first impression helps people feel confident about contacting
              the business.
            </p>
          </div>

          <div className="glassCard">
            <h3>Better conversion</h3>
            <p>
              Stronger CTA placement makes it easier for visitors to call, email, or
              request a quote.
            </p>
          </div>

          <div className="glassCard">
            <h3>Better brand value</h3>
            <p>
              Premium layouts make the business look more established and worth paying.
            </p>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="splitGrid">
          <div className="featurePanel">
            <div className="sectionPill">Demo positioning</div>
            <h2>This is the type of page that gets replies.</h2>
            <p>
              Instead of telling someone you “build websites,” you can send them a
              polished concept that already looks like their next site.
            </p>
            <p>
              That changes the conversation from <em>“Do I need a website?”</em> to{" "}
              <em>“How much would it cost to make this mine?”</em>
            </p>
          </div>

          <div className="testimonialCard">
            <div className="stars">★★★★★</div>
            <p>{data.testimonial}</p>
            <strong>{data.testimonialName}</strong>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="ctaPanel">
          <div className="ctaText">
            <div className="sectionPill">Ready to send this?</div>
            <h2>Use this as a live preview in your outreach.</h2>
            <p>
              Send the link, spark curiosity, and let the quality of the demo do the
              selling for you.
            </p>
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
      </section>

      <style jsx>{`
        .page {
          min-height: 100vh;
          color: white;
          font-family: Inter, Arial, sans-serif;
        }

        .container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 30;
          backdrop-filter: blur(12px);
          background: rgba(8, 10, 18, 0.38);
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

        .topCtas {
          display: flex;
          gap: 10px;
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
          transition: 0.2s ease;
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
          padding-bottom: 24px;
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
        }

        h1 {
          font-size: clamp(42px, 7vw, 78px);
          line-height: 1.01;
          letter-spacing: -0.04em;
          margin: 0 0 18px 0;
          max-width: 820px;
        }

        h2 {
          font-size: clamp(30px, 4.5vw, 48px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin: 0 0 14px 0;
        }

        h3 {
          font-size: 28px;
          line-height: 1.1;
          margin: 0 0 12px 0;
        }

        p {
          color: rgba(255, 255, 255, 0.84);
          font-size: 18px;
          line-height: 1.8;
          margin: 0;
        }

        .ctaRow,
        .ctaButtons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 28px;
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

        .statsGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 30px;
        }

        .statCard,
        .heroCard,
        .glassCard,
        .featurePanel,
        .testimonialCard,
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

        .statCard strong {
          font-size: 16px;
        }

        .heroCard {
          padding: 26px;
        }

        .heroCard p {
          margin-bottom: 14px;
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
          padding: 42px 20px 20px;
        }

        .sectionIntro {
          max-width: 780px;
          margin-bottom: 24px;
        }

        .sectionPill {
          margin-bottom: 16px;
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

        .splitGrid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 18px;
        }

        .featurePanel,
        .testimonialCard {
          padding: 28px;
        }

        .testimonialCard p {
          margin: 12px 0 14px 0;
        }

        .stars {
          color: #ffd978;
          font-size: 22px;
          letter-spacing: 2px;
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
          .splitGrid,
          .gridThree,
          .statsGrid {
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

          .topCtas,
          .ctaRow,
          .ctaButtons {
            flex-direction: column;
          }

          .pill,
          .btn {
            width: 100%;
          }

          .hero {
            padding-top: 36px;
          }

          p {
            font-size: 16px;
          }
        }
      `}</style>
    </main>
  );
}