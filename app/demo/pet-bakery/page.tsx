"use client";

import React from "react";

export default function BayouBarkeryDemo() {
  const PHONE = "(936) 278-2221";
  const PHONE_LINK = "tel:9362782221";
  const EMAIL = "info@bayoubarkery.com";
  const EMAIL_LINK = "mailto:info@bayoubarkery.com";

  return (
    <main className="page">
      <div className="topbar">
        <div className="container topbarInner">
          <div className="brand">
            <div className="brandBadge">Bayou Barkery</div>
            <span className="brandSub">Organic pet bakery • Willis, Texas</span>
          </div>

          <div className="topCtas">
            <a href={PHONE_LINK} className="pill">
              Call {PHONE}
            </a>
            <a href={EMAIL_LINK} className="pill pillPrimary">
              Custom Order
            </a>
          </div>
        </div>
      </div>

      <section className="hero container">
        <div className="heroLeft">
          <div className="eyebrow">Organic treats for dogs & cats</div>

          <h1>
            A premium pet bakery experience for furry family members.
          </h1>

          <p>
            Bayou Barkery creates natural, organic, and gourmet pet treats made
            with care in Willis, Texas. Designed for pet parents who want better
            ingredients, beautiful presentation, and treats worth remembering.
          </p>

          <div className="ctaRow">
            <a href="#shop" className="btn primary">
              Shop Treats
            </a>
            <a href="#custom" className="btn">
              Personalized Orders
            </a>
          </div>

          <div className="heroStats">
            <div className="stat">
              <strong>Organic</strong>
              <span>Better ingredients, better treats</span>
            </div>
            <div className="stat">
              <strong>Texas Made</strong>
              <span>Small-batch baked in Willis</span>
            </div>
            <div className="stat">
              <strong>Custom Orders</strong>
              <span>Perfect for birthdays & special moments</span>
            </div>
          </div>
        </div>

        <div className="heroRight">
          <div className="heroCard">
            <div className="heroCardLabel">Featured This Week</div>
            <h3>Small-batch treats pets actually get excited about</h3>
            <ul>
              <li>Sweet potato crunch bites</li>
              <li>Pumpkin twists</li>
              <li>Personalized celebration treats</li>
              <li>Local pickup + shipping options</li>
            </ul>
            <a href="#shop" className="btn primary full">
              View Treat Menu
            </a>
          </div>
        </div>
      </section>

      <section id="shop" className="container section">
        <div className="sectionHeading">
          <div className="sectionTag">Shop favorites</div>
          <h2>Signature treats made to feel special</h2>
          <p>
            A cleaner, more premium shopping experience that highlights product
            quality, gifting, and repeat ordering.
          </p>
        </div>

        <div className="cardGrid three">
          <div className="card product">
            <div className="productBadge">Best Seller</div>
            <h3>Sweet Puptato Crunch Bites</h3>
            <p>
              Wholesome, crunchy treats with a simple ingredient profile and a
              premium feel.
            </p>
            <div className="productFoot">
              <span>Organic-inspired favorite</span>
              <a href={EMAIL_LINK}>Order Inquiry →</a>
            </div>
          </div>

          <div className="card product">
            <div className="productBadge">Seasonal</div>
            <h3>Cinna-Pupkin Twists</h3>
            <p>
              Cozy, bakery-style treats for pet parents who want something
              memorable and giftable.
            </p>
            <div className="productFoot">
              <span>Small-batch baked</span>
              <a href={EMAIL_LINK}>Order Inquiry →</a>
            </div>
          </div>

          <div className="card product">
            <div className="productBadge">Custom</div>
            <h3>Personalized Celebration Treats</h3>
            <p>
              Birthday boxes, event orders, and custom treat sets built for
              photo-worthy moments.
            </p>
            <div className="productFoot">
              <span>Made for special occasions</span>
              <a href={EMAIL_LINK}>Customize →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="container section split">
        <div className="splitCard warm">
          <div className="sectionTag">Brand story</div>
          <h2>Built around care, ingredients, and joy.</h2>
          <p>
            Bayou Barkery was founded to give pets the same level of care people
            expect for themselves: thoughtful ingredients, beautiful treats, and
            an experience that feels personal.
          </p>
          <p>
            This section should make the brand feel more elevated and more
            trustworthy than a basic “about us” block.
          </p>
        </div>

        <div className="splitCard">
          <div className="sectionTag">Why this demo converts better</div>
          <ul className="checkList">
            <li>Stronger premium brand feel</li>
            <li>Clearer order flow</li>
            <li>More trust for first-time buyers</li>
            <li>Better presentation of custom treats</li>
            <li>Cleaner path to call, email, and shop</li>
          </ul>
        </div>
      </section>

      <section className="container section">
        <div className="sectionHeading">
          <div className="sectionTag">What pet parents say</div>
          <h2>Built to earn trust fast</h2>
        </div>

        <div className="cardGrid two">
          <div className="card review">
            <div className="stars">★★★★★</div>
            <p>
              My pup absolutely loved the treats. The presentation was adorable,
              shipping was quick, and everything felt high quality.
            </p>
            <strong>Happy customer</strong>
          </div>

          <div className="card review">
            <div className="stars">★★★★★</div>
            <p>
              Exactly the kind of premium pet bakery brand I’d trust to order
              from again. Clean, charming, and easy to shop.
            </p>
            <strong>Repeat buyer</strong>
          </div>
        </div>
      </section>

      <section id="custom" className="container section">
        <div className="ctaPanel">
          <div>
            <div className="sectionTag">Personalized orders</div>
            <h2>Need a custom pet treat order?</h2>
            <p>
              Perfect for birthdays, gotcha days, gifts, and boutique-style pet
              celebrations.
            </p>
          </div>

          <div className="ctaPanelButtons">
            <a href={EMAIL_LINK} className="btn primary">
              Email Custom Order
            </a>
            <a href={PHONE_LINK} className="btn">
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="sectionHeading">
          <div className="sectionTag">FAQ</div>
          <h2>Questions pet parents usually ask</h2>
        </div>

        <div className="cardGrid two">
          <div className="card faq">
            <h3>Do you offer local pickup or delivery?</h3>
            <p>
              Yes — this demo can highlight local ordering for Willis and nearby
              areas, plus shipping for broader reach.
            </p>
          </div>

          <div className="card faq">
            <h3>Can I request custom treats for events?</h3>
            <p>
              Absolutely. Personalized orders should be one of the biggest
              conversion pushes on the site.
            </p>
          </div>

          <div className="card faq">
            <h3>Are the treats made with natural ingredients?</h3>
            <p>
              Yes — the site should lean harder into ingredient quality and
              premium care, because that is a major buying reason.
            </p>
          </div>

          <div className="card faq">
            <h3>How should customers place an order?</h3>
            <p>
              Through a clean shop experience, a custom order inquiry, or direct
              email/call for personalized orders.
            </p>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="footerCta">
          <h2>Give your pet something worth getting excited about.</h2>
          <p>
            Organic-inspired treats, beautiful presentation, and a more premium
            pet bakery experience.
          </p>

          <div className="footerButtons">
            <a href={EMAIL_LINK} className="btn primary">
              Start an Order
            </a>
            <a href="/" className="btn">
              Back to Atlas Digital Lab
            </a>
          </div>
        </div>
      </section>

      <footer className="container footer">
        <div>Bayou Barkery Demo by Atlas Digital Lab</div>
        <div>
          Willis, Texas • {PHONE} • {EMAIL}
        </div>
      </footer>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top, #23463c 0%, #152a24 45%, #0b1412 100%);
          color: #fff9f2;
          font-family: Inter, Arial, sans-serif;
        }

        .container {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 30;
          backdrop-filter: blur(12px);
          background: rgba(11, 20, 18, 0.7);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .topbarInner {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .brandBadge {
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-weight: 800;
        }

        .brandSub {
          color: rgba(255, 249, 242, 0.74);
          font-size: 14px;
        }

        .topCtas {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
          padding-top: 54px;
          padding-bottom: 24px;
        }

        .eyebrow,
        .sectionTag {
          display: inline-block;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #ffe6b8;
          font-size: 13px;
          margin-bottom: 16px;
        }

        h1 {
          font-size: 58px;
          line-height: 1.02;
          margin: 0 0 18px 0;
          max-width: 760px;
        }

        h2 {
          font-size: 38px;
          line-height: 1.1;
          margin: 0 0 14px 0;
        }

        h3 {
          margin: 0 0 10px 0;
          font-size: 22px;
        }

        p {
          color: rgba(255, 249, 242, 0.82);
          line-height: 1.75;
          font-size: 18px;
          margin: 0;
        }

        .ctaRow,
        .footerButtons,
        .ctaPanelButtons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        .btn,
        .pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          border-radius: 14px;
          font-weight: 800;
          transition: 0.2s ease;
        }

        .btn {
          min-height: 52px;
          padding: 14px 22px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          color: #fff9f2;
        }

        .pill {
          min-height: 42px;
          padding: 10px 14px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          color: #fff9f2;
        }

        .primary {
          background: linear-gradient(135deg, #f6c86b, #ff9f68);
          color: #1a1610;
          border: none;
        }

        .full {
          width: 100%;
        }

        .heroStats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 28px;
        }

        .stat,
        .card,
        .heroCard,
        .splitCard,
        .ctaPanel,
        .footerCta {
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat {
          padding: 18px;
        }

        .stat strong {
          display: block;
          margin-bottom: 8px;
          font-size: 18px;
        }

        .stat span {
          color: rgba(255, 249, 242, 0.76);
          font-size: 14px;
          line-height: 1.5;
        }

        .heroCard {
          padding: 26px;
          min-height: 100%;
        }

        .heroCardLabel {
          font-size: 13px;
          color: #ffe6b8;
          margin-bottom: 14px;
          font-weight: 700;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }

        .heroCard ul,
        .checkList,
        .scanList {
          margin: 18px 0 0 0;
          padding-left: 20px;
          line-height: 1.8;
          color: rgba(255, 249, 242, 0.82);
        }

        .section {
          padding: 34px 20px 20px;
        }

        .sectionHeading {
          max-width: 760px;
          margin-bottom: 24px;
        }

        .cardGrid {
          display: grid;
          gap: 18px;
        }

        .cardGrid.three {
          grid-template-columns: repeat(3, 1fr);
        }

        .cardGrid.two {
          grid-template-columns: repeat(2, 1fr);
        }

        .card {
          padding: 24px;
        }

        .productBadge {
          display: inline-block;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(255, 230, 184, 0.12);
          color: #ffe6b8;
          font-size: 12px;
          font-weight: 800;
          margin-bottom: 14px;
        }

        .productFoot {
          margin-top: 18px;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }

        .productFoot span {
          color: rgba(255, 249, 242, 0.66);
          font-size: 14px;
        }

        .productFoot a {
          color: #f6c86b;
          text-decoration: none;
          font-weight: 700;
        }

        .split {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 18px;
        }

        .splitCard {
          padding: 26px;
        }

        .splitCard.warm {
          background: linear-gradient(
            180deg,
            rgba(255, 196, 105, 0.1),
            rgba(255, 255, 255, 0.06)
          );
        }

        .stars {
          color: #f6c86b;
          font-size: 20px;
          margin-bottom: 12px;
        }

        .ctaPanel,
        .footerCta {
          padding: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .faq p,
        .review p {
          font-size: 16px;
        }

        .footer {
          padding: 32px 20px 40px;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          color: rgba(255, 249, 242, 0.64);
          font-size: 14px;
        }

        @media (max-width: 980px) {
          .hero,
          .split,
          .cardGrid.three,
          .cardGrid.two,
          .heroStats {
            grid-template-columns: 1fr;
          }

          .topbarInner,
          .ctaPanel,
          .footerCta {
            align-items: stretch;
          }

          h1 {
            font-size: 42px;
          }

          h2 {
            font-size: 30px;
          }
        }

        @media (max-width: 640px) {
          .topbarInner {
            padding: 12px 0;
          }

          .topCtas,
          .ctaRow,
          .footerButtons,
          .ctaPanelButtons {
            flex-direction: column;
          }

          .pill,
          .btn {
            width: 100%;
          }

          .container {
            padding: 0 14px;
          }

          .section {
            padding-left: 14px;
            padding-right: 14px;
          }

          h1 {
            font-size: 36px;
          }

          p {
            font-size: 16px;
          }
        }
      `}</style>
    </main>
  );
}