"use client";

export default function PetBakeryDemo() {
  const PHONE = "(832) 705 0313";
  const PHONE_LINK = "tel:8327050313";
  const EMAIL = "hello@atlasdigitallab.com";
  const EMAIL_LINK = "mailto:hello@atlasdigitallab.com";

  return (
    <main className="page">
      <section className="hero">
        <div className="heroOverlay" />

        <div className="container topbar">
          <div className="brandWrap">
            <div className="brandDot" />
            <div>
              <div className="brandName">Atlas Digital Lab</div>
              <div className="brandSub">
                Premium Pet Bakery Website Demo
              </div>
            </div>
          </div>

          <div className="topActions">
            <a href={PHONE_LINK} className="pill">
              Call {PHONE}
            </a>
            <a href={EMAIL_LINK} className="pill primaryPill">
              Start Your Website
            </a>
          </div>
        </div>

        <div className="container heroContent">
          <div className="heroPanel">
            <div className="eyebrow">Atlas Digital Lab Demo</div>

            <h1>
              A premium pet bakery website experience for furry family members.
            </h1>

            <p className="heroText">
              This demo shows how a boutique pet bakery can look online when the
              design feels warm, professional, and premium. Built to showcase
              products beautifully and turn visitors into customers.
            </p>

            <div className="heroButtons">
              <a href="#products" className="btn primaryBtn">
                View Demo Layout
              </a>

              <a href={EMAIL_LINK} className="btn ghostBtn">
                Talk About Your Website
              </a>
            </div>

            <div className="heroChips">
              <div className="chip">Premium branding</div>
              <div className="chip">Modern layout</div>
              <div className="chip">High-conversion structure</div>
            </div>
          </div>
        </div>
      </section>

      <section className="introStrip">
        <div className="container introGrid">
          <div className="introCard">
            <span className="introNumber">01</span>
            <h3>Premium First Impression</h3>
            <p>
              The layout immediately makes the business feel trustworthy and
              professional.
            </p>
          </div>

          <div className="introCard">
            <span className="introNumber">02</span>
            <h3>Better Product Presentation</h3>
            <p>
              Products are displayed in a way that feels premium and encourages
              customers to buy.
            </p>
          </div>

          <div className="introCard">
            <span className="introNumber">03</span>
            <h3>Designed to Convert</h3>
            <p>
              Clear structure and strong call-to-actions help visitors take the
              next step.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="section light">
        <div className="container">
          <div className="sectionHead">
            <div className="eyebrow dark">Demo Product Section</div>

            <h2>A product layout that feels boutique and gift-worthy.</h2>

            <p>
              This section demonstrates how a bakery brand can showcase their
              products in a way that feels elevated and visually appealing.
            </p>
          </div>

          <div className="productGrid">
            <article className="productCard">
              <div
                className="productImage"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80')",
                }}
              />

              <div className="productBody">
                <div className="productTag">Best Seller</div>

                <h3>Sweet Potato Crunch Bites</h3>

                <p>
                  Example product card showing how treats can be presented with
                  premium styling.
                </p>
              </div>
            </article>

            <article className="productCard">
              <div
                className="productImage"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80')",
                }}
              />

              <div className="productBody">
                <div className="productTag">Seasonal Favorite</div>

                <h3>Pumpkin Twist Treats</h3>

                <p>
                  Clean layout and strong visual presentation make products feel
                  higher value.
                </p>
              </div>
            </article>

            <article className="productCard">
              <div
                className="productImage"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80')",
                }}
              />

              <div className="productBody">
                <div className="productTag">Custom Orders</div>

                <h3>Birthday Treat Boxes</h3>

                <p>
                  Custom order products can stand out visually and increase
                  average order value.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section darkPanelSection">
        <div className="container">
          <div className="featurePanel">
            <div className="featureLeft">
              <div className="eyebrow">Why businesses choose Atlas</div>

              <h2>It feels custom, not generic.</h2>

              <p>
                Small businesses need websites that look professional, modern,
                and trustworthy. This style helps businesses stand out from
                competitors using basic templates.
              </p>
            </div>

            <div className="featureRight">
              <ul>
                <li>Modern premium layout</li>
                <li>Strong brand presentation</li>
                <li>Better first impression</li>
                <li>Mobile optimized design</li>
                <li>Clear call-to-action flow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section ctaSection">
        <div className="container">
          <div className="ctaPanel">
            <div className="ctaText">
              <div className="eyebrow">Atlas Digital Lab</div>

              <h2>Want a website like this for your business?</h2>

              <p>
                Atlas Digital Lab builds premium websites for small businesses
                that want to stand out online and attract more customers.
              </p>
            </div>

            <div className="ctaButtons">
              <a href={EMAIL_LINK} className="btn primaryBtn">
                Email Us
              </a>

              <a href={PHONE_LINK} className="btn darkGhost">
                Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <div>
            <div className="footerBrand">Atlas Digital Lab</div>

            <div className="footerSub">
              Websites • SEO • Small Business Growth
            </div>
          </div>

          <div className="footerLinks">
            <a href={EMAIL_LINK}>Email</a>
            <a href={PHONE_LINK}>Call</a>
            <a href="/">Atlas Digital Lab</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f7f0e7;
          color: #1d1713;
          font-family: Inter, Arial, sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: auto;
          padding: 0 20px;
        }

        .hero {
          position: relative;
          min-height: 90vh;
          background:
            linear-gradient(rgba(15, 24, 20, 0.55), rgba(15, 24, 20, 0.55)),
            url("https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1800&q=80");
          background-size: cover;
          background-position: center;
          color: white;
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top left, rgba(239,187,120,0.2), transparent 40%);
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
        }

        .brandWrap {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .brandDot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #efbb78;
        }

        .brandName {
          font-weight: 700;
        }

        .brandSub {
          font-size: 14px;
          opacity: 0.8;
        }

        .pill {
          padding: 10px 16px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.3);
          color: white;
          text-decoration: none;
        }

        .primaryPill {
          background: #efbb78;
          color: black;
          border: none;
        }

        .heroContent {
          display: flex;
          align-items: center;
          min-height: 70vh;
        }

        .heroPanel {
          max-width: 700px;
          background: rgba(0,0,0,.4);
          padding: 40px;
          border-radius: 20px;
        }

        h1 {
          font-size: 56px;
          margin: 10px 0 20px;
        }

        .heroText {
          font-size: 18px;
          line-height: 1.6;
        }

        .heroButtons {
          margin-top: 24px;
          display: flex;
          gap: 12px;
        }

        .btn {
          padding: 12px 20px;
          border-radius: 12px;
          text-decoration: none;
        }

        .primaryBtn {
          background: #efbb78;
          color: black;
        }

        .ghostBtn {
          border: 1px solid white;
          color: white;
        }

        .chip {
          margin-top: 20px;
          display: inline-block;
          margin-right: 10px;
          padding: 6px 12px;
          border-radius: 20px;
          background: rgba(255,255,255,.15);
        }

        .introStrip {
          margin-top: -40px;
        }

        .introGrid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
        }

        .introCard {
          background: white;
          padding: 24px;
          border-radius: 18px;
        }

        .section {
          padding: 80px 0;
        }

        .productGrid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
        }

        .productCard {
          background: white;
          border-radius: 20px;
          overflow: hidden;
        }

        .productImage {
          height: 220px;
          background-size: cover;
        }

        .productBody {
          padding: 20px;
        }

        .productTag {
          font-size: 12px;
          color: #8a6c4a;
          margin-bottom: 10px;
        }

        .ctaPanel {
          background: #1b2623;
          color: white;
          padding: 40px;
          border-radius: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer {
          background: #1b1714;
          color: white;
          padding: 40px 0;
        }

        .footerInner {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </main>
  );
}