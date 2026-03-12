"use client";

export default function PetBakeryDemo() {
  const PHONE = "(936) 278-2221";
  const PHONE_LINK = "tel:9362782221";
  const EMAIL = "info@bayoubarkery.com";
  const EMAIL_LINK = "mailto:info@bayoubarkery.com";

  return (
    <main className="page">
      <section className="hero">
        <div className="heroOverlay" />

        <div className="container topbar">
          <div className="brandWrap">
            <div className="brandDot" />
            <div>
              <div className="brandName">Bayou Barkery</div>
              <div className="brandSub">Organic pet bakery • Willis, Texas</div>
            </div>
          </div>

          <div className="topActions">
            <a href={PHONE_LINK} className="pill">
              Call {PHONE}
            </a>
            <a href={EMAIL_LINK} className="pill primaryPill">
              Custom Order
            </a>
          </div>
        </div>

        <div className="container heroContent">
          <div className="heroPanel">
            <div className="eyebrow">Luxury pet bakery concept</div>
            <h1>Organic treats made to feel as special as they should.</h1>
            <p className="heroText">
              A premium website concept built to make Bayou Barkery feel warmer,
              more polished, and more unforgettable. Stronger visuals, better
              custom-order flow, and a boutique brand experience that actually
              looks expensive.
            </p>

            <div className="heroButtons">
              <a href="#signature" className="btn primaryBtn">
                View Signature Treats
              </a>
              <a href="#story" className="btn ghostBtn">
                Explore Brand Story
              </a>
            </div>

            <div className="heroChips">
              <div className="chip">Premium presentation</div>
              <div className="chip">Custom order flow</div>
              <div className="chip">Boutique brand feel</div>
            </div>
          </div>
        </div>
      </section>

      <section className="introStrip">
        <div className="container introGrid">
          <div className="introCard">
            <span className="introNumber">01</span>
            <h3>Designed to feel premium</h3>
            <p>
              More like a boutique brand experience and less like a template
              site.
            </p>
          </div>

          <div className="introCard">
            <span className="introNumber">02</span>
            <h3>Built to drive inquiries</h3>
            <p>
              Clearer flow for orders, custom requests, and first-time trust.
            </p>
          </div>

          <div className="introCard">
            <span className="introNumber">03</span>
            <h3>Made to stand out</h3>
            <p>
              Stronger visuals, better structure, and a cleaner first
              impression.
            </p>
          </div>
        </div>
      </section>

      <section id="signature" className="section light">
        <div className="container">
          <div className="sectionHead">
            <div className="eyebrow dark">Signature collection</div>
            <h2>A shop experience that feels boutique and gift-worthy.</h2>
            <p>
              This kind of layout helps a bakery brand feel more elevated, more
              trustworthy, and more worth buying from.
            </p>
          </div>

          <div className="productGrid">
            <article className="productCard">
              <div
                className="productImage"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(34,24,18,.16), rgba(34,24,18,.16)), url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80')",
                }}
              />
              <div className="productBody">
                <div className="productTag">Best seller</div>
                <h3>Sweet Potato Crunch Bites</h3>
                <p>
                  Clean ingredients, stronger product presentation, and a more
                  premium way to showcase what makes the brand special.
                </p>
              </div>
            </article>

            <article className="productCard">
              <div
                className="productImage"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(34,24,18,.16), rgba(34,24,18,.16)), url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80')",
                }}
              />
              <div className="productBody">
                <div className="productTag">Seasonal favorite</div>
                <h3>Pumpkin Twist Treats</h3>
                <p>
                  A warmer visual style that makes treats feel more giftable and
                  memorable for pet parents.
                </p>
              </div>
            </article>

            <article className="productCard">
              <div
                className="productImage"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(34,24,18,.16), rgba(34,24,18,.16)), url('https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80')",
                }}
              />
              <div className="productBody">
                <div className="productTag">Custom order</div>
                <h3>Birthday Treat Boxes</h3>
                <p>
                  Perfect for pushing higher-value custom orders with a layout
                  that makes special occasions feel premium.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="story" className="section storySection">
        <div className="container storyGrid">
          <div className="storyImageWrap">
            <div className="storyImage" />
          </div>

          <div className="storyContent">
            <div className="eyebrow dark">Brand story</div>
            <h2>Crafted with care, ingredients, and a more memorable experience.</h2>
            <p>
              This section gives the brand emotional weight. Instead of just
              listing products, it tells a better story and helps customers
              trust the business faster.
            </p>
            <p>
              For premium small brands, the website should sell a feeling:
              thoughtful, polished, warm, and worth coming back to.
            </p>

            <div className="storyStats">
              <div className="storyStat">
                <strong>Organic-inspired</strong>
                <span>Cleaner ingredient positioning</span>
              </div>
              <div className="storyStat">
                <strong>Small-batch feel</strong>
                <span>More boutique brand perception</span>
              </div>
              <div className="storyStat">
                <strong>Built for repeat buyers</strong>
                <span>Better first impression and trust</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section darkPanelSection">
        <div className="container">
          <div className="featurePanel">
            <div className="featureLeft">
              <div className="eyebrow">Why this converts better</div>
              <h2>It looks custom, not generic.</h2>
              <p>
                The fastest way to lose a small business lead is to send them
                something that feels like a starter template. This kind of page
                feels designed, expensive, and intentional.
              </p>
            </div>

            <div className="featureRight">
              <ul>
                <li>Premium visual hierarchy</li>
                <li>Luxury-style product presentation</li>
                <li>More trust on first click</li>
                <li>Cleaner custom-order path</li>
                <li>Better mobile polish</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <div className="sectionHead">
            <div className="eyebrow dark">Client impression</div>
            <h2>Something that actually gets a “whoa.”</h2>
          </div>

          <div className="testimonialGrid">
            <div className="testimonialCard large">
              <div className="stars">★★★★★</div>
              <p>
                “This looks way more premium than a normal small business site.
                It actually feels like a boutique brand people would trust and
                remember.”
              </p>
              <strong>Demo reaction</strong>
            </div>

            <div className="testimonialCard">
              <div className="stars">★★★★★</div>
              <p>
                “The presentation makes the products feel more valuable and the
                brand feel more real.”
              </p>
              <strong>Demo reaction</strong>
            </div>

            <div className="testimonialCard">
              <div className="stars">★★★★★</div>
              <p>
                “This is the kind of layout that gets business owners interested,
                because it doesn’t feel cheap.”
              </p>
              <strong>Demo reaction</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section ctaSection">
        <div className="container">
          <div className="ctaPanel">
            <div className="ctaText">
              <div className="eyebrow">Custom concept</div>
              <h2>Want your business to look like this?</h2>
              <p>
                This demo is built to feel like a real custom brand site, not a
                generic web mockup. That is exactly what gets replies.
              </p>
            </div>

            <div className="ctaButtons">
              <a href={EMAIL_LINK} className="btn primaryBtn">
                Email About This Style
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
            <div className="footerBrand">Bayou Barkery Demo</div>
            <div className="footerSub">Built by Atlas Digital Lab</div>
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
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero {
          position: relative;
          min-height: 96vh;
          background:
            linear-gradient(rgba(15, 24, 20, 0.42), rgba(15, 24, 20, 0.58)),
            url("https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1800&q=80");
          background-size: cover;
          background-position: center;
          color: white;
          overflow: hidden;
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top left, rgba(239, 187, 120, 0.14), transparent 35%),
            linear-gradient(180deg, rgba(9, 13, 12, 0.22), rgba(9, 13, 12, 0.34));
          pointer-events: none;
        }

        .topbar {
          position: relative;
          z-index: 2;
          min-height: 88px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          padding-top: 18px;
        }

        .brandWrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brandDot {
          width: 16px;
          height: 16px;
          border-radius: 999px;
          background: linear-gradient(135deg, #efbb78, #f5d3a2);
          box-shadow: 0 0 24px rgba(239, 187, 120, 0.45);
          flex-shrink: 0;
        }

        .brandName {
          font-size: 16px;
          font-weight: 800;
        }

        .brandSub {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.78);
          margin-top: 3px;
        }

        .topActions {
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
          transition: 0.2s ease;
          font-weight: 800;
        }

        .pill {
          min-height: 46px;
          padding: 10px 18px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: white;
          backdrop-filter: blur(10px);
        }

        .primaryPill {
          background: linear-gradient(135deg, #efbb78, #d69c5f);
          color: #1a120d;
          border: none;
        }

        .heroContent {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          min-height: calc(96vh - 88px);
          padding-top: 40px;
          padding-bottom: 80px;
        }

        .heroPanel {
          max-width: 860px;
          padding: 34px;
          border-radius: 28px;
          background: rgba(16, 22, 20, 0.36);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(16px);
          box-shadow: 0 25px 90px rgba(0, 0, 0, 0.22);
        }

        .eyebrow {
          display: inline-block;
          padding: 9px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.14);
          font-size: 13px;
          color: #f7dec0;
          margin-bottom: 18px;
        }

        .eyebrow.dark {
          background: #ead9c6;
          border-color: #ead9c6;
          color: #6c4e36;
        }

        h1 {
          font-size: clamp(46px, 8vw, 92px);
          line-height: 0.96;
          letter-spacing: -0.05em;
          margin: 0 0 20px 0;
          max-width: 760px;
          font-weight: 800;
        }

        h2 {
          font-size: clamp(32px, 5vw, 56px);
          line-height: 1.04;
          letter-spacing: -0.035em;
          margin: 0 0 16px 0;
          font-weight: 800;
        }

        h3 {
          font-size: 24px;
          line-height: 1.12;
          margin: 0 0 10px 0;
          font-weight: 800;
        }

        p {
          margin: 0;
        }

        .heroText {
          max-width: 720px;
          font-size: 21px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.9);
        }

        .heroButtons,
        .ctaButtons,
        .footerLinks {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .heroButtons {
          margin-top: 28px;
        }

        .btn {
          min-height: 54px;
          padding: 14px 24px;
        }

        .primaryBtn {
          background: linear-gradient(135deg, #efbb78, #d69c5f);
          color: #1a120d;
          border: none;
          box-shadow: 0 10px 35px rgba(214, 156, 95, 0.28);
        }

        .ghostBtn {
          color: white;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
        }

        .darkGhost {
          color: #1d1713;
          background: transparent;
          border: 1px solid rgba(29, 23, 19, 0.16);
        }

        .heroChips {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 26px;
        }

        .chip {
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.13);
          color: rgba(255, 255, 255, 0.88);
          font-size: 14px;
        }

        .introStrip {
          margin-top: -46px;
          position: relative;
          z-index: 3;
          padding: 0 0 16px;
        }

        .introGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .introCard {
          background: rgba(255, 251, 246, 0.92);
          border: 1px solid rgba(76, 54, 34, 0.08);
          border-radius: 26px;
          padding: 24px;
          box-shadow: 0 20px 50px rgba(41, 26, 15, 0.08);
        }

        .introNumber {
          display: inline-block;
          font-size: 13px;
          font-weight: 800;
          color: #8c6845;
          margin-bottom: 12px;
          letter-spacing: 0.06em;
        }

        .introCard p,
        .sectionHead p,
        .productBody p,
        .storyContent p,
        .featureLeft p,
        .testimonialCard p,
        .ctaText p {
          color: #5f5147;
          font-size: 17px;
          line-height: 1.8;
        }

        .section {
          padding: 84px 0;
        }

        .section.light {
          background: #f7f0e7;
        }

        .sectionHead {
          max-width: 760px;
          margin-bottom: 28px;
        }

        .productGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .productCard {
          background: #fffaf4;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 18px 45px rgba(35, 22, 13, 0.08);
        }

        .productImage {
          height: 270px;
          background-size: cover;
          background-position: center;
        }

        .productBody {
          padding: 22px;
        }

        .productTag {
          display: inline-block;
          padding: 8px 12px;
          border-radius: 999px;
          background: #f1dfca;
          color: #7a5636;
          font-size: 12px;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .storySection {
          background: linear-gradient(180deg, #f7f0e7 0%, #f2e7da 100%);
        }

        .storyGrid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 26px;
          align-items: stretch;
        }

        .storyImageWrap {
          min-height: 560px;
        }

        .storyImage {
          height: 100%;
          min-height: 560px;
          border-radius: 30px;
          background:
            linear-gradient(rgba(30, 20, 16, 0.14), rgba(30, 20, 16, 0.24)),
            url("https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1400&q=80");
          background-size: cover;
          background-position: center;
          box-shadow: 0 20px 50px rgba(35, 22, 13, 0.08);
        }

        .storyContent {
          background: rgba(255, 250, 244, 0.86);
          border: 1px solid rgba(81, 53, 30, 0.08);
          border-radius: 30px;
          padding: 34px;
          box-shadow: 0 20px 50px rgba(35, 22, 13, 0.06);
        }

        .storyStats {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-top: 24px;
        }

        .storyStat {
          padding: 18px 18px;
          border-radius: 20px;
          background: #f3e4d4;
        }

        .storyStat strong {
          display: block;
          margin-bottom: 6px;
          font-size: 16px;
          color: #2f2319;
        }

        .storyStat span {
          color: #6e5a49;
          font-size: 14px;
          line-height: 1.6;
        }

        .darkPanelSection {
          background:
            radial-gradient(circle at top, #203930 0%, #142620 45%, #0d1512 100%);
          color: white;
        }

        .featurePanel {
          display: grid;
          grid-template-columns: 1fr 0.85fr;
          gap: 22px;
          padding: 28px;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .featureLeft p {
          color: rgba(255, 255, 255, 0.82);
        }

        .featureRight {
          display: flex;
          align-items: center;
        }

        .featureRight ul {
          margin: 0;
          padding-left: 22px;
          color: rgba(255, 255, 255, 0.88);
          line-height: 2;
          font-size: 18px;
        }

        .testimonialGrid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr 0.85fr;
          gap: 18px;
        }

        .testimonialCard {
          background: #fffaf4;
          border-radius: 26px;
          padding: 24px;
          box-shadow: 0 18px 44px rgba(35, 22, 13, 0.07);
        }

        .testimonialCard.large {
          padding: 28px;
        }

        .stars {
          color: #d59c5f;
          font-size: 22px;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        .testimonialCard strong {
          display: block;
          margin-top: 14px;
          color: #2a1f17;
          font-size: 15px;
        }

        .ctaSection {
          background: #f7f0e7;
          padding-top: 20px;
        }

        .ctaPanel {
          border-radius: 32px;
          padding: 34px;
          background:
            linear-gradient(135deg, #1a2a24 0%, #263c34 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          flex-wrap: wrap;
          box-shadow: 0 24px 70px rgba(16, 22, 19, 0.18);
        }

        .ctaText {
          max-width: 700px;
        }

        .ctaText p {
          color: rgba(255, 255, 255, 0.84);
        }

        .footer {
          background: #1b1714;
          color: white;
          padding: 28px 0 34px;
        }

        .footerInner {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          align-items: center;
        }

        .footerBrand {
          font-size: 16px;
          font-weight: 800;
        }

        .footerSub {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.68);
          margin-top: 4px;
        }

        .footerLinks a {
          color: rgba(255, 255, 255, 0.86);
          text-decoration: none;
          font-size: 14px;
        }

        @media (max-width: 980px) {
          .introGrid,
          .productGrid,
          .storyGrid,
          .featurePanel,
          .testimonialGrid {
            grid-template-columns: 1fr;
          }

          .storyImageWrap,
          .storyImage {
            min-height: 360px;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding: 0 14px;
          }

          .topActions,
          .heroButtons,
          .ctaButtons,
          .footerLinks {
            flex-direction: column;
          }

          .pill,
          .btn {
            width: 100%;
          }

          .heroPanel {
            padding: 24px 18px;
          }

          .heroText,
          .introCard p,
          .sectionHead p,
          .productBody p,
          .storyContent p,
          .featureLeft p,
          .testimonialCard p,
          .ctaText p {
            font-size: 16px;
          }

          .section {
            padding: 64px 0;
          }
        }
      `}</style>
    </main>
  );
}